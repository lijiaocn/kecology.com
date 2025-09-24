---
layout: page
title: "起床時間計算機：明日は何時に起きるべき？"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: ja
permalink: /ja/tool/wakeup-calculator
description: "90分の睡眠サイクルに基づいて、最適な起床時間を見つけます。すっきりとエネルギッシュに目覚めるのに役立ちます。"
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} このページが役立つならブックマークしてください。</p>


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
    <h3>起床時間計算機</h3>
    <p>寝る予定の時間を選択すると、最適な起床時間を計算します。計算には、眠りにつくまでの平均15分が含まれています。</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">今すぐ寝る</button>
        <button id="calc-15-min" class="bedtime-option-btn">15分後</button>
        <button id="calc-30-min" class="bedtime-option-btn">30分後</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">または就寝時間を選択：</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">計算</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">起床時間から就寝時間を計算しますか？</p>
        <a href="/ja/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">就寝時間計算機をお試しください</a>
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
            const ampm = hours >= 12 ? '午後' : '午前';
            hours = hours % 12;
            hours = hours ? hours : 12; // '0'時は'12'時
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return ampm + ' ' + hours + ':' + minutes;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `${startTimeString}に寝る場合、起床時間は次のとおりです：`;

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}時間`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}分`;
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
                durationSpan.textContent = `(${wt.duration}の睡眠)`;

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
            calculateAndShowWakeUpTimes(new Date(), '今すぐ');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '15分後');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, '30分後');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'まず時間を選択してください。';
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
            
            calculateAndShowWakeUpTimes(startTime, `${formatTime(startTime)}に`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### Q：明日、すっきりしてだるさを感じずに起きるには何時に起きるべきですか？

「ある朝はすっきりとベッドから起き上がれますが、他の日は本当に大変で、何時間もだるさを感じます。常に元気いっぱいに起きる秘訣は何ですか？明日は何時に起きるべきですか？」

### A：秘訣は、睡眠サイクルの終わりに起きることです。

そのだるい感じ？それは、深い眠りの間にアラームがあなたを起こすからです。私たちの体は90分の睡眠サイクルを利用しています。すっきり目覚めるには、眠りが最も浅いサイクルの終わりに起きてください。

上の計算機を使って、最適な起床時間を見つけてください。下の図は、その仕組みを示しています。

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="深い睡眠段階で目覚めることによって生じる気だるさを避け、90分の睡眠サイクルの終わりに目覚めるのが最適な時間であることを示す図。" style="max-width: 100%;"/>
</p>

### 年齢別の推奨睡眠時間

年齢層によって必要な睡眠時間は異なります。一般的に推奨される睡眠時間と睡眠サイクルの簡単なガイドは次のとおりです。

| 年齢層 | 睡眠時間 | 睡眠サイクル |
| :--- | :--- | :--- |
| 新生児（0〜3か月） | 14〜17時間 | 該当なし |
| 乳児（4〜11か月） | 12〜15時間 | 該当なし |
| 幼児（1〜2歳） | 11〜14時間 | 7〜9サイクル |
| 未就学児（3〜5歳） | 10〜13時間 | 6〜8サイクル |
| 学齢期（6〜13歳） | 9〜11時間 | 6〜7サイクル |
| ティーンエイジャー（14〜17歳） | 8〜10時間 | 5〜6サイクル |
| 若年成人（18〜25歳） | 7〜9時間 | 5〜6サイクル |
| 成人（26〜64歳） | 7〜9時間 | 5〜6サイクル |
| 高齢者（65歳以上） | 7〜8時間 | 5〜6サイクル |

*注：必要な睡眠時間は個人によって異なります。この表は一般的なガイドラインです。*