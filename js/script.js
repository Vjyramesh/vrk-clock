var hourHand = document.querySelector(".hour-hand");
var minuteHand = document.querySelector(".minute-hand");
var secondHand = document.querySelector(".second-hand");
var interval = 0;
// var clock = document.querySelector(".clock");
// clock.style.display = "block";
setInterval(function(){
var date = new Date();
secondHand.style.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
minuteHand.style.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
var getHour = date.getHours();
var hour;
if (getHour == 0 || getHour == 12) {
  hour = date.getMinutes() / 2;
} else {
  hour = parseInt(date.getHours() * 30) + date.getMinutes() / 2;
}
hourHand.style.transform = "rotate(" + hour + "deg)";
interval=1000
}, interval)
