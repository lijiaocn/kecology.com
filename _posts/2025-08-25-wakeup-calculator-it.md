---
layout: page
title: "Calcolatore dell'ora di sveglia: A che ora dovrei svegliarmi domani?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: it
permalink: /it/tool/wakeup-calculator
description: "Scopri gli orari migliori per svegliarti basandoti su cicli di sonno di 90 minuti. Può aiutarti a svegliarti sentendoti riposato ed energico."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Aggiungi questa pagina ai preferiti se ti è d'aiuto.</p>


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
    <h3>Calcolatore dell'ora di sveglia</h3>
    <p>Seleziona quando prevedi di andare a dormire e calcoleremo gli orari migliori per svegliarti. Il calcolo include una media di 15 minuti per addormentarsi.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Andare a letto ora</button>
        <button id="calc-15-min" class="bedtime-option-btn">Tra 15 minuti</button>
        <button id="calc-30-min" class="bedtime-option-btn">Tra 30 minuti</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Oppure scegli un'ora per andare a letto:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Calcola</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Vuoi calcolare l'ora di andare a letto partendo dall'ora di sveglia?</p>
        <a href="/it/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Prova il nostro Calcolatore dell'ora di andare a letto</a>
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
            hours = hours ? hours : 12; // l'ora '0' dovrebbe essere '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Se vai a letto ${startTimeString}, svegliati alle:`

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
                durationSpan.textContent = `(${wt.duration} di sonno)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'ora');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'tra 15 minuti');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'tra 30 minuti');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Seleziona prima un orario.';
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
            
            calculateAndShowWakeUpTimes(startTime, `alle ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### D: A che ora dovrei svegliarmi domani per sentirmi bene e non intontito?

"Alcune mattine salto giù dal letto sentendomi riposato, ma altri giorni è una vera lotta e mi sento fiacco per ore. Qual è il segreto per svegliarsi costantemente sentendosi pieni di energia? A che ora dovrei svegliarmi domani?"

### R: Il trucco è svegliarsi alla fine di un ciclo di sonno.

Quella sensazione di intontimento? È dovuta alla sveglia che ti desta durante il sonno profondo. Il nostro corpo utilizza cicli di sonno di 90 minuti. Per sentirti riposato, svegliati alla fine di un ciclo, quando il sonno è più leggero.

Usa il calcolatore qui sopra per trovare i tuoi orari di sveglia migliori. Il diagramma sottostante mostra come funziona.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Un diagramma che mostra che il momento migliore per svegliarsi è alla fine di un ciclo di sonno di 90 minuti, evitando l'intontimento che deriva dal risveglio durante una fase di sonno profondo." style="max-width: 100%;"/>
</p>

### Sonno consigliato per età

Fasce d'età diverse hanno esigenze di sonno diverse. Ecco una guida rapida su quante ore di sonno e quanti cicli di sonno sono generalmente raccomandati:

| Fascia d'età | Ore di sonno | Cicli di sonno |
| :--- | :--- | :--- |
| Neonato (0-3 mesi) | 14-17 ore | N/A |
| Lattante (4-11 mesi) | 12-15 ore | N/A |
| Bambino (1-2 anni) | 11-14 ore | 7-9 cicli |
| Età prescolare (3-5 anni) | 10-13 ore | 6-8 cicli |
| Età scolare (6-13 anni) | 9-11 ore | 6-7 cicli |
| Adolescente (14-17 anni) | 8-10 ore | 5-6 cicli |
| Giovane adulto (18-25 anni) | 7-9 ore | 5-6 cicli |
| Adulto (26-64 anni) | 7-9 ore | 5-6 cicli |
| Anziano (65+ anni) | 7-8 ore | 5-6 cicli |

*Nota: le esigenze di sonno possono variare da persona a persona. Questa tabella è una linea guida generale.*