---
layout: page
title:  "विश्व समय योजनाकार: वैश्विक टीम के लिए सीधे सही बैठक समय खोजें"
description: "विभिन्न समय क्षेत्रों में सही बैठक समय खोजने के लिए एक सरल उपकरण। शहरों या समय क्षेत्रों का चयन करें और समय ओवरलैप की कल्पना करें।"
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: hi
permalink: /hi/tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
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
        <button id="wtp-scroll-left-btn" title="बाईं ओर स्क्रॉल करें">&lt;</button>
        <button id="wtp-now-btn" title="वर्तमान समय पर जाएं">अभी</button>
        <button id="wtp-scroll-right-btn" title="दाईं ओर स्क्रॉल करें">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">लोकप्रिय शहर</button>
        <button class="wtp-tab-btn" data-tab="country">देश के अनुसार</button>
        <button class="wtp-tab-btn" data-tab="timezone">समय क्षेत्र के अनुसार</button>
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
    <h2>विश्व समय योजनाकार</h2>
    <p class="wtp-features-intro">
      बिना किसी भ्रम के समय क्षेत्रों में बैठकें आयोजित करें। यह उपकरण आपको वैश्विक टीमों और ग्राहकों के लिए सर्वोत्तम बैठक समय खोजने में मदद करता है।
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>पहले आपका स्थानीय समय</h3>
        <p>स्वचालित रूप से अपना स्थानीय समय शीर्ष पर देखें। आपको यह पता लगाने की आवश्यकता नहीं है कि आप कहां हैं।</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>आसान समय क्षेत्र जोड़</h3>
        <p>एक क्लिक के साथ किसी भी शहर या समय क्षेत्र को जोड़ें। दुनिया भर के समय की तुरंत तुलना करें।</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>दृश्य समय योजना</h3>
        <p>समय सीमाओं का चयन करने के लिए खींचें और देखें कि वे विभिन्न समय क्षेत्रों में कैसे दिखते हैं। बैठकों के निर्धारण के लिए बिल्कुल सही।</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>प्रत्यक्ष कैलेंडर एकीकरण</h3>
        <p>सीधे Google कैलेंडर, आउटलुक, या याहू कैलेंडर में कैलेंडर ईवेंट बनाएं। कॉपी-पेस्ट की आवश्यकता नहीं है।</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>कोई पंजीकरण आवश्यक नहीं</h3>
        <p>तुरंत योजना बनाना शुरू करें। कोई खाता नहीं, कोई डाउनलोड नहीं, कोई सेटअप आवश्यक नहीं है।</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>ऑफ़लाइन काम करता है</h3>
        <p>एक बार लोड होने के बाद, इंटरनेट के बिना काम करता है। यात्रा या अविश्वसनीय कनेक्शन के लिए बढ़िया।</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>इसके लिए बिल्कुल सही:</h3>
      <ul>
        <li>
          <strong>विभिन्न देशों में दूरस्थ टीमें</strong><br>
          न्यूयॉर्क में सारा को लंदन, टोक्यो और सिडनी में सहकर्मियों के साथ एक टीम बैठक निर्धारित करने की आवश्यकता है। वह अपने समय के 2-4 बजे का चयन करने के लिए खींचती है और तुरंत देखती है कि लंदन में शाम 7-9 बजे, टोक्यो में अगले दिन सुबह 4-6 बजे और सिडनी में अगले दिन सुबह 6-8 बजे हैं।
        </li>
        <li>
          <strong>अंतर्राष्ट्रीय भागीदारों के साथ ग्राहक बैठकें</strong><br>
          बर्लिन में एक मार्केटिंग एजेंसी को सैन फ्रांसिस्को में एक ग्राहक को प्रस्तुत करने की आवश्यकता है। वे बर्लिन समय 3-4 बजे का चयन करते हैं और देखते हैं कि सैन फ्रांसिस्को में सुबह 6-7 बजे हैं - बहुत जल्दी। वे बेहतर 8-9 बजे सैन फ्रांसिस्को स्लॉट के लिए बर्लिन समय 5-6 बजे समायोजित करते हैं।
        </li>
        <li>
          <strong>वैश्विक दर्शकों के लिए वेबिनार निर्धारण</strong><br>
          एक तकनीकी कंपनी दुनिया भर के उपयोगकर्ताओं के लिए एक वेबिनार आयोजित करना चाहती है। वे 2-3 बजे ईएसटी का चयन करते हैं और तुरंत देखते हैं कि यह यूरोप (शाम 7-8 बजे) और एशिया (अगले दिन सुबह 3-4 बजे) के लिए काम करता है। वे एक क्लिक के साथ सभी समय क्षेत्रों के लिए कैलेंडर आमंत्रण बनाते हैं।
        </li>
        <li>
          <strong>व्यक्तिगत यात्रा योजना</strong><br>
          माइक व्यवसाय के लिए शिकागो से पेरिस की यात्रा कर रहा है। उसे अपनी यात्रा के दौरान घर पर अपने परिवार को फोन करने की आवश्यकता है। वह पेरिस समय 7-8 बजे का चयन करता है और देखता है कि शिकागो में दोपहर 1-2 बजे हैं - दोपहर के भोजन के ब्रेक कॉल के लिए बिल्कुल सही।
        </li>
        <li>
          <strong>समय क्षेत्रों में पारिवारिक कॉल</strong><br>
          एक परिवार के सदस्य लॉस एंजिल्स, न्यूयॉर्क और लंदन में हैं। वे एक ऐसा समय खोजना चाहते हैं जो सभी के लिए काम करे। वे अलग-अलग समय स्लॉट की कोशिश करते हैं और पाते हैं कि लॉस एंजिल्स का समय सुबह 10 बजे न्यूयॉर्क के दोपहर 1 बजे और लंदन के शाम 6 बजे के लिए काम करता है - हर कोई शामिल हो सकता है।
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>समय सीमा को ठीक करें</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>शुरू</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">लोड हो रहा है...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">लोड हो रहा है...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>समाप्त</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">लोड हो रहा है...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">लोड हो रहा है...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>अवधि</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">लोड हो रहा है...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">कैलेंडर में जोड़ें</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              गूगल कैलेंडर
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              आउटलुक
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              याहू कैलेंडर
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

<script src="/assets/js/world-time-planner-hi.js?v=11"></script>
