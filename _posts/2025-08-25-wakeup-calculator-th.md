---
layout: page
title: "เครื่องคำนวณเวลาตื่นนอน: พรุ่งนี้ฉันควรตื่นกี่โมง?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: th
permalink: /th/tool/wakeup-calculator
description: "ค้นหาเวลาที่ดีที่สุดในการตื่นนอนโดยพิจารณาจากวงจรการนอนหลับ 90 นาที ซึ่งจะช่วยให้คุณตื่นขึ้นมาอย่างสดชื่นและกระปรี้กระเปร่า"
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} คั่นหน้าเพจนี้ไว้หากมีประโยชน์กับคุณ</p>


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
    <h3>เครื่องคำนวณเวลาตื่นนอน</h3>
    <p>เลือกเวลาที่คุณวางแผนจะนอน แล้วเราจะคำนวณเวลาตื่นนอนที่ดีที่สุดสำหรับคุณ การคำนวณรวมเวลาเฉลี่ย 15 นาทีในการหลับ</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">เข้านอนตอนนี้</button>
        <button id="calc-15-min" class="bedtime-option-btn">ใน 15 นาที</button>
        <button id="calc-30-min" class="bedtime-option-btn">ใน 30 นาที</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">หรือเลือกเวลานอน:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">คำนวณ</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">ต้องการคำนวณเวลานอนจากเวลาตื่นนอนของคุณหรือไม่?</p>
        <a href="/th/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">ลองใช้เครื่องคำนวณเวลานอนของเรา</a>
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
            hours = hours ? hours : 12; // ชั่วโมง '0' ควรเป็น '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `ถ้านอน ${startTimeString} ให้ตื่นนอนเวลา:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}ชม.`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}น.`;
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
                durationSpan.textContent = `(${wt.duration} นอน)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'ตอนนี้');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'ใน 15 นาที');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'ใน 30 นาที');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'กรุณาเลือกเวลาก่อน';
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
            
            calculateAndShowWakeUpTimes(startTime, `เวลา ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### ถาม: พรุ่งนี้ฉันควรตื่นกี่โมงถึงจะรู้สึกดีและไม่งัวเงีย?

"บางเช้าฉันกระโดดลงจากเตียงอย่างสดชื่น แต่บางวันมันช่างเป็นการต่อสู้ที่แท้จริงและฉันรู้สึกเฉื่อยชาเป็นเวลาหลายชั่วโมง อะไรคือเคล็ดลับในการตื่นนอนอย่างกระปรี้กระเปร่าอย่างสม่ำเสมอ? พรุ่งนี้ฉันควรตื่นกี่โมง?"

### ตอบ: เคล็ดลับคือการตื่นนอนเมื่อสิ้นสุดวงจรการนอนหลับ

ความรู้สึกงัวเงียนั้น? เกิดจากนาฬิกาปลุกของคุณปลุกคุณระหว่างการนอนหลับลึก ร่างกายของเราใช้วงจรการนอนหลับ 90 นาที เพื่อให้รู้สึกสดชื่น ให้ตื่นเมื่อสิ้นสุดวงจรเมื่อการนอนหลับเบาที่สุด

ใช้เครื่องคำนวณด้านบนเพื่อค้นหาเวลาตื่นนอนที่ดีที่สุดของคุณ แผนภาพด้านล่างแสดงวิธีการทำงาน

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="แผนภาพที่แสดงว่าเวลาที่ดีที่สุดในการตื่นคือเมื่อสิ้นสุดวงจรการนอนหลับ 90 นาที เพื่อหลีกเลี่ยงความง่วงซึมที่มาจากการตื่นระหว่างช่วงหลับลึก" style="max-width: 100%;"/>
</p>

### การนอนหลับที่แนะนำตามวัย

กลุ่มอายุที่แตกต่างกันมีความต้องการการนอนหลับที่แตกต่างกัน นี่คือคำแนะนำฉบับย่อเกี่ยวกับจำนวนชั่วโมงการนอนหลับและจำนวนรอบการนอนหลับที่แนะนำโดยทั่วไป:

| กลุ่มอายุ | ชั่วโมงการนอนหลับ | รอบการนอนหลับ |
| :--- | :--- | :--- |
| ทารกแรกเกิด (0-3 เดือน) | 14-17 ชั่วโมง | N/A |
| ทารก (4-11 เดือน) | 12-15 ชั่วโมง | N/A |
| เด็กวัยหัดเดิน (1-2 ปี) | 11-14 ชั่วโมง | 7-9 รอบ |
| เด็กก่อนวัยเรียน (3-5 ปี) | 10-13 ชั่วโมง | 6-8 รอบ |
| วัยเรียน (6-13 ปี) | 9-11 ชั่วโมง | 6-7 รอบ |
| วัยรุ่น (14-17 ปี) | 8-10 ชั่วโมง | 5-6 รอบ |
| ผู้ใหญ่วัยหนุ่มสาว (18-25 ปี) | 7-9 ชั่วโมง | 5-6 รอบ |
| ผู้ใหญ่ (26-64 ปี) | 7-9 ชั่วโมง | 5-6 รอบ |
| ผู้สูงอายุ (65+ ปี) | 7-8 ชั่วโมง | 5-6 รอบ |

*หมายเหตุ: ความต้องการในการนอนหลับอาจแตกต่างกันไปในแต่ละบุคคล ตารางนี้เป็นเพียงแนวทางทั่วไป*