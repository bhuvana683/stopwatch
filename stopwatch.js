window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let lapCount = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let resumeBtn = document.querySelector('#resume');
    let lapBtn = document.querySelector('#lap');
    let lapsDiv = document.querySelector('#laps');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + tens;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + seconds;
        }
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        startBtn.style.display = 'none';
        lapBtn.style.display = 'block';
        stopBtn.style.display = 'block';
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
        stopBtn.style.display = 'none';
        lapBtn.style.display = 'none';
        resetBtn.style.display = 'block';
        resumeBtn.style.display = 'block';
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
        lapsDiv.innerHTML = '';
        lapCount = 0;
        resetBtn.style.display = 'none';
        resumeBtn.style.display = 'none';
        startBtn.style.display = 'block';
    };

    resumeBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        resumeBtn.style.display = 'none';
        resetBtn.style.display = 'none';
        stopBtn.style.display = 'block';
        lapBtn.style.display = 'block';
    };

    lapBtn.onclick = () => {
        lapCount++;
        const lapTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`;
        const lapElement = document.createElement('p');
        lapElement.innerText = `Lap ${lapCount}: ${lapTime}`;
        lapsDiv.appendChild(lapElement);
    };
};
