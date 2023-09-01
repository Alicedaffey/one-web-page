var circle = document.getElementById("circle");
var goon = document.getElementById("goon");

var rotateValue = circle.style.transform;

var rotateSum;

goon.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};