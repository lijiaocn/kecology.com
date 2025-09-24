---
layout: page
title: "Calculadora da Hora de Acordar: A que horas devo acordar amanhã?"
date:   2025-08-25 10:00:00 +0800
last_modified_at: 2025-09-10 09:46:00 +0800
categories: tool
lang: pt
permalink: /pt/tool/wakeup-calculator
description: "Descubra as melhores horas para acordar com base em ciclos de sono de 90 minutos. Pode ajudá-lo a acordar sentindo-se revigorado e enérgico."
mysetting:
  nowrapper: false
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Marque esta página como favorita se ela o ajudar.</p>


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
    <h3>Calculadora da Hora de Acordar</h3>
    <p>Selecione quando planeia ir dormir e nós calcularemos as melhores horas para acordar. O cálculo inclui uma média de 15 minutos para adormecer.</p>
    
    <div id="bedtime-options-container">
        <button id="calc-now" class="bedtime-option-btn">Ir para a cama agora</button>
        <button id="calc-15-min" class="bedtime-option-btn">Em 15 minutos</button>
        <button id="calc-30-min" class="bedtime-option-btn">Em 30 minutos</button>
    </div>

    <div id="results-wrapper" style="display: none;">
        <div id="wakeup-title" style="margin-top: 30px; color: #00c7b4; font-weight: 600; font-size: 18px;"></div>
        <div id="wakeup-options"></div>
    </div>

    <div id="custom-time-container">
        <label for="custom-time-input">Ou escolha uma hora para dormir:</label>
        <input type="time" id="custom-time-input">
        <button id="calc-custom-btn" class="bedtime-option-btn">Calcular</button>
    </div>

    <hr style="border: none; height: 1px; background-color: #1c2b3a; margin: 30px 0;">

    <div style="margin-top: 20px;">
        <p style="margin-bottom: 15px;">Quer calcular a sua hora de dormir a partir da sua hora de acordar?</p>
        <a href="/pt/tool/best-bedtime-calculator" class="bedtime-option-btn" style="text-decoration: none;">Experimente a nossa Calculadora da Hora de Dormir</a>
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
            hours = hours ? hours : 12; // a hora '0' deve ser '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function calculateAndShowWakeUpTimes(startTime, startTimeString) {
            if (!wakeupOptionsContainer || !wakeupTitle || !resultsWrapper) return;

            resultsWrapper.style.display = 'block';
            wakeupTitle.textContent = `Se for para a cama ${startTimeString}, acorde às:`

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
                durationSpan.textContent = `(${wt.duration} de sono)`;

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
            calculateAndShowWakeUpTimes(new Date(), 'agora');
        });

        calc15MinBtn.addEventListener('click', () => {
            setActiveButton(calc15MinBtn);
            const startTime = new Date(new Date().getTime() + 15 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'em 15 minutos');
        });

        calc30MinBtn.addEventListener('click', () => {
            setActiveButton(calc30MinBtn);
            const startTime = new Date(new Date().getTime() + 30 * 60 * 1000);
            calculateAndShowWakeUpTimes(startTime, 'em 30 minutos');
        });

        calcCustomBtn.addEventListener('click', () => {
            setActiveButton(null); // No preset button is active
            const timeValue = customTimeInput.value;
            if (!timeValue) {
                // Maybe provide feedback to the user
                if (resultsWrapper) resultsWrapper.style.display = 'none';
                wakeupTitle.textContent = 'Por favor, selecione uma hora primeiro.';
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
            
            calculateAndShowWakeUpTimes(startTime, `às ${formatTime(startTime)}`);
        });
        
        // Set default time for the custom input
        setDefaultTime();
    });
</script>

### P: A que horas devo acordar amanhã para me sentir ótimo e sem sonolência?

"Nalgumas manhãs, salto da cama a sentir-me revigorado, mas noutros dias é uma verdadeira luta e sinto-me lento durante horas. Qual é o segredo para acordar consistentemente a sentir-se com energia? A que horas devo acordar amanhã?"

### R: O truque é acordar no final de um ciclo de sono.

Essa sensação de sonolência? É do seu alarme a acordá-lo durante o sono profundo. Os nossos corpos usam ciclos de sono de 90 minutos. Para se sentir revigorado, acorde no final de um ciclo, quando o sono é mais leve.

Use a calculadora acima para encontrar as suas melhores horas para acordar. O diagrama abaixo mostra como isto funciona.

<p style="text-align:center;">
  <img src="/assets/img/sleep_cycle_explanation.svg" alt="Um diagrama que mostra que a melhor hora para acordar é no final de um ciclo de sono de 90 minutos, evitando a sonolência que advém de acordar durante uma fase de sono profundo." style="max-width: 100%;"/>
</p>

### Sono Recomendado por Idade

Diferentes faixas etárias têm diferentes necessidades de sono. Aqui está um guia rápido de quantas horas de sono e quantos ciclos de sono são geralmente recomendados:

| Faixa Etária | Horas de Sono | Ciclos de Sono |
| :--- | :--- | :--- |
| Recém-nascido (0-3 meses) | 14-17 horas | N/A |
| Bebé (4-11 meses) | 12-15 horas | N/A |
| Criança (1-2 anos) | 11-14 horas | 7-9 ciclos |
| Pré-escolar (3-5 anos) | 10-13 horas | 6-8 ciclos |
| Idade escolar (6-13 anos) | 9-11 horas | 6-7 ciclos |
| Adolescente (14-17 anos) | 8-10 horas | 5-6 ciclos |
| Jovem Adulto (18-25 anos) | 7-9 horas | 5-6 ciclos |
| Adulto (26-64 anos) | 7-9 horas | 5-6 ciclos |
| Idoso (65+ anos) | 7-8 horas | 5-6 ciclos |

*Nota: As necessidades de sono podem variar de pessoa para pessoa. Esta tabela é uma orientação geral.*