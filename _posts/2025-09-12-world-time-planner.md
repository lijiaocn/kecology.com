---
layout: page
date: "2025-09-15 18:08:24 +0800"
categories: "tools"
permalink: /tool/world-time-planner
i18n: true
mysetting:
  display: fullscreen
  nowrapper: true
  background-color: '#121212'
  # display: fullscreen
title:  "World Time Planner: Directly Find Perfect Meeting Time for Global Team"
description: "A simple tool to find the perfect meeting time across different time zones. Select cities or timezones and visualize the time overlap."
---

{% assign i18n_data = site.data.i18n['world-time-planner'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['world-time-planner']['en'] %}
{% endif %}


<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div class="wtp-header">
  <h1>
    {{ i18n_data.main_title }}
    {% if i18n_data.subtitle %}
    <span class="wtp-subtitle">{{ i18n_data.subtitle }}</span>
    {% endif %}
  </h1>
  {% if i18n_data.user_feedback_tip %}
  <p class="wtp-feedback-tip">{{ i18n_data.user_feedback_tip }}</p>
  {% endif %}
</div>

<div id="world-time-planner-app">


  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="{{ i18n_data.button_scroll_left }}">&lt;</button>
        <button id="wtp-now-btn" title="{{ i18n_data.button_now }}">{{ i18n_data.button_now }}</button>
        <button id="wtp-scroll-right-btn" title="{{ i18n_data.button_scroll_right }}">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">{{ i18n_data.tab_popular }}</button>
        <button class="wtp-tab-btn" data-tab="country">{{ i18n_data.tab_country }}</button>
        <button class="wtp-tab-btn" data-tab="timezone">{{ i18n_data.tab_timezone }}</button>
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
    <h2>{{ i18n_data.features_title }}</h2>
    <p class="wtp-features-intro">
      {{ i18n_data.features_intro }}
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_local_time_title }}</h3>
        <p>{{ i18n_data.feature_local_time_desc }}</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_easy_add_title }}</h3>
        <p>{{ i18n_data.feature_easy_add_desc }}</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_visual_title }}</h3>
        <p>{{ i18n_data.feature_visual_desc }}</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_calendar_title }}</h3>
        <p>{{ i18n_data.feature_calendar_desc }}</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_no_registration_title }}</h3>
        <p>{{ i18n_data.feature_no_registration_desc }}</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>{{ i18n_data.feature_offline_title }}</h3>
        <p>{{ i18n_data.feature_offline_desc }}</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>{{ i18n_data.use_cases_title }}</h3>
      <ul>
        <li>
          <strong>{{ i18n_data.use_case_remote_teams_title }}</strong><br>
          {{ i18n_data.use_case_remote_teams_desc }}
        </li>
        <li>
          <strong>{{ i18n_data.use_case_client_title }}</strong><br>
          {{ i18n_data.use_case_client_desc }}
        </li>
        <li>
          <strong>{{ i18n_data.use_case_webinar_title }}</strong><br>
          {{ i18n_data.use_case_webinar_desc }}
        </li>
        <li>
          <strong>{{ i18n_data.use_case_travel_title }}</strong><br>
          {{ i18n_data.use_case_travel_desc }}
        </li>
        <li>
          <strong>{{ i18n_data.use_case_family_title }}</strong><br>
          {{ i18n_data.use_case_family_desc }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>{{ i18n_data.dialog_title }}</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>{{ i18n_data.dialog_label_start }}</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Loading...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Loading...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>{{ i18n_data.dialog_label_end }}</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Loading...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Loading...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>{{ i18n_data.dialog_label_duration }}</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Loading...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">{{ i18n_data.dialog_label_add_calendar }}</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              {{ i18n_data.button_google_calendar }}
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              {{ i18n_data.button_outlook }}
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              {{ i18n_data.button_yahoo_calendar }}
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

<!-- Hidden text elements for internationalization -->
<div id="text-templates" style="display: none;">
    <span id="text-invalid-timezone">{{ i18n_data.text_invalid_timezone }}</span>
    <span id="text-timezone-label">{{ i18n_data.text_timezone_label }}</span>
    <span id="text-now">{{ i18n_data.text_now }}</span>
    <span id="text-view-times">{{ i18n_data.text_view_times }}</span>
    <span id="text-unknown">{{ i18n_data.text_unknown }}</span>
</div>

<script src="/assets/js/world-time-planner.js?v=11"></script>