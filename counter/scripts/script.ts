var timeLeftDiv = document.querySelector('#timeLeft');
var millisecondsInDay = 86400000;
var millisecondsInHour = 3600000;
var millisecondsInMinute = 60000;
var millisecondsInSecond = 1000;
var total = 0;

function init() {
    setInterval(() => {
      console.log('YAY');
      total = new Date(2021, 7, 26).getTime() - Date.now();
      timeLeftDiv.innerHTML = dhm(total);
    }, 1000)
}

function dhm(ms){
    var days = Math.floor(ms / millisecondsInDay);
    var daysms= ms % millisecondsInDay;
    var hours = Math.floor((daysms) / millisecondsInHour);
    var hoursms= ms % millisecondsInHour;
    var minutes = Math.floor((hoursms) / millisecondsInMinute);
    var minutesms= ms % millisecondsInMinute;
    var seconds = Math.floor((minutesms) / millisecondsInSecond);
    return `DAYS: ${days}</br>
            HOURS: ${hours}</br>
            MINUTES: ${minutes}</br>
            SECONDS: ${seconds}`;
}