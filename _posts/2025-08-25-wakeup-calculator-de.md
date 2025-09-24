---
layout: page
title: "Aufwachzeit-Rechner: Wann sollte ich morgen aufwachen?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: de
permalink: /de/tool/wakeup-calculator
description: "Finden Sie die besten Aufwachzeiten basierend auf 90-minütigen Schlafzyklen. Es kann Ihnen helfen, erfrischt und energiegeladen aufzuwachen."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Setzen Sie ein Lesezeichen für diese Seite, wenn sie Ihnen hilft.</p>


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
    <h3>Aufwachzeit-Rechner</h3>
    <p>Wählen Sie, wann Sie schlafen gehen möchten, und wir berechnen die besten Aufwachzeiten für Sie. Die Berechnung beinhaltet durchschnittlich 15 Minuten zum Einschlafen.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Jetzt ins Bett gehen</button>
        <button id="calc-15-min" class="bedtime-option-btn">In 15 Minuten</button>
        <button id="calc-30-min" class="bedtime-option-btn">In 30 Minuten</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Oder wählen Sie eine Schlafenszeit:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Berechnen</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Möchten Sie Ihre Schlafenszeit anhand Ihrer Aufwachzeit berechnen?</p>
        <a href="/de/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Probieren Sie unseren Schlafenszeit-Rechner</a>
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
            hours = hours ? hours : 12; // die Stunde '0' sollte '12' sein
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Wenn Sie ${startTimeString} ins Bett gehen, wachen Sie auf um:`

            // Add 15 minutes to account for the time it takes to fall asleep.
            const sleepTime = new Date(startTime.getTime() + 15 * 60 * 1000);

            const wakeUpTimes = [];
            const sleepCycleMinutes = 90;
            const numberOfCycles = 6;

            for (let i = 1; i <= numberOfCycles; i++) {
                let wakeUpTime = new Date(sleepTime.getTime() + i * sleepCycleMinutes * 60 * 1000);
                
                const durationHours = Math.floor((i * sleepCycleMinutes) / 60);
                const durationMinutes = (i * sleepCycleMinutes) % 60;
                let durationText = `${durationHours}h`;
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
                durationSpan.textContent = `(${wt.duration} Schlaf)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'jetzt');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'in 15 Minuten');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'in 30 Minuten');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Bitte wählen Sie zuerst eine Zeit aus.';
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
            
            calculateAndShowWakeUpTimes(startTime, `um ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### F: Wann sollte ich morgen aufwachen, um mich gut und nicht benommen zu fühlen?

"An manchen Morgen springe ich erfrischt aus dem Bett, aber an anderen Tagen ist es ein echter Kampf und ich fühle mich stundenlang träge. Was ist das Geheimnis, um konstant energiegeladen aufzuwachen? Wann sollte ich morgen aufwachen?"

### A: Der Trick ist, am Ende eines Schlafzyklus aufzuwachen.

Dieses benommene Gefühl? Das kommt davon, dass Ihr Wecker Sie im Tiefschlaf weckt. Unser Körper nutzt 90-minütige Schlafzyklen. Um sich erfrischt zu fühlen, wachen Sie am Ende eines Zyklus auf, wenn der Schlaf am leichtesten ist.

Verwenden Sie den obigen Rechner, um Ihre besten Aufwachzeiten zu finden. Das folgende Diagramm zeigt, wie das funktioniert.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Ein Diagramm, das zeigt, dass die beste Zeit zum Aufwachen am Ende eines 90-minütigen Schlafzyklus liegt, um die Benommenheit zu vermeiden, die durch das Aufwachen während einer Tiefschlafphase entsteht." style="max-width: 100%;"/>
</p>

### Empfohlener Schlaf nach Alter

Unterschiedliche Altersgruppen haben unterschiedliche Schlafbedürfnisse. Hier ist eine Kurzanleitung, wie viele Stunden Schlaf und wie viele Schlafzyklen im Allgemeinen empfohlen werden:

| Altersgruppe | Stunden Schlaf | Schlafzyklen |
| :--- | :--- | :--- |
| Neugeborenes (0-3 Monate) | 14-17 Stunden | N/A |
| Säugling (4-11 Monate) | 12-15 Stunden | N/A |
| Kleinkind (1-2 Jahre) | 11-14 Stunden | 7-9 Zyklen |
| Vorschulkind (3-5 Jahre) | 10-13 Stunden | 6-8 Zyklen |
| Schulkind (6-13 Jahre) | 9-11 Stunden | 6-7 Zyklen |
| Teenager (14-17 Jahre) | 8-10 Stunden | 5-6 Zyklen |
| Junger Erwachsener (18-25 Jahre) | 7-9 Stunden | 5-6 Zyklen |
| Erwachsener (26-64 Jahre) | 7-9 Stunden | 5-6 Zyklen |
| Älterer Erwachsener (65+ Jahre) | 7-8 Stunden | 5-6 Zyklen |

*Hinweis: Der Schlafbedarf kann von Person zu Person variieren. Diese Tabelle ist eine allgemeine Richtlinie.*