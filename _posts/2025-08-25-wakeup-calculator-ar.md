---
layout: page
title: "حاسبة وقت الاستيقاظ: متى يجب أن أستيقظ غدًا؟"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: ar
permalink: /ar/tool/wakeup-calculator
description: "اكتشف أفضل الأوقات للاستيقاظ بناءً على دورات نوم مدتها 90 دقيقة. يمكن أن يساعدك ذلك على الاستيقاظ وأنت تشعر بالانتعاش والنشاط."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} ضع إشارة مرجعية على هذه الصفحة إذا كانت تساعدك.</p>


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

<div id="sleep-calculator-container" dir="rtl">
    <h3>حاسبة وقت الاستيقاظ</h3>
    <p>اختر الوقت الذي تخطط فيه للنوم، وسنحسب لك أفضل أوقات الاستيقاظ. يشمل الحساب متوسط 15 دقيقة لتغفو.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">الذهاب إلى الفراش الآن</button>
        <button id="calc-15-min" class="bedtime-option-btn">في 15 دقيقة</button>
        <button id="calc-30-min" class="bedtime-option-btn">في 30 دقيقة</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">أو اختر وقت النوم:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">حساب</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">هل تريد حساب وقت نومك من وقت استيقاظك؟</p>
        <a href="/ar/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">جرب حاسبة وقت النوم الخاصة بنا</a>
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
            const ampm = hours >= 12 ? 'م' : 'ص';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `إذا ذهبت إلى الفراش ${startTimeString}، فاستيقظ في:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}س`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}د`;
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
                durationSpan.textContent = `(${wt.duration} نوم)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'الآن');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'في 15 دقيقة');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'في 30 دقيقة');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'الرجاء تحديد وقت أولاً.';
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
            
            calculateAndShowWakeUpTimes(startTime, `في ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

<div dir="rtl">
### س: في أي وقت يجب أن أستيقظ غدًا لأشعر بالراحة وعدم النعاس؟

"في بعض الصباحات أقفز من السرير وأنا أشعر بالانتعاش، لكن في أيام أخرى يكون الأمر صراعًا حقيقيًا وأشعر بالخمول لساعات. ما هو سر الاستيقاظ باستمرار وأنت تشعر بالنشاط؟ في أي وقت يجب أن أستيقظ غدًا؟"

### ج: الحيلة هي الاستيقاظ في نهاية دورة النوم.

هذا الشعور بالنعاس؟ إنه بسبب إيقاظ المنبه لك أثناء النوم العميق. تستخدم أجسامنا دورات نوم مدتها 90 دقيقة. للشعور بالانتعاش، استيقظ في نهاية الدورة عندما يكون النوم أخف.

استخدم الآلة الحاسبة أعلاه للعثور على أفضل أوقات الاستيقاظ. يوضح الرسم البياني أدناه كيفية عمل ذلك.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="رسم بياني يوضح أن أفضل وقت للاستيقاظ هو في نهاية دورة نوم مدتها 90 دقيقة، مع تجنب الشعور بالنعاس الذي يأتي من الاستيقاظ أثناء مرحلة النوم العميق." style="max-width: 100%;"/>
</p>

### النوم الموصى به حسب العمر

لدى الفئات العمرية المختلفة احتياجات نوم مختلفة. إليك دليل سريع لعدد ساعات النوم وعدد دورات النوم الموصى بها بشكل عام:

| الفئة العمرية | ساعات النوم | دورات النوم |
| :--- | :--- | :--- |
| حديثي الولادة (0-3 أشهر) | 14-17 ساعة | غير متاح |
| الرضع (4-11 شهرًا) | 12-15 ساعة | غير متاح |
| الأطفال الصغار (1-2 سنوات) | 11-14 ساعة | 7-9 دورات |
| مرحلة ما قبل المدرسة (3-5 سنوات) | 10-13 ساعة | 6-8 دورات |
| سن المدرسة (6-13 سنة) | 9-11 ساعة | 6-7 دورات |
| المراهقون (14-17 سنة) | 8-10 ساعات | 5-6 دورات |
| الشباب (18-25 سنة) | 7-9 ساعات | 5-6 دورات |
| البالغون (26-64 سنة) | 7-9 ساعات | 5-6 دورات |
| كبار السن (65+ سنة) | 7-8 ساعات | 5-6 دورات |

*ملاحظة: يمكن أن تختلف احتياجات النوم من شخص لآخر. هذا الجدول هو دليل عام.*
</div>