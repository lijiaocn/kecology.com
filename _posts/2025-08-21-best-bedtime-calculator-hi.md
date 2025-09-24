---
layout: page
title: "सोने का समय कैलकुलेटर: तरोताज़ा महसूस करने के लिए मुझे किस समय बिस्तर पर जाना चाहिए?"
date:   2025-08-15 17:25:46 +0800
last_modified_at: 2025-09-09 14:59:00 +0800
categories: tool
lang: hi
permalink: /hi/tool/best-bedtime-calculator
description: "90-मिनट की नींद के चक्र के आधार पर सोने का सबसे अच्छा समय खोजें। यह आपको तरोताज़ा और ऊर्जावान महसूस करते हुए जागने में मदद कर सकता है।"
mysetting:
  nowrapper: false
---


<p style="text-align:center;color:#FFE0B2">{{ page.description }} यदि यह पृष्ठ आपकी सहायता करता है तो इसे बुकमार्क करें।</p>
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
    .keyboard-hint {
        font-size: 14px;
        color: #8492a6;
        margin-top: 15px;
        text-align: center;
    }
    .keyboard-hint kbd {
        background-color: #1c2b3a;
        color: #e0e0e0;
        padding: 3px 6px;
        border-radius: 4px;
        font-family: monospace;
        border: 1px solid #3a506b;
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
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 100px;
    }
    .duration-annotation {
        font-size: 12px;
        color: #1c2b3a;
        margin-top: 2px;
        font-weight: 500;
    }
    #suggestion-now {
        margin-top: 10px;
        padding: 20px;
        border-radius: 8px;
    }
    #suggestion-now h3 {
        color: #00c7b4;
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 18px;
    }
    #suggestion-now p {
        font-size: 15px;
        margin-bottom: 15px;
    }
    .btn {
        background-color: #00c7b4;
        color: #0d1a26;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-top: 15px;
        display: inline-block;
    }
    .btn:hover {
        background-color: #00a896;
    }

    .bedtime-option-btn {
        background-color: #1c2b3a;
        color: #00c7b4;
        border: 1px solid #00c7b4;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }
    .bedtime-option-btn:hover, .bedtime-option-btn.active {
        background-color: #00c7b4;
        color: #0d1a26;
    }
    
</style>

<div id="sleep-calculator-container">
    <h1>सोने का समय कैलकुलेटर</h1>
    <p>अपना जागने का समय निर्धारित करें ताकि आप देख सकें कि आपको कब सोना चाहिए।</p>
    <div id="controls">
        <div class="custom-time-picker">
            <div class="time-scroller" id="hour-scroller"></div>
            <span class="time-picker-separator">:</span>
            <div class="time-scroller" id="minute-scroller"></div>
            <div class="time-scroller" id="ampm-scroller"></div>
        </div>
    </div>
    <p class="keyboard-hint">शॉर्टकट: समायोजित करने के लिए <kbd>↑</kbd> <kbd>↓</kbd>, और स्विच करने के लिए <kbd>←</kbd> <kbd>→</kbd></p>
    <div id="results-container" style="display: none;">
        <h3 id="results-title"><span id="wake-up-time"></span> पर तरोताज़ा जागने के लिए, इनमें से किसी एक समय पर सो जाने का प्रयास करें: <small style="font-weight: normal;">(इसमें सोने के लिए 15 मिनट और 90 मिनट के नींद चक्र शामिल हैं)</small></h3>
        <div id="bedtime-options"></div>
        <div style="background-color: #1c2b3a; border-left: 5px solid #00c7b4; padding: 15px; margin: 20px 0 0 0; border-radius: 4px; color: #e0e0e0; font-size: 15px; text-align: left;">
          <p style="margin: 0 0 10px 0; font-weight: bold;"><span style="color: #ff6b6b;">❤</span> ब्रिटिश हार्ट फाउंडेशन की सलाह: <a href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/behind-the-headlines/sleep-time-and-heart-disease" target="_blank" style="color: #8492a6; text-decoration: none; font-size: 12px;">(और पढ़ें)</a></p>
          <ul style="margin: 0; padding-left: 0; list-style-type: none;">
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #00c7b4;">✔</span>
              स्वस्थ हृदय के लिए <strong>रात 10 बजे से 11 बजे</strong> के बीच सोएं।
            </li>
            <li style="padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #00c7b4;">✔</span>
              अधिकांश वयस्कों को प्रति रात <strong>7 से 9 घंटे</strong> की नींद का लक्ष्य रखना चाहिए।
            </li>
          </ul>
        </div>
    </div>
    
    <div id="suggestion-now">
        <h3>अभी बिस्तर पर जाएं?</h3>
        <a href="/hi/tool/wakeup-calculator" class="bedtime-option-btn" style="text-decoration: none;">हमारा जागने का समय कैलकुलेटर आज़माएं</a>
    </div>
</div>

<script>
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // घंटा '0' '12' होना चाहिए
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if (ampm === 'PM') {
            return hours + ':' + minutes + ' अपराह्न';
        } else {
            return hours + ':' + minutes + ' पूर्वाह्न';
        }
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
            realTranslateY -= e.deltaY * 0.5; // संवेदनशीलता समायोजित करें

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

        // कीबोर्ड और क्लिक समर्थन
        container.tabIndex = 0; // फ़ोकस करने योग्य बनाएं
        container.style.outline = 'none'; // डिफ़ॉल्ट आउटलाइन हटाएं

        container.addEventListener('focus', () => {
            selection.style.borderColor = '#ffc107'; // फ़ोकस होने पर हाइलाइट करें
        });
        container.addEventListener('blur', () => {
            selection.style.borderColor = '#00c7b4'; // ब्लर होने पर वापस लाएं
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
            let durationText = `${durationHours}घं`;
            if (durationMinutes > 0) {
                durationText += ` ${durationMinutes}मि`;
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
            durationSpan.textContent = `(${bt.duration} नींद)`;

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
</script>