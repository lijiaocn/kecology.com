---
layout: page
title: "기상 시간 계산기: 내일 몇 시에 일어나야 할까요?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: ko
permalink: /ko/tool/wakeup-calculator
description: "90분 수면 주기를 기준으로 가장 좋은 기상 시간을 알아보세요. 상쾌하고 활기차게 일어나는 데 도움이 될 수 있습니다."
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
    #sleep-calculator-container h3 {
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
    #bedtime-options-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
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
    #custom-time-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    #custom-time-input {
        background-color: #e0e0e0; /* Light background */
        color: #0d1a26; /* Dark text */
        border: 1px solid #00c7b4;
        padding: 8px;
        border-radius: 8px;
    }
    #wakeup-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-top: 20px;
    }
    .bedtime {
        background-color: #00c7b4;
        color: #0d1a26;
        padding: 6px 12px;
        border-radius: 14px;
        font-size: 14px;
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
</style>

<div id="sleep-calculator-container">
    <h3>기상 시간 계산기</h3>
    <p>언제 잠자리에 들 계획인지 선택하면 최적의 기상 시간을 계산해 드립니다. 계산에는 잠드는 데 평균 15분이 포함됩니다.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">지금 잠자리에 들기</button>
        <button id="calc-15-min" class="bedtime-option-btn">15분 후</button>
        <button id="calc-30-min" class="bedtime-option-btn">30분 후</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">또는 취침 시간 선택:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">계산</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">기상 시간으로 취침 시간을 계산하고 싶으신가요?</p>
        <a href="/ko/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">취침 시간 계산기 사용해보기</a>
    </div>

</div>

<script>
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
            const ampm = hours >= 12 ? '오후' : '오전';
            hours = hours % 12;
            hours = hours ? hours : 12; // '0'시는 '12'시
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return ampm + ' ' + hours + ':' + minutes;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `${startTimeString}에 잠자리에 들면 다음과 같은 시간에 일어나세요:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}시간`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}분`;
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
                durationSpan.textContent = `(${wt.duration} 수면)`;

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
            calculateAndShowWakeUpTimes(new Date(), '지금');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '15분 후');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '30분 후');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = '먼저 시간을 선택하세요.';
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
            
            calculateAndShowWakeUpTimes(startTime, `${formatTime(startTime)}에`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### 질문: 내일 상쾌하고 멍하지 않게 일어나려면 몇 시에 일어나야 할까요?

"어떤 아침에는 상쾌하게 침대에서 일어나지만, 다른 날에는 정말 힘들고 몇 시간 동안이나 멍한 상태입니다. 꾸준히 활기차게 일어나는 비결은 무엇일까요? 내일 몇 시에 일어나야 할까요?"

### 답변: 비결은 수면 주기가 끝날 때 일어나는 것입니다.

그 멍한 느낌이요? 알람이 깊은 잠에 빠졌을 때 당신을 깨웠기 때문입니다. 우리 몸은 90분의 수면 주기를 사용합니다. 상쾌함을 느끼려면 수면이 가장 얕은 주기 마지막에 일어나세요.

위의 계산기를 사용하여 최적의 기상 시간을 찾으세요. 아래 다이어그램은 이것이 어떻게 작동하는지 보여줍니다.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="깊은 수면 단계에서 깨어날 때 오는 멍함을 피하고 90분 수면 주기가 끝날 때 일어나는 것이 가장 좋은 시간임을 보여주는 다이어그램." style="max-width: 100%;"/>
</p>

### 연령별 권장 수면

연령대별로 수면 요구량이 다릅니다. 일반적으로 권장되는 수면 시간과 수면 주기에 대한 간략한 안내입니다.

| 연령대 | 수면 시간 | 수면 주기 |
| :--- | :--- | :--- |
| 신생아 (0-3개월) | 14-17시간 | 해당 없음 |
| 영아 (4-11개월) | 12-15시간 | 해당 없음 |
| 유아 (1-2세) | 11-14시간 | 7-9 주기 |
| 미취학 아동 (3-5세) | 10-13시간 | 6-8 주기 |
| 학령기 아동 (6-13세) | 9-11시간 | 6-7 주기 |
| 십대 (14-17세) | 8-10시간 | 5-6 주기 |
| 청년 (18-25세) | 7-9시간 | 5-6 주기 |
| 성인 (26-64세) | 7-9시간 | 5-6 주기 |
| 노인 (65세 이상) | 7-8시간 | 5-6 주기 |

*참고: 수면 요구량은 사람마다 다를 수 있습니다. 이 표는 일반적인 지침입니다.*