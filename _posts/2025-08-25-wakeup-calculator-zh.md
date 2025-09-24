---
layout: page
title: "起床时间计算器：我明天应该几点起床？"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: zh-CN
permalink: /zh/tool/wakeup-calculator
description: "根据90分钟的睡眠周期找出最佳的起床时间。它可以帮助您醒来时感觉神清气爽、精力充沛。"
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} 如果此页面能帮助您，请将其加入书签。</p>


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
    <h3>起床时间计算器</h3>
    <p>选择您计划入睡的时间，我们将为您计算最佳的起床时间。计算包括平均15分钟的入睡时间。</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">现在睡觉</button>
        <button id="calc-15-min" class="bedtime-option-btn">15分钟后</button>
        <button id="calc-30-min" class="bedtime-option-btn">30分钟后</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">或者选择一个就寝时间：</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">计算</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">想根据起床时间计算就寝时间吗？</p>
        <a href="/zh/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">试试我们的就寝时间计算器</a>
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
            hours = hours ? hours : 12; // 小时 '0' 应该是 '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return ampm + ' ' + hours + ':' + minutes;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `如果您 ${startTimeString} 上床睡觉，请在以下时间起床：`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}小时`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}分钟`;
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
                durationSpan.textContent = `(${wt.duration} 睡眠)`;

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
            calculateAndShowWakeUpTimes(new Date(), '现在');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '15分钟后');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '30分钟后');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = '请先选择一个时间。';
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

### 问：我明天应该几点起床才能感觉精神好，不昏昏沉沉？

“有些早上我从床上一跃而起，感觉神清气爽，但其他日子里，起床真是一场斗争，我感觉好几个小时都无精打采。持续精力充沛地醒来的秘诀是什么？我明天应该几点起床？”

### 答：诀窍是在一个睡眠周期结束时醒来。

那种昏昏沉沉的感觉？那是因为你的闹钟在深度睡眠时把你叫醒了。我们的身体使用90分钟的睡眠周期。要想感觉神清气爽，就在一个周期结束时，当睡眠最浅的时候醒来。

使用上面的计算器找到你最佳的起床时间。下面的图表显示了这是如何工作的。

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="一张图表显示，最佳起床时间是在90分钟睡眠周期结束时，避免在深度睡眠阶段醒来所带来的昏昏欲睡的感觉。" style="max-width: 100%;"/>
</p>

### 按年龄推荐的睡眠

不同年龄组有不同的睡眠需求。以下是通常建议的睡眠小时数和睡眠周期数的快速指南：

| 年龄组 | 睡眠小时数 | 睡眠周期 |
| :--- | :--- | :--- |
| 新生儿 (0-3个月) | 14-17 小时 | 不适用 |
| 婴儿 (4-11个月) | 12-15 小时 | 不适用 |
| 幼儿 (1-2岁) | 11-14 小时 | 7-9 周期 |
| 学龄前儿童 (3-5岁) | 10-13 小时 | 6-8 周期 |
| 学龄儿童 (6-13岁) | 9-11 小时 | 6-7 周期 |
| 青少年 (14-17岁) | 8-10 小时 | 5-6 周期 |
| 年轻人 (18-25岁) | 7-9 小时 | 5-6 周期 |
| 成人 (26-64岁) | 7-9 小时 | 5-6 周期 |
| 老年人 (65岁以上) | 7-8 小时 | 5-6 周期 |

*注意：睡眠需求因人而异。此表为一般性指导。*