---
layout: page
title:  "Sleep Calculator"
date:   2025-08-15 17:25:46 +0800
categories: tool
permalink: /tool/sleep-calculator
display: fullscreen
backgroud-color: black
---
<style>
    #sleep-calculator-container {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 500px;
        margin: 40px auto;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        background: #0d1a26;
        color: #e0e0e0;
        text-align: center;
    }
    #sleep-calculator-container h1 {
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 20px;
    }
    #sleep-calculator-container p {
        color: #e0e0e0;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 25px;
    }
    #controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-bottom: 25px;
    }
    .custom-time-picker {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px;
        border-radius: 8px;
        background-color: #1c2b3a;
        border: 1px solid #3a506b;
        height: 120px;
    }
    .time-picker-separator {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
    }
    .time-scroller {
        height: 100%;
        width: 60px;
        overflow: hidden;
        position: relative;
        cursor: ns-resize;
    }
    .scroller-list {
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: transform 0.15s ease-out;
    }
    .scroller-item {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #8492a6;
        transition: all 0.2s;
    }
    .scroller-item.active {
        color: #00c7b4;
        font-weight: 600;
        font-size: 22px;
    }
    .scroller-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #1c2b3a 0%, rgba(28,43,58,0) 40%, rgba(28,43,58,0) 60%, #1c2b3a 100%);
        pointer-events: none;
    }
    .scroller-selection {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 40px;
        transform: translateY(-50%);
        border-top: 1px solid #00c7b4;
        border-bottom: 1px solid #00c7b4;
        pointer-events: none;
    }
    #results-container {
        margin-top: 20px;
    }
    #results-title {
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 15px;
    }
    #bedtime-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }
    .bedtime {
        background-color: #00c7b4;
        color: #0d1a26;
        padding: 10px 18px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 120px;
    }
    .duration-annotation {
        font-size: 12px;
        color: #1c2b3a;
        margin-top: 2px;
        font-weight: 500;
    }
    .explanation {
        margin-top: 25px;
        font-size: 14px;
        color: #e0e0e0;
    }
</style>

<div id="sleep-calculator-container">
    <h1>Sleep Calculator</h1>
    <p>Set your desired wake-up time to calculate when you should go to sleep. A good night's sleep consists of 5-6 sleep cycles.</p>
    <div id="controls">
        <div class="custom-time-picker">
            <div class="time-scroller" id="hour-scroller"></div>
            <span class="time-picker-separator">:</span>
            <div class="time-scroller" id="minute-scroller"></div>
            <div class="time-scroller" id="ampm-scroller"></div>
        </div>
    </div>
    <div id="results-container"></div>
    <p class="explanation">The average person takes about 15 minutes to fall asleep. The calculated times factor this in, aiming for you to wake up at the end of a 90-minute sleep cycle.</p>
</div>

<script>
    const resultsContainer = document.getElementById('results-container');

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    function createScroller(containerId, items) {
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

        function updateActive() {
            const listItems = list.children;
            for(let i=0; i<listItems.length; i++) {
                listItems[i].classList.remove('active');
            }
            listItems[currentIndex + paddingItems].classList.add('active');
            list.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
            calculateBedtimes();
        }

        container.addEventListener('wheel', e => {
            e.preventDefault();
            if (e.deltaY < 0) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(items.length - 1, currentIndex + 1);
            }
            updateActive();
        });

        let isDragging = false;
        let startY;
        let startTranslateY;

        container.addEventListener('touchstart', e => {
            e.preventDefault();
            isDragging = true;
            startY = e.touches[0].clientY;
            startTranslateY = -currentIndex * itemHeight;
            list.style.transition = 'none';
        }, { passive: false });

        container.addEventListener('touchmove', e => {
            if (!isDragging) return;
            e.preventDefault();
            const deltaY = e.touches[0].clientY - startY;
            list.style.transform = `translateY(${startTranslateY + deltaY}px)`;
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

    const hourScroller = createScroller('hour-scroller', hours);
    const minuteScroller = createScroller('minute-scroller', minutes);
    const ampmScroller = createScroller('ampm-scroller', ampm);

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

        resultsContainer.innerHTML = `
            <h3 id="results-title">To wake up refreshed at ${formatTime(wakeUpDate)}, try to fall asleep at one of these times:</h3>
            <div id="bedtime-options"></div>
        `;
        
        const bedtimeOptionsContainer = document.getElementById('bedtime-options');
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
        initialHour = initialHour ? initialHour : 12; // Handle midnight (00:xx becomes 12:xx AM)

        hourScroller.setValue(initialHour);
        minuteScroller.setValue(initialMinute.toString().padStart(2, '0'));
        ampmScroller.setValue(initialAmpm);
    }

    setInitialTime();
    
</script>
