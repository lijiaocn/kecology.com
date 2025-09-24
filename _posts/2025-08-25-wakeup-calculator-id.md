---
layout: page
title: "Kalkulator Waktu Bangun: Jam Berapa Saya Harus Bangun Besok?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: id
permalink: /id/tool/wakeup-calculator
description: "Cari tahu waktu terbaik untuk bangun berdasarkan siklus tidur 90 menit. Ini dapat membantu Anda bangun dengan perasaan segar dan berenergi."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Tandai halaman ini jika membantu Anda.</p>


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
    <h3>Kalkulator Waktu Bangun</h3>
    <p>Pilih kapan Anda berencana untuk tidur, dan kami akan menghitung waktu bangun terbaik untuk Anda. Perhitungan ini mencakup rata-rata 15 menit untuk tertidur.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Tidur sekarang</button>
        <button id="calc-15-min" class="bedtime-option-btn">Dalam 15 menit</button>
        <button id="calc-30-min" class="bedtime-option-btn">Dalam 30 menit</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Atau pilih waktu tidur:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Hitung</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Ingin menghitung waktu tidur dari waktu bangun Anda?</p>
        <a href="/id/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Coba Kalkulator Waktu Tidur kami</a>
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
            hours = hours ? hours : 12; // jam '0' harus menjadi '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Jika Anda tidur ${startTimeString}, bangunlah pada:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}j`;
                if (durationMinutes > 0) {
                    durationText += ` ${durationMinutes}m`;
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
                durationSpan.textContent = `(${wt.duration} tidur)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'sekarang');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'dalam 15 menit');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'dalam 30 menit');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Silakan pilih waktu terlebih dahulu.';
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
            
            calculateAndShowWakeUpTimes(startTime, `pukul ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### T: Jam berapa saya harus bangun besok agar merasa segar dan tidak mengantuk?

"Beberapa pagi saya melompat dari tempat tidur dengan perasaan segar, tetapi di hari lain itu adalah perjuangan nyata dan saya merasa lesu selama berjam-jam. Apa rahasia untuk bangun secara konsisten dengan perasaan berenergi? Jam berapa saya harus bangun besok?"

### J: Triknya adalah bangun di akhir siklus tidur.

Perasaan mengantuk itu? Itu karena alarm membangunkan Anda saat tidur nyenyak. Tubuh kita menggunakan siklus tidur 90 menit. Agar merasa segar, bangunlah di akhir siklus saat tidur paling ringan.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Diagram yang menunjukkan bahwa waktu terbaik untuk bangun adalah di akhir siklus tidur 90 menit, menghindari rasa kantuk yang timbul karena bangun selama fase tidur nyenyak." style="max-width: 100%;"/>
</p>

### Rekomendasi Tidur Berdasarkan Usia

Kelompok usia yang berbeda memiliki kebutuhan tidur yang berbeda. Berikut adalah panduan singkat tentang berapa jam tidur dan berapa banyak siklus tidur yang umumnya direkomendasikan:

| Kelompok Usia | Jam Tidur | Siklus Tidur |
| :--- | :--- | :--- |
| Baru Lahir (0-3 bulan) | 14-17 jam | T/A |
| Bayi (4-11 bulan) | 12-15 jam | T/A |
| Balita (1-2 tahun) | 11-14 jam | 7-9 siklus |
| Prasekolah (3-5 tahun) | 10-13 jam | 6-8 siklus |
| Usia Sekolah (6-13 tahun) | 9-11 jam | 6-7 siklus |
| Remaja (14-17 tahun) | 8-10 jam | 5-6 siklus |
| Dewasa Muda (18-25 tahun) | 7-9 jam | 5-6 siklus |
| Dewasa (26-64 tahun) | 7-9 jam | 5-6 siklus |
| Lansia (65+ tahun) | 7-8 jam | 5-6 siklus |

*Catatan: Kebutuhan tidur dapat bervariasi dari orang ke orang. Tabel ini adalah pedoman umum.*