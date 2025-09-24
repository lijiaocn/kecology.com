---
layout: page
title: "Calculadora de hora de despertar: ¿A qué hora debo despertarme mañana?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: es
permalink: /es/tool/wakeup-calculator
description: "Descubre las mejores horas para despertarte basándose en ciclos de sueño de 90 minutos. Puede ayudarte a despertar sintiéndote renovado y con energía."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Marca esta página si te ayuda.</p>


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
    <h3>Calculadora de hora de despertar</h3>
    <p>Seleccione cuándo planea irse a dormir y calcularemos las mejores horas para que se despierte. El cálculo incluye un promedio de 15 minutos para conciliar el sueño.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Acostarse ahora</button>
        <button id="calc-15-min" class="bedtime-option-btn">En 15 minutos</button>
        <button id="calc-30-min" class="bedtime-option-btn">En 30 minutos</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">O elija una hora para acostarse:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Calcular</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">¿Quiere calcular su hora de acostarse a partir de su hora de despertar?</p>
        <a href="/es/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Pruebe nuestra Calculadora de hora de dormir</a>
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
            hours = hours ? hours : 12; // la hora '0' debe ser '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Si te acuestas ${startTimeString}, despiértate a las:`

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
                durationSpan.textContent = `(${wt.duration} de sueño)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'ahora');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'en 15 minutos');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'en 30 minutos');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Por favor, seleccione primero una hora.';
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
            
            calculateAndShowWakeUpTimes(startTime, `a las ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### P: ¿A qué hora debo despertarme mañana para sentirme genial y no aturdido?

"Algunas mañanas salto de la cama sintiéndome renovado, pero otros días es una verdadera lucha y me siento perezoso durante horas. ¿Cuál es el secreto para despertarse constantemente sintiéndose con energía? ¿A qué hora debo despertarme mañana?"

### R: El truco es despertarse al final de un ciclo de sueño.

¿Esa sensación de aturdimiento? Es porque tu alarma te despierta durante el sueño profundo. Nuestros cuerpos usan ciclos de sueño de 90 minutos. Para sentirte renovado, despiértate al final de un ciclo cuando el sueño es más ligero.

Usa la calculadora de arriba para encontrar tus mejores horas para despertar. El siguiente diagrama muestra cómo funciona esto.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Un diagrama que muestra que la mejor hora para despertarse es al final de un ciclo de sueño de 90 minutos, evitando el aturdimiento que se produce al despertar durante una fase de sueño profundo." style="max-width: 100%;"/>
</p>

### Sueño recomendado por edad

Los diferentes grupos de edad tienen diferentes necesidades de sueño. Aquí hay una guía rápida de cuántas horas de sueño y cuántos ciclos de sueño se recomiendan generalmente:

| Grupo de edad | Horas de sueño | Ciclos de sueño |
| :--- | :--- | :--- |
| Recién nacido (0-3 meses) | 14-17 horas | N/A |
| Infante (4-11 meses) | 12-15 horas | N/A |
| Niño pequeño (1-2 años) | 11-14 horas | 7-9 ciclos |
| Preescolar (3-5 años) | 10-13 horas | 6-8 ciclos |
| Edad escolar (6-13 años) | 9-11 horas | 6-7 ciclos |
| Adolescente (14-17 años) | 8-10 horas | 5-6 ciclos |
| Adulto joven (18-25 años) | 7-9 horas | 5-6 ciclos |
| Adulto (26-64 años) | 7-9 horas | 5-6 ciclos |
| Adulto mayor (65+ años) | 7-8 horas | 5-6 ciclos |

*Nota: Las necesidades de sueño pueden variar de persona a persona. Esta tabla es una guía general.*