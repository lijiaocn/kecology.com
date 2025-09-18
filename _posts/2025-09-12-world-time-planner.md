---
layout: page
title:  "World Time Planner: Directly Find Perfect Meeting Time for Global Team"
description: "A simple tool to find the perfect meeting time across different time zones. Select cities or timezones and visualize the time overlap."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-15 18:08:24 +0800"
categories: "tools"
permalink: /tool/world-time-planner
mysetting:
  nowrapper: true
  # display: fullscreen
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app">
  <header class="wtp-header">
    <h2>World Time Planner</h2>
    <p>Find the best meeting time across cities in different time zones.</p>
  </header>

  <div class="wtp-selectors-container">
    <div class="wtp-tab-buttons">
      <button class="wtp-tab-btn active" data-tab="popular">Popular Cities</button>
      <button class="wtp-tab-btn" data-tab="country">By Country</button>
      <button class="wtp-tab-btn" data-tab="timezone">By Time Zone</button>
    </div>
    
    <div class="wtp-tab-content">
      <div class="wtp-tab-panel active" id="popular-cities-panel">
        <div id="popular-cities-list" class="wtp-city-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="country-panel">
        <div id="country-list" class="wtp-country-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="timezone-panel">
        <div id="timezone-list" class="wtp-city-grid"></div>
      </div>
    </div>
    
    <div id="city-modal" class="wtp-modal">
      <div class="wtp-modal-content">
        <span class="wtp-modal-close">&times;</span>
        <h3 id="modal-country-name"></h3>
        <div id="modal-country-info" class="wtp-country-info"></div>
        <div id="modal-city-list" class="wtp-city-grid"></div>
      </div>
    </div>
  </div>

  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="Scroll left">&lt;</button>
        <button id="wtp-now-btn" title="Go to current time">Now</button>
        <button id="wtp-scroll-right-btn" title="Scroll right">&gt;</button>
      </div>
    </div>
    <div id="wtp-rows-wrapper" style="position: relative;">
        <div id="wtp-time-rows"></div>
        <div id="wtp-time-selector" style="display: none;"></div>
    </div>
  </div>

</div>

<template id="wtp-timeline-row-template">
  <div class="wtp-timeline-row">
    <div class="wtp-timezone-info">
      <button class="wtp-remove-btn">&times;</button>
      <div class="wtp-city"></div>
      <div class="wtp-current-time"></div>
    </div>
    <div class="wtp-timeline-track">
      <div class="wtp-hover-time-label"></div>
    </div>
  </div>
</template>

<script src="/assets/js/world-time-planner.js?v=11"></script>