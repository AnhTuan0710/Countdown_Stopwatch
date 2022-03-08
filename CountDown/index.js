var hour =0;
var minute=0;
var second=0;
var a;
var status1 = "set";
var interval;
var status2= "Stopped";

function setTime(a) {
    if (second == 0) {
        second = a;
    } else {
        if (second >= 0 && second / 10 < 1) {
            second = second * 10 + a;
        } else {
            if (second / 10 >= 1 && minute == 0) {
                minute = Math.floor(second / 10);
                second = (second % 10) * 10 + a;
            } else {
                if (minute > 0 && minute / 10 < 1 && second > 0) {
                    minute = minute * 10 + Math.floor(second / 10);
                    second = (second % 10) * 10 + a;
                } else {
                    if (minute / 10 > 1 && hour == 0) {
                        hour = Math.floor(minute / 10);
                        minute = (minute % 10) * 10 + Math.floor(second / 10);
                        second = (second % 10) * 10 + a;
                    } else {
                        if (hour > 0 && hour / 10 < 1) {
                            hour = hour * 10 + Math.floor(minute / 10);
                            minute = (minute % 10) * 10 + Math.floor(second / 10);
                            second = (second % 10) * 10 + a;
                        }
                    }
                }
            }
        }
    }
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}
function set()
{
    status1= "start";
    document.getElementById('status1').style.display= 'none';
    document.getElementById('status2').style.display= 'block';
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    status2="Stopped";
    document.getElementById('start').innerHTML= 'Start';
}
function back()
{
    status1= "set";
    document.getElementById('status1').style.display= 'block';
    document.getElementById('status2').style.display= 'none';
    status2= "Stopped";
    window.clearInterval(interval); 

}
function clear1()
{
    status1= "set";
    second=0;
    minute=0;
    hour=0;
    document.getElementById('hour').innerHTML = '0';
    document.getElementById('minute').innerHTML = '0';
    document.getElementById('second').innerHTML = '0';
}
function time(){
    if (hour == 0 && minute == 0 && second == 0) {
        hour = 0;
        minute = 0;
        second = 0;
        clearInterval(interval); 
        alert('CountDown hoàn thành');
        document.getElementById('start').innerHTML = 'Start';
    } else {
        if (second != 0) {
            second--;
        } else {
            if (minute != 0 && second == 0) {
                second = 59;
                minute--;
            } else {
                if (hour != 0 && minute == 0) {
                    minute = 59;
                    hour--;
                }
            }
        }
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    }
}
function startStop(){
        if (status2 == 'Stopped') {
            interval = setInterval(time, 1000);
            document.getElementById('start').innerHTML = 'Pause';
            document.getElementById('start').style.backgroundColor='#00e800';
            status2 = 'Started';    
        }
        else if (status2 == 'Started') {
            if(second===0 && minute===0 && hour===0)
            {
                window.clearInterval(interval);  
            }
            else{
                window.clearInterval(interval);
            document.getElementById('start').innerHTML = 'Continue';
            document.getElementById('start').style.backgroundColor='#0095ff';
            status2 = 'Stopped';
            }
            
        }
}
function clear2(){
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    window.clearInterval(interval); 
    status2= "Stopped";
    document.getElementById('start').innerHTML = 'Start';
    document.getElementById('start').style.backgroundColor='#00e800';  
}
