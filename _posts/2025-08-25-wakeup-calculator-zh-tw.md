---
layout: page
title: "起床時間計算器：我明天應該幾點起床？"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: zh-TW
permalink: /zh-tw/tool/wakeup-calculator
description: "根據90分鐘的睡眠週期找出最佳的起床時間。它可以幫助您醒來時感覺神清氣爽、精力充沛。"
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} 如果此頁面能幫助您，請將其加入書籤。</p>


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
    <h3>起床時間計算器</h3>
    <p>選擇您計劃入睡的時間，我們將為您計算最佳的起床時間。計算包括平均15分鐘的入睡時間。</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">現在睡覺</button>
        <button id="calc-15-min" class="bedtime-option-btn">15分鐘後</button>
        <button id="calc-30-min" class="bedtime-option-btn">30分鐘後</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">或者選擇一個就寢時間：</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">計算</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">想根據起床時間計算就寢時間嗎？</p>
        <a href="/zh-tw/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">試試我們的就寢時間計算器</a>
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
            const ampm = hours >= 12 ? '下午' : '上午';
            hours = hours % 12;
            hours = hours ? hours : 12; // 小時 '0' 應該是 '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return ampm + ' ' + hours + ':' + minutes;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `如果您 ${startTimeString} 上床睡覺，請在以下時間起床：`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}小時`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}分鐘`;
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
                durationSpan.textContent = `(${wt.duration} 的睡眠)`;

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
            calculateAndShowWakeUpTimes(new Date(), '現在');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '15分鐘後');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '30分鐘後');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = '請先選擇一個時間。';
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
            
            calculateAndShowWakeUpTimes(startTime, `在 ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### 問：我明天應該幾點起床才能感覺精神好，不昏昏沉沉？

“有些早上我從床上一躍而起，感覺神清氣爽，但其他日子裡，起床真是一場鬥爭，我感覺好幾個小時都無精打采。持續精力充沛地醒來的秘訣是什麼？我明天應該幾點起床？”

### 答：訣竅是在一個睡眠週期結束時醒來。

那種昏昏沉沉的感覺？那是因為你的鬧鐘在深度睡眠時把你叫醒了。我們的身體使用90分鐘的睡眠週期。要想感覺神清氣爽，就在一個週期結束時，當睡眠最淺的時候醒來。

使用上面的計算器找到你最佳的起床時間。下面的圖表顯示了這是如何工作的。

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="一張圖表顯示，最佳起床時間是在90分鐘睡眠週期結束時，避免在深度睡眠階段醒來所帶來的昏昏欲睡的感覺。" style="max-width: 100%;"/>
</p>

### 按年齡推薦的睡眠

不同年齡組有不同的睡眠需求。以下是通常建議的睡眠小時數和睡眠週期數的快速指南：

| 年齡組 | 睡眠小時數 | 睡眠週期 |
| :--- | :--- | :--- |
| 新生兒 (0-3個月) | 14-17 小時 | 不適用 |
| 嬰兒 (4-11個月) | 12-15 小時 | 不適用 |
| 幼兒 (1-2歲) | 11-14 小時 | 7-9 週期 |
| 學齡前兒童 (3-5歲) | 10-13 小時 | 6-8 週期 |
| 學齡兒童 (6-13歲) | 9-11 小時 | 6-7 週期 |
| 青少年 (14-17歲) | 8-10 小時 | 5-6 週期 |
| 年輕人 (18-25歲) | 7-9 小時 | 5-6 週期 |
| 成人 (26-64歲) | 7-9 小時 | 5-6 週期 |
| 老年人 (65歲以上) | 7-8 小時 | 5-6 週期 |

*注意：睡眠需求因人而異。此表為一般性指導。*