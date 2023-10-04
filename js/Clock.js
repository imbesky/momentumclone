const Clock = document.querySelector("#clock");

function NowTime(){
    const Time = new Date();
    const H = String(Time.getHours()).padStart(2,"0");
    const M = String(Time.getMinutes()).padStart(2,"0");
    const S = String(Time.getSeconds()).padStart(2,"0");
    const Y = String(Time.getFullYear());
    const Mo = String(Time.getMonth());
    const D = String(Time.getDate());
    Clock.innerText = `${Y}년 ${Mo}월 ${D}일 ${H}시 ${M}분 ${S}초 `;
}

setTimeout(NowTime, 0);
setInterval(NowTime, 1000);