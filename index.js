//for time count fetch 

const task = document.getElementById("task");
const desc = document.getElementById("desc");

function addTask() {
    console.log("count");
    let x = task.value;
    let y = desc.value;
    newRow = `<tr> <td>${x}</td> <td>${y}</td> <td>${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}</td></tr>`
    document.getElementById("mytable").innerHTML += newRow;
    task.value="";
    desc.value="";
}

//for toggle button 

let timer;
let sec = 0;
let mins = 0;
let hrs = 0;

const toggle = document.getElementById('toggle');
const count = document.getElementById('count');
const min = document.getElementById('min');
const hr = document.getElementById('hr');

toggle.addEventListener('click', toggleTimer);

function toggleTimer() {
if (toggle.textContent=='Start') {
    // start
    toggle.textContent='Stop';
    timer=setInterval(function()
    {
        count.textContent=(++sec).toString().padStart(2,'0');
        if(sec>59)
        {
            sec=0;
            min.textContent=(++mins).toString().padStart(2,'0');
            if(mins>59)
            {
                mins=0;
                hours.textContent=(++hrs).toString().padStart(2,'0');
            }
        }
    },1000);
    toggle.style.setProperty('background-color','blueviolet');
} 
else {
    // stop
    clearInterval(timer);
    addTask();
    clearTimer();
    toggle.innerText = 'Start';
    toggle.style.backgroundColor = "rgb(40, 40, 40)";
}

}

function clearTimer() {
    // reset counter to 0
    sec=0;
    mins=0;
    hrs=0;
    hr.textContent='00';
    min.textContent='00';
    count.textContent='00';
}