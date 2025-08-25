---
layout: page
title:  "Wake Up Calculator - Find the Best Time to Wake Up"
date:   2025-08-25 10:00:00 +0800
categories: tool
permalink: /tool/wakeup-calculator
description: "Find out the best times to wake up if you go to bed now, based on 90-minute sleep cycles. It can help you wake up feeling refreshed and energetic."
display: fullscreen
backgroud-color: black
---

<p style="text-align:center;color:#FFE0B2">{{ page.description }} Bookmark this page if it helps you.</p>
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
    #sleep-calculator-container h1 {
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
    #wakeup-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }
    .bedtime {
        background-color: #00c7b4;
        color: #0d1a26;
        padding: 10px 18px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 120px;
    }
    .duration-annotation {
        font-size: 12px;
        color: #1c2b3a;
        margin-top: 2px;
        font-weight: 500;
    }
    #suggestion-now {
        margin-top: 30px;
        padding: 20px;
        background-color: #1c2b3a;
        border-radius: 8px;
        border: 1px solid #00c7b4;
    }
    #suggestion-now h3 {
        color: #00c7b4;
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 18px;
    }
    #suggestion-now p {
        font-size: 15px;
        margin-bottom: 15px;
    }
    .btn {
        background-color: #00c7b4;
        color: #0d1a26;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-top: 15px;
        display: inline-block;
        text-decoration: none;
    }
    .btn:hover {
        background-color: #00a896;
    }
    #refresh-button {
        background-color: #00c7b4;
        color: #0d1a26;
        border: none;
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-left: 10px;
        vertical-align: middle;
    }
    #refresh-button:hover {
        background-color: #00a896;
    }
</style>

<div id="sleep-calculator-container">
    <h1>Recommended Wake-up Times</h1>
    <p>If you go to bed now, at <strong id="current-time-display"></strong>, wake up at one of the following times to feel refreshed. These times are based on a 15-minute time to fall asleep and full 90-minute sleep cycles. <button id="refresh-button">Refresh</button></p>
    <div id="wakeup-options" style="margin-top: 20px;"></div>
    <div id="suggestion-now">
        <p style="margin-bottom: 15px;">Need to calculate your bedtime?</p>
        <a href="/tool/sleep-calculator" class="btn">Go to Sleep Time Calculator</a>
    </div>
</div>

<script>
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    function formatTimeWithSeconds(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }

    function calculateAndShowWakeUpTimes() {
        const wakeupOptionsContainer = document.getElementById('wakeup-options');
        const currentTimeDisplay = document.getElementById('current-time-display');
        if (!wakeupOptionsContainer || !currentTimeDisplay) return;

        const now = new Date();
        currentTimeDisplay.textContent = formatTimeWithSeconds(now);

        // Add 15 minutes to account for the time it takes to fall asleep.
        const sleepTime = new Date(now.getTime() + 15 * 60 * 1000);

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
            durationSpan.textContent = `(${wt.duration} sleep)`;

            wakeupElement.appendChild(timeSpan);
            wakeupElement.appendChild(durationSpan);
            wakeupOptionsContainer.appendChild(wakeupElement);
        });
    }

    // Run calculations on page load
    document.addEventListener('DOMContentLoaded', function() {
        calculateAndShowWakeUpTimes();

        const refreshButton = document.getElementById('refresh-button');
        if (refreshButton) {
            refreshButton.addEventListener('click', calculateAndShowWakeUpTimes);
        }
    });
</script>
