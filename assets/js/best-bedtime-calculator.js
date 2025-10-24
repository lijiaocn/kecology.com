function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

function createScroller(containerId, items, prevScrollerId, nextScrollerId) {
    const container = document.getElementById(containerId);
    const list = document.createElement('div');
    list.className = 'scroller-list';
    
    const paddingItems = 1;
    for(let i=0; i<paddingItems; i++) {
        const el = document.createElement('div');
        el.className = 'scroller-item';
        list.appendChild(el);
    }

    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'scroller-item';
        el.textContent = item;
        list.appendChild(el);
    });

    for(let i=0; i<paddingItems; i++) {
        const el = document.createElement('div');
        el.className = 'scroller-item';
        list.appendChild(el);
    }

    container.appendChild(list);
    const overlay = document.createElement('div');
    overlay.className = 'scroller-overlay';
    container.appendChild(overlay);
    const selection = document.createElement('div');
    selection.className = 'scroller-selection';
    container.appendChild(selection);

    const itemHeight = 40;
    let currentIndex = 0;
    let realTranslateY = 0;

    function updateActive() {
        const listItems = list.children;
        for(let i=0; i<listItems.length; i++) {
            listItems[i].classList.remove('active');
        }
        listItems[currentIndex + paddingItems].classList.add('active');
        realTranslateY = -currentIndex * itemHeight;
        list.style.transition = 'transform 0.15s ease-out';
        list.style.transform = `translateY(${realTranslateY}px)`;
        calculateBedtimes();
    }

    let wheelingTimeout;
    container.addEventListener('wheel', e => {
        e.preventDefault();
        
        list.style.transition = 'none';
        realTranslateY -= e.deltaY * 0.5; // Adjust sensitivity

        const maxTranslateY = 0;
        const minTranslateY = -(items.length - 1) * itemHeight;
        realTranslateY = Math.max(minTranslateY, Math.min(maxTranslateY, realTranslateY));

        list.style.transform = `translateY(${realTranslateY}px)`;

        clearTimeout(wheelingTimeout);
        wheelingTimeout = setTimeout(() => {
            list.style.transition = 'transform 0.15s ease-out';
            currentIndex = Math.round(-realTranslateY / itemHeight);
            currentIndex = Math.max(0, Math.min(items.length - 1, currentIndex));
            updateActive();
        }, 150);
    });

    let isDragging = false;
    let startY;
    let startTranslateY;

    container.addEventListener('touchstart', e => {
        e.preventDefault();
        isDragging = true;
        startY = e.touches[0].clientY;
        startTranslateY = realTranslateY;
        list.style.transition = 'none';
    }, { passive: false });

    container.addEventListener('touchmove', e => {
        if (!isDragging) return;
        e.preventDefault();
        const deltaY = e.touches[0].clientY - startY;
        realTranslateY = startTranslateY + deltaY;
        
        const maxTranslateY = 0;
        const minTranslateY = -(items.length - 1) * itemHeight;
        realTranslateY = Math.max(minTranslateY, Math.min(maxTranslateY, realTranslateY));

        list.style.transform = `translateY(${realTranslateY}px)`;
    }, { passive: false });

    container.addEventListener('touchend', e => {
        if (!isDragging) return;
        isDragging = false;
        list.style.transition = 'transform 0.15s ease-out';
        
        const currentTransform = list.style.transform;
        const currentTranslateY = currentTransform ? parseFloat(currentTransform.replace('translateY(', '').replace('px)', '')) : 0;

        currentIndex = Math.round(-currentTranslateY / itemHeight);
        currentIndex = Math.max(0, Math.min(items.length - 1, currentIndex));
        updateActive();
    });

    // Keyboard and Click support
    container.tabIndex = 0; // Make focusable
    container.style.outline = 'none'; // Remove default outline

    container.addEventListener('focus', () => {
        selection.style.borderColor = '#ffc107'; // Highlight when focused
    });
    container.addEventListener('blur', () => {
        selection.style.borderColor = '#00c7b4'; // Revert on blur
    });

    container.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = Math.max(0, currentIndex - 1);
            updateActive();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = Math.min(items.length - 1, currentIndex + 1);
            updateActive();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (prevScrollerId) document.getElementById(prevScrollerId).focus();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (nextScrollerId) document.getElementById(nextScrollerId).focus();
        }
    });

    if (containerId === 'ampm-scroller') {
        container.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateActive();
        });
    }

    function setValue(value) {
        const index = items.indexOf(value);
        if (index !== -1) {
            currentIndex = index;
            updateActive();
        }
    }
    
    function getValue() {
        return items[currentIndex];
    }

    return { setValue, getValue, updateActive };
}

