var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset  = document.getElementById('reset');

var workMin = document.getElementById('w_minutes');
var workSec = document.getElementById('w_seconds');

var breakMin = document.getElementById('b_minutes');
var breakSec = document.getElementById('b_seconds');

//timer variable
var startTimer;

//start button
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000);
    }else{
        alert("Timer is already running!");
    }
})

//reset button
reset.addEventListener('click', function(){
    workMin.innerText = 25;
    workSec.innerText = "00";

    breakMin.innerText = 5;
    breakSec.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

//stop button
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

function stopInterval(){
    clearInterval(startTimer);
}

function timer(){
    //work timer
    if(workSec.innerText != 0){
        workSec.innerText--;
    }else if(workMin.innerText != 0 && workSec.innerText == 0){
        workSec.innerText = 59;
        workMin.innerText--;
    }

    //break timer
    if(workMin.innerText == 0 && workSec.innerText == 0){
        if(breakSec.innerText != 0){
            breakSec.innerText--;
        }else if(breakMin.innerText != 0 && breakSec == 0){
            breakSec.innerText = 59;
            breakMin.innerText--;
        }
    }

    //cycles counter
    if(workMin.innerText == 0 && workSec.innerText == 0 && breakMin.innerText == 0 && breakSec.innerText == 0){
       
        workMin.innerText = 25;
        workSec.innerText = "00";

        breakMin.innerText = 5;
        breakSec.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}