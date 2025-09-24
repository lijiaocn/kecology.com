---
layout: page
title: "취침 시간 계산기: 상쾌하게 일어나려면 몇 시에 자야 할까요?"
date:   2025-08-15 17:25:46 +0800
last_modified_at: 2025-09-09 14:59:00 +0800
categories: tool
lang: ko
permalink: /ko/tool/best-bedtime-calculator
description: "90분 수면 주기를 기준으로 가장 좋은 취침 시간을 찾아보세요. 상쾌하고 활기차게 일어나는 데 도움이 될 수 있습니다."
mysetting:
  nowrapper: false
---


<p style="text-align:center;color:#FFE0B2">{{ page.description }} 이 페이지가 도움이 된다면 북마크에 추가하세요.</p>
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
    <h1>취침 시간 계산기</h1>
    <p>일어날 시간을 설정하여 언제 잠자리에 들어야 하는지 확인하세요.</p>
    <div id="controls">
        <div class="custom-time-picker">
            <div class="time-scroller" id="hour-scroller"></div>
            <span class="time-picker-separator">:</span>
            <div class="time-scroller" id="minute-scroller"></div>
            <div class="time-scroller" id="ampm-scroller"></div>
        </div>
    </div>
    <p class="keyboard-hint">단축키: <kbd>↑</kbd> <kbd>↓</kbd>로 조정, <kbd>←</kbd> <kbd>→</kbd>로 전환</p>
    <div id="results-container" style="display: none;">
        <h3 id="results-title"><span id="wake-up-time"></span>에 상쾌하게 일어나려면 다음 시간 중 하나에 잠자리에 드세요: <small style="font-weight: normal;">(잠드는 데 15분 및 90분 수면 주기 포함)</small></h3>
        <div id="bedtime-options"></div>
        <div style="background-color: #1c2b3a; border-left: 5px solid #00c7b4; padding: 15px; margin: 20px 0 0 0; border-radius: 4px; color: #e0e0e0; font-size: 15px; text-align: left;">
          <p style="margin: 0 0 10px 0; font-weight: bold;"><span style="color: #ff6b6b;">❤</span> 영국 심장 재단 조언: <a href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/behind-the-headlines/sleep-time-and-heart-disease" target="_blank" style="color: #8492a6; text-decoration: none; font-size: 12px;">(더 읽기)</a></p>
          <ul style="margin: 0; padding-left: 0; list-style-type: none;">
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #00c7b4;">✔</span>
              더 건강한 심장을 위해 <strong>오후 10시에서 11시</strong> 사이에 주무세요.
            </li>
            <li style="padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #00c7b4;">✔</span>
              대부분의 성인은 하룻밤에 <strong>7~9시간</strong>의 수면을 목표로 해야 합니다.
            </li>
          </ul>
        </div>
    </div>
    
    <div id="suggestion-now">
        <h3>지금 잠자리에 드시겠습니까?</h3>
        <a href="/ko/tool/wakeup-calculator" class="bedtime-option-btn" style="text-decoration: none;">기상 시간 계산기 사용해보기</a>
    </div>
</div>

<script>
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? '오후' : '오전';
        hours = hours % 12;
        hours = hours ? hours : 12; // '0'시는 '12'시
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return ampm + ' ' + hours + ':' + minutes;
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
            realTranslateY -= e.deltaY * 0.5; // 민감도 조절

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

        // 키보드 및 클릭 지원
        container.tabIndex = 0; // 포커스 가능하게 만들기
        container.style.outline = 'none'; // 기본 아웃라인 제거

        container.addEventListener('focus', () => {
            selection.style.borderColor = '#ffc107'; // 포커스 시 하이라이트
        });
        container.addEventListener('blur', () => {
            selection.style.borderColor = '#00c7b4'; // 블러 시 되돌리기
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
    const ampm = ['오전', '오후'];

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
        
        if (ampmVal === '오후' && hour < 12) {
            hour += 12;
        }
        if (ampmVal === '오전' && hour === 12) {
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
            let durationText = `${durationHours}시간`;
            if (durationMinutes > 0) {
                durationText += ` ${durationMinutes}분`;
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
            durationSpan.textContent = `(${bt.duration} 수면)`;

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
        const initialAmpm = initialHour >= 12 ? '오후' : '오전';

        initialHour = initialHour % 12;
        initialHour = initialHour ? initialHour : 12;

        hourScroller.setValue(initialHour);
        minuteScroller.setValue(initialMinute.toString().padStart(2, '0'));
        ampmScroller.setValue(initialAmpm);

        document.getElementById('hour-scroller').focus();
    }

    setInitialTime();
</script>