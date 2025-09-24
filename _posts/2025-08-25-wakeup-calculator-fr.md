---
layout: page
title: "Calculateur d'heure de réveil : À quelle heure devrais-je me réveiller demain ?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: fr
permalink: /fr/tool/wakeup-calculator
description: "Découvrez les meilleurs moments pour vous réveiller en fonction de cycles de sommeil de 90 minutes. Cela peut vous aider à vous réveiller en vous sentant frais et dispos."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Mettez cette page en favori si elle vous aide.</p>


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
    <h3>Calculateur d\'heure de réveil</h3>
    <p>Sélectionnez l\'heure à laquelle vous prévoyez de vous coucher, et nous calculerons les meilleures heures de réveil pour vous. Le calcul inclut une moyenne de 15 minutes pour s\'endormir.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Se coucher maintenant</button>
        <button id="calc-15-min" class="bedtime-option-btn">Dans 15 minutes</button>
        <button id="calc-30-min" class="bedtime-option-btn">Dans 30 minutes</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Ou choisissez une heure de coucher :</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Calculer</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Vous voulez calculer votre heure de coucher à partir de votre heure de réveil ?</p>
        <a href="/fr/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Essayez notre Calculateur d\'heure de coucher</a>
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
            hours = hours ? hours : 12; // l\'heure '0' doit être '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Si vous vous couchez ${startTimeString}, réveillez-vous à :`;

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
                durationSpan.textContent = `(${wt.duration} de sommeil)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'maintenant');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'dans 15 minutes');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'dans 30 minutes');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Veuillez d\'abord sélectionner une heure.';
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
            
            calculateAndShowWakeUpTimes(startTime, `à ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### Q : À quelle heure devrais-je me réveiller demain pour me sentir bien et non groggy ?

"Certains matins, je saute du lit en me sentant frais et dispos, mais d'autres jours, c'est un vrai combat et je me sens léthargique pendant des heures. Quel est le secret pour se réveiller constamment en pleine forme ? À quelle heure devrais-je me réveiller demain ?"

### R : L\'astuce est de se réveiller à la fin d'un cycle de sommeil.

Cette sensation de grogne ? C'est parce que votre alarme vous réveille pendant votre sommeil profond. Notre corps utilise des cycles de sommeil de 90 minutes. Pour vous sentir frais et dispos, réveillez-vous à la fin d'un cycle, lorsque le sommeil est le plus léger.

Utilisez le calculateur ci-dessus pour trouver vos meilleures heures de réveil. Le schéma ci-dessous montre comment cela fonctionne.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Un diagramme montrant que le meilleur moment pour se réveiller est à la fin d'un cycle de sommeil de 90 minutes, évitant ainsi la somnolence qui survient lors d'un réveil pendant une phase de sommeil profond." style="max-width: 100%;"/>
</p>

### Sommeil recommandé par âge

Les différents groupes d'âge ont des besoins de sommeil différents. Voici un guide rapide sur le nombre d'heures de sommeil et le nombre de cycles de sommeil généralement recommandés :

| Groupe d'âge | Heures de sommeil | Cycles de sommeil |
| :--- | :--- | :--- |
| Nouveau-né (0-3 mois) | 14-17 heures | N/A |
| Nourrisson (4-11 mois) | 12-15 heures | N/A |
| Tout-petit (1-2 ans) | 11-14 heures | 7-9 cycles |
| Préscolaire (3-5 ans) | 10-13 heures | 6-8 cycles |
| Âge scolaire (6-13 ans) | 9-11 heures | 6-7 cycles |
| Adolescent (14-17 ans) | 8-10 heures | 5-6 cycles |
| Jeune adulte (18-25 ans) | 7-9 heures | 5-6 cycles |
| Adulte (26-64 ans) | 7-9 heures | 5-6 cycles |
| Personne âgée (65+ ans) | 7-8 heures | 5-6 cycles |

*Remarque : Les besoins en sommeil peuvent varier d\'une personne à l\'autre. Ce tableau est une ligne directrice générale.*