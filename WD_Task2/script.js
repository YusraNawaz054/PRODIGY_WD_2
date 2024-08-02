let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.display');
let int = null;

document.getElementById('startBtn').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00:00';
    document.getElementById('lapsList').innerHTML = '';
});

document.getElementById('lapBtn').addEventListener('click', () => {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    const lapList = document.getElementById('lapsList');
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    lapList.appendChild(lapItem);
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    timerRef.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(unit) {
    return unit.toString().padStart(2, '0');
}
