var seconds = 0;
var minutes = 0;
var current;
function getTime() {
    seconds++;
    //if the time is 60 seconds, it converts it into a minute
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    //has a little if else statement by checking if the seconds is double digits or not, just for formatting.
    var finalTime = minutes + ':' + (seconds < 10 ? '0' : '')  + seconds;
    document.getElementById('countUp').innerHTML = finalTime;
    // var maxPoints = 10200;
    // var scaleFactor = 40;
    // var points = (maxPoints - seconds) / scaleFactor;
    // document.getElementById('score1').innerHTML = "Score: " + final
}
var timer = setInterval(getTime,1000)