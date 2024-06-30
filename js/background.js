backgroundImgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
];

randomBackground = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

document.body.style.backgroundImage = `url('img/${randomBackground}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundAttachment = "fixed";
