const nameform = document.querySelector("#setname")
const nameinput = document.querySelector("#name")
const username = document.querySelector("#username");
const HideClass = "hidden";
const userkey = "user";
const UserName = localStorage.getItem(userkey);
const ResetButton = document.querySelector("#resetname")

function setname(r){
    r.preventDefault();
    const nameofuser = nameinput.value;
    nameinput.value = "";
    localStorage.setItem(userkey, nameofuser);
    nameform.classList.add(HideClass);
    username.innerText = `${nameofuser}의 기록`;
    ResetButton.classList.remove(HideClass);
    window.location.reload(true);
}

function resetname(){
    localStorage.removeItem(userkey);
    nameform.classList.remove(HideClass);
    username.innerText = `당신의 이름은 무엇인가요?`;
    ResetButton.classList.add(HideClass);
    window.location.reload(true);
}

if (UserName === null) {
    nameform.classList.remove(HideClass);
    username.innerText = `당신의 이름은 무엇인가요?`;
    ResetButton.classList.add(HideClass);
} else {
    nameform.classList.add(HideClass);
    username.innerText = `${UserName}의 기록`;
    ResetButton.classList.remove(HideClass);
}

nameform.addEventListener("submit", setname);
ResetButton.addEventListener("click", resetname);
