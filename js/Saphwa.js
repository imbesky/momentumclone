const Images = [
    'bgimg(1).jpg',
    'bgimg(2).jpg',
    'bgimg(3).jpg',
    'bgimg(4).jpg',
    'bgimg(5).jpg',
    'bgimg(6).jpg'
];
const Bimg = document.querySelector("#saphwa");

function backimg(){
    const i = Math.floor(Math.random()*(Images.length));
    Bimg.src=`imgs/${Images[i]}`;
}
setTimeout(backimg, 0);
setInterval(backimg, 10000);