---
layout: page
title: "Калькулятор времени пробуждения: Во сколько мне завтра вставать?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: ru
permalink: /ru/tool/wakeup-calculator
description: "Узнайте лучшее время для пробуждения на основе 90-минутных циклов сна. Это поможет вам просыпаться, чувствуя себя отдохнувшим и энергичным."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Добавьте эту страницу в закладки, если она вам поможет.</p>


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
    <h3>Калькулятор времени пробуждения</h3>
    <p>Выберите, когда вы планируете лечь спать, и мы рассчитаем лучшее время для пробуждения. Расчет включает в себя в среднем 15 минут на засыпание.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Лечь спать сейчас</button>
        <button id="calc-15-min" class="bedtime-option-btn">Через 15 минут</button>
        <button id="calc-30-min" class="bedtime-option-btn">Через 30 минут</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Или выберите время отхода ко сну:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Рассчитать</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Хотите рассчитать время отхода ко сну по времени пробуждения?</p>
        <a href="/ru/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Попробуйте наш калькулятор времени сна</a>
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
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // час '0' должен быть '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Если вы ляжете спать ${startTimeString}, просыпайтесь в:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}ч`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}м`;
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
                durationSpan.textContent = `(${wt.duration} сна)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'сейчас');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'через 15 минут');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'через 30 минут');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Пожалуйста, сначала выберите время.';
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
            
            calculateAndShowWakeUpTimes(startTime, `в ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### В: Во сколько мне завтра вставать, чтобы чувствовать себя отлично, а не разбитым?

"Иногда я вскакиваю с кровати отдохнувшим, но в другие дни это настоящая борьба, и я часами чувствую себя вялым. В чем секрет постоянного пробуждения с чувством бодрости? Во сколько мне завтра вставать?"

### О: Хитрость в том, чтобы просыпаться в конце цикла сна.

Это чувство разбитости? Это от того, что будильник будит вас во время глубокого сна. Наш организм использует 90-минутные циклы сна. Чтобы чувствовать себя отдохнувшим, просыпайтесь в конце цикла, когда сон самый легкий.

Используйте калькулятор выше, чтобы найти лучшее время для пробуждения. На диаграмме ниже показано, как это работает.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Диаграмма, показывающая, что лучшее время для пробуждения - это конец 90-минутного цикла сна, что позволяет избежать сонливости, возникающей при пробуждении во время фазы глубокого сна." style="max-width: 100%;"/>
</p>

### Рекомендуемый сон по возрасту

Разным возрастным группам требуется разное количество сна. Вот краткое руководство о том, сколько часов сна и сколько циклов сна обычно рекомендуется:

| Возрастная группа | Часы сна | Циклы сна |
| :--- | :--- | :--- |
| Новорожденный (0-3 месяца) | 14-17 часов | Н/Д |
| Младенец (4-11 месяцев) | 12-15 часов | Н/Д |
| Малыш (1-2 года) | 11-14 часов | 7-9 циклов |
| Дошкольник (3-5 лет) | 10-13 часов | 6-8 циклов |
| Школьный возраст (6-13 лет) | 9-11 часов | 6-7 циклов |
| Подросток (14-17 лет) | 8-10 часов | 5-6 циклов |
| Молодой взрослый (18-25 лет) | 7-9 часов | 5-6 циклов |
| Взрослый (26-64 года) | 7-9 часов | 5-6 циклов |
| Пожилой взрослый (65+ лет) | 7-8 часов | 5-6 циклов |

*Примечание: Потребности во сне могут отличаться у разных людей. Эта таблица является общим руководством.*