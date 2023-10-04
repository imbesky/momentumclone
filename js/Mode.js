const Night = document.querySelector("#night");
const Day = document.querySelector("#day");
const Page = document.querySelector(".container")

function NightMode(){
    Page.classList.remove("daymode")
    Page.classList.add("nightmode");
}
function DayMode(){
    Page.classList.remove("nightmode")
    Page.classList.add("daymode");
}

Night.addEventListener("click", NightMode);
Day.addEventListener("click", DayMode);