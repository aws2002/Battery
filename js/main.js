
var percentage = document.querySelector('.percentage');
var percent = document.querySelector('.percent');
var batteryPromise = navigator.getBattery();

batteryPromise.then(function(battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
})


var sec = document.querySelector('.sec');
var toggle = document.querySelector('.toggle');

toggle.onclick = function(){
    sec.classList.toggle('dark')
}