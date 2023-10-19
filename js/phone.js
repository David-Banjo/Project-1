var circle = document.getElementById('circle');
var upBtn = document.getElementById('upBtn');
var downBtn = document.getElementById('downBtn');


var rotateValue = 0;
var rotateSum;

upBtn.onclick = () => {
    rotateSum = rotateValue + -90;
    circle.style.transform = `rotate(${rotateSum}deg)`;
    rotateValue = rotateSum;
}

downBtn.onclick = () => {
    rotateSum = rotateValue + 90;
    circle.style.transform = `rotate(${rotateSum}deg)`;
    rotateValue = rotateSum;
}



