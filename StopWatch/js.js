let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySecond = 0;
let displayMinute = 0;
let displayHour = 0;

let status1 = 'Stopped';
let interval = '';

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
function startTime() {
    seconds++;

    displaySecond = checkTime(seconds);
    displayMinute = checkTime(minutes);
    displayHour = checkTime(hours);

    if (seconds === 60) {
        seconds = 0;
        minutes = ++minutes;
    }
    if (minutes === 60) {
        minutes = 0;
        hours = ++hours;
    }
    document.getElementById('display').innerHTML = displayHour + ":" + displayMinute + ":" + displaySecond;
}

function startStop() {
    if (status1 == 'Stopped') {
        interval = window.setInterval(startTime, 1000);
        document.getElementById('start').innerHTML = 'Pause';
        document.getElementById('start').style.backgroundColor='#00e800';
        status1 = 'Started';
    }
    else if (status1 == 'Started') {
        window.clearInterval(interval);
        document.getElementById('start').innerHTML = 'Continue';
        document.getElementById('start').style.backgroundColor='#0095ff';
        status1 = 'Stopped';
    }
}
function Clear(){
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('display').innerHTML = '00' + ":" + '00' + ":" + '00';
    window.clearInterval(interval); 
    status1= "Stopped";
    document.getElementById('start').innerHTML = 'Start';
    document.getElementById('start').style.backgroundColor='#00e800';
}