const hours = Array.from({length: 12}, (_, i) => i + 1);
const minutes = Array.from({length: 60}, (_, i) => i.toString().padStart(2, '0'));
const ampm = ['AM', 'PM'];

const hourScroller = createScroller('hour-scroller', hours, 'ampm-scroller', 'minute-scroller');
const minuteScroller = createScroller('minute-scroller', minutes, 'hour-scroller', 'ampm-scroller');
const ampmScroller = createScroller('ampm-scroller', ampm, 'minute-scroller', 'hour-scroller');

function calculateBedtimes() {
    let hour = parseInt(hourScroller.getValue(), 10);
    let minute = parseInt(minuteScroller.getValue(), 10);
    const ampmVal = ampmScroller.getValue();

    if (isNaN(hour) || isNaN(minute)) {
        return;
    }
    
    if (ampmVal === 'PM' && hour < 12) {
        hour += 12;
    }
    if (ampmVal === 'AM' && hour === 12) {
        hour = 0;
    }

    const wakeUpDate = new Date();
    wakeUpDate.setHours(hour, minute, 0, 0);

    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');
    const bedtimeOptionsContainer = document.getElementById('bedtime-options');

    if (!resultsContainer || !resultsTitle || !bedtimeOptionsContainer) return;

    document.getElementById('wake-up-time').textContent = formatTime(wakeUpDate);
    resultsContainer.style.display = 'block';

    bedtimeOptionsContainer.innerHTML = '';

    const sleepOnsetMinutes = 15;
    const sleepCycleMinutes = 90;
    const numberOfCycles = 6;
    const bedtimes = [];

    let bedtime = new Date(wakeUpDate.getTime());

    for (let i = 0; i < numberOfCycles; i++) {
        bedtime.setMinutes(bedtime.getMinutes() - sleepCycleMinutes);
        let finalBedtime = new Date(bedtime.getTime());
        finalBedtime.setMinutes(finalBedtime.getMinutes() - sleepOnsetMinutes);
        
        const cycles = i + 1;
        const durationHours = Math.floor((cycles * sleepCycleMinutes) / 60);
        const durationMinutes = (cycles * sleepCycleMinutes) % 60;
        let durationText = `${durationHours}h`;
        if (durationMinutes > 0) {
            durationText += ` ${durationMinutes}m`;
        }

        bedtimes.push({time: finalBedtime, duration: durationText});
    }

    bedtimes.sort((a, b) => a.time - b.time);

    bedtimes.forEach(bt => {
        const bedtimeElement = document.createElement('div');
        bedtimeElement.className = 'bedtime';
        
        const timeSpan = document.createElement('span');
        timeSpan.textContent = formatTime(bt.time);
        
        const durationSpan = document.createElement('span');
        durationSpan.className = 'duration-annotation';
        durationSpan.textContent = `(${bt.duration} sleep)`;

        bedtimeElement.appendChild(timeSpan);
        bedtimeElement.appendChild(durationSpan);
        bedtimeOptionsContainer.appendChild(bedtimeElement);
    });
}

function setInitialTime() {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    now.setMinutes(now.getMinutes() + 30);

    let initialHour = now.getHours();
    const initialMinute = now.getMinutes();
    const initialAmpm = initialHour >= 12 ? 'PM' : 'AM';

    initialHour = initialHour % 12;
    initialHour = initialHour ? initialHour : 12;

    hourScroller.setValue(initialHour);
    minuteScroller.setValue(initialMinute.toString().padStart(2, '0'));
    ampmScroller.setValue(initialAmpm);

    document.getElementById('hour-scroller').focus();
}

setInitialTime();
