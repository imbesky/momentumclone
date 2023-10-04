const TodoForm = document.querySelector(`#todoform`);
const TodoInput = document.querySelector("#todoform input")
const TodoList = document.querySelector("#todolist");
const User = localStorage.getItem("user");
const TodoKey = `${User === null? "unknown-user" : User }Todos`;
const DonetodoKey = `${User === null? "unknown-user" : User }Done`;
const SavedTodos = localStorage.getItem(TodoKey);
const SavedDones = localStorage.getItem(DonetodoKey);
const checkedclass = "checked";
let TodoArray = [];
let DoneTodos = [];

function savetodos(){
    localStorage.setItem(TodoKey, JSON.stringify(TodoArray));
    localStorage.setItem(DonetodoKey, JSON.stringify(DoneTodos));   
}

function deleteclicked(i){
    const li = event.target.parentElement;
    li.remove();
    if (li.className !== checkedclass){
        TodoArray = TodoArray.filter(item => item.id != li.id);
    } else {
        DoneTodos = DoneTodos.filter(item => item.id != li.id);
    }
    savetodos();
}
function checked(){
    const li = event.target.parentElement;
    const tasks = document.querySelector(`#${CSS.escape(li.id)} span`);
    const todoandid = {
        id: li.id,
        text: tasks.innerText,
    };
    const list = document.getElementById(`${li.id}`);
    if (list.className !== checkedclass){
        TodoArray = TodoArray.filter(item => item.id != li.id);
        DoneTodos.push(todoandid);
        savetodos();
        list.classList.add(checkedclass);
    } else {
        DoneTodos = DoneTodos.filter(item => item.id != li.id);
        TodoArray.push(todoandid);
        savetodos();
        list.classList.remove(checkedclass);
    }}

function newtodo(newtodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    const deleteB = document.createElement("button");
    const checkbox = document.createElement("input");
    const label = document.createElement(`label`);

    list.id = newtodo.id;
    span.innerText = newtodo.text;
    deleteB.id = "deletebutton";
    checkbox.type = "checkbox"
    checkbox.classList = "checkinput"
    checkbox.id = `check${list.id}`;
    label.htmlFor = `${checkbox.id}`;
    label.classList = "checklabel";

    deleteB.addEventListener("click", deleteclicked);
    checkbox.addEventListener("change", checked);

    list.appendChild(span);
    list.appendChild(checkbox);
    list.appendChild(label);
    list.appendChild(deleteB);
    TodoList.appendChild(list);
}

function donetodo(donetodo){
    newtodo(donetodo);
    const checks = document.querySelector(`#${CSS.escape(donetodo.id)} input`);
    const checklist = document.querySelector(`#${CSS.escape(donetodo.id)}`);
    checks.checked = true;
    checklist.classList.add(checkedclass); 
    const imgs = document.querySelector(`#${CSS.escape(donetodo.id)} label img`); 
}

function todosubmit(r){
    r.preventDefault();
    const tasks = TodoInput.value;
    TodoInput.value = "";
    const todoandid = {
        id: Date.now(),
        text: tasks,};
    TodoArray.push(todoandid);
    newtodo(todoandid);
    savetodos();
}

if (SavedTodos !== null) {
    const ParsedTodos = JSON.parse(SavedTodos);
    TodoArray = ParsedTodos;
    ParsedTodos.forEach(newtodo);
}
if (SavedDones !== null) {
    const ParsedDones = JSON.parse(SavedDones);
    DoneTodos = ParsedDones;
    ParsedDones.forEach(donetodo);
}
TodoForm.addEventListener("submit", todosubmit);