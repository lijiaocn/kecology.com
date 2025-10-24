document.addEventListener('DOMContentLoaded', function() {
    const wakeupOptionsContainer = document.getElementById('wakeup-options');
    const wakeupTitle = document.getElementById('wakeup-title');
    const resultsWrapper = document.getElementById('results-wrapper');
    const calcNowBtn = document.getElementById('calc-now');
    const calc15MinBtn = document.getElementById('calc-15-min');
    const calc30MinBtn = document.getElementById('calc-30-min');
    const customTimeInput = document.getElementById('custom-time-input');
    const calcCustomBtn = document.getElementById('calc-custom-btn');
    const presetOptionBtns = document.querySelectorAll('#bedtime-options-container .bedtime-option-btn');

    function setDefaultTime() {
        const now = new Date();
        const futureTime = new Date(now.getTime() + 45 * 60 * 1000);
        const hours = String(futureTime.getHours()).padStart(2, '0');
        const minutes = String(futureTime.getMinutes()).padStart(2, '0');
        customTimeInput.value = `${hours}:${minutes}`;
    }

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    function calculateAndShowWakeUpTimes(startTime, startTimeString) {
        if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

        resultsWrapper.style.display = 'block';
        const wakeupPromptTemplate = document.getElementById('text-wakeup-prompt').textContent;
        wakeupTitle.textContent = wakeupPromptTemplate.replace('{time}', startTimeString);

        // Add 15 minutes to account for the time it takes to fall asleep.
        const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

        const wakeUpTimes = [];
        const sleepCycleMinutes = 90;
        const numberOfCycles = 6;

        for (let i = 1; i <= numberOfCycles; i++) {
            let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
            
            const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
            const durationMinutes = (i * sleepCycleMinutes) % 60;
            let durationText = `${durationHours}h`;
            if (durationMinutes > 0) {
                durationText += ` ${durationMinutes}m`;
            }

            wakeUpTimes.push({time: wakeUpTime, duration: durationText});
        }

        wakeupOptionsContainer.innerHTML = '';
        
        // Show the best times first (longer sleep)
        wakeUpTimes.reverse().forEach(wt => {
            const wakeupElement = document.createElement('div');
            wakeupElement.className = 'bedtime'; // Reuse style
            
            const timeSpan = document.createElement('span');
            timeSpan.textContent = formatTime(wt.time);
            
            const durationSpan = document.createElement('span');
            durationSpan.className = 'duration-annotation';
            const sleepDurationTemplate = document.getElementById('text-sleep-duration').textContent;
            durationSpan.textContent = sleepDurationTemplate.replace('{duration}', wt.duration);

            wakeupElement.appendChild(timeSpan);
            wakeupElement.appendChild(durationSpan);
            wakeupOptionsContainer.appendChild(wakeupElement);
        });
    }

    function setActiveButton(activeBtn) {
        presetOptionBtns.forEach(btn => btn.classList.remove('active'));
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    calcNowBtn.addEventListener('click', () => {
        setActiveButton(calcNowBtn);
        calculateAndShowWakeUpTimes(new Date(), 'now');
    });

    calc15MinBtn.addEventListener('click', () => {
        setActiveButton(calc15MinBtn);
        const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
        calculateAndShowWakeUpTimes(startTime, 'in 15 minutes');
    });

    calc30MinBtn.addEventListener('click', () => {
        setActiveButton(calc30MinBtn);
        const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
        calculateAndShowWakeUpTimes(startTime, 'in 30 minutes');
    });

    calcCustomBtn.addEventListener('click', () => {
        setActiveButton(null); // No preset button is active
        const timeValue = customTimeInput.value;
        if (!timeValue) {
            // Maybe provide feedback to the user
            if (resultsWrapper) resultsWrapper.style.display = 'none';
            wakeupTitle.textContent = document.getElementById('text-select-time-first').textContent;
            wakeupOptionsContainer.innerHTML = '';
            return;
        }

        const [hours, minutes] = timeValue.split(':');
        const now = new Date();
        const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

        // If the selected time is earlier than now, assume it's for the next day
        if (startTime < now) {
            startTime.setDate(startTime.getDate() + 1);
        }
        
        calculateAndShowWakeUpTimes(startTime, `at ${formatTime(startTime)}`);
    });
    
    // Set default time for the custom input
    setDefaultTime();
});
