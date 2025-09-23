---
layout: page
title:  "World Time Planner: Directly Find Perfect Meeting Time for Global Team"
description: "A simple tool to find the perfect meeting time across different time zones. Select cities or timezones and visualize the time overlap."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
permalink: /tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
  # display: fullscreen
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app">

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
        <div id="wtp-scroll-container">
          <div id="wtp-rows-wrapper" style="position: relative;">
              <div id="wtp-time-rows"></div>
              <div id="wtp-time-selector" style="display: none;"></div>
          </div>
        </div>
  </div>

  <div class="wtp-selectors-container">
    <div class="wtp-tab-buttons">
      <div class="wtp-tab-btn-container">
        <button class="wtp-tab-btn active" data-tab="popular">Popular Cities</button>
        <button class="wtp-tab-btn" data-tab="country">By Country</button>
        <button class="wtp-tab-btn" data-tab="timezone">By Time Zone</button>
      </div>
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

  <div class="wtp-features-section">
    <h2>World Time Planner</h2>
    <p class="wtp-features-intro">
      Plan meetings across time zones without the confusion. This tool helps you find the best meeting times for global teams and clients.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Your Local Time First</h3>
        <p>See your local time at the top automatically. No need to figure out what time it is where you are.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Easy Time Zone Addition</h3>
        <p>Add any city or time zone with one click. Compare times across the world instantly.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Visual Time Planning</h3>
        <p>Drag to select time ranges and see how they look in different time zones. Perfect for scheduling meetings.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Direct Calendar Integration</h3>
        <p>Create calendar events directly in Google Calendar, Outlook, or Yahoo Calendar. No copy-paste needed.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>No Registration Required</h3>
        <p>Start planning immediately. No accounts, no downloads, no setup required.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Works Offline</h3>
        <p>Once loaded, works without internet. Great for travel or unreliable connections.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Perfect For:</h3>
      <ul>
        <li>
          <strong>Remote teams across different countries</strong><br>
          Sarah in New York needs to schedule a team meeting with colleagues in London, Tokyo, and Sydney. She drags to select 2-4 PM her time and instantly sees it's 7-9 PM in London, 4-6 AM next day in Tokyo, and 6-8 AM next day in Sydney.
        </li>
        <li>
          <strong>Client meetings with international partners</strong><br>
          A marketing agency in Berlin needs to present to a client in San Francisco. They select 3-4 PM Berlin time and see it's 6-7 AM in San Francisco - too early. They adjust to 5-6 PM Berlin time for a better 8-9 AM San Francisco slot.
        </li>
        <li>
          <strong>Webinar scheduling for global audiences</strong><br>
          A tech company wants to host a webinar for users worldwide. They select 2-3 PM EST and immediately see it works for Europe (7-8 PM) and Asia (3-4 AM next day). They create calendar invites for all time zones with one click.
        </li>
        <li>
          <strong>Personal travel planning</strong><br>
          Mike is traveling from Chicago to Paris for business. He needs to call his family back home during his trip. He selects 7-8 PM Paris time and sees it's 1-2 PM in Chicago - perfect for a lunch break call.
        </li>
        <li>
          <strong>Family calls across time zones</strong><br>
          A family has members in Los Angeles, New York, and London. They want to find a time that works for everyone. They try different time slots and discover 10 AM LA time works for 1 PM New York and 6 PM London - everyone can join.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info"></div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Add to Calendar</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Calendar
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Calendar
            </button>
          </div>
        </div>
        <div id="wtp-timezone-times"></div>
      </div>
      <button class="wtp-range-dialog-close">&times;</button>
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