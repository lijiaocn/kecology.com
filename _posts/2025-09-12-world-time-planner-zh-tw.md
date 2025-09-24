---
layout: page
title:  "世界時間規劃器：直接為全球團隊找到完美的會議時間"
description: "一個簡單的工具，用於尋找跨不同時區的完美會議時間。選擇城市或時區並可視化時間重疊。"
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: zh-TW
permalink: /zh-tw/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="向左捲動">&lt;</button>
        <button id="wtp-now-btn" title="前往目前時間">現在</button>
        <button id="wtp-scroll-right-btn" title="向右捲動">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">熱門城市</button>
        <button class="wtp-tab-btn" data-tab="country">按國家</button>
        <button class="wtp-tab-btn" data-tab="timezone">按時區</button>
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
    <h2>世界時間規劃器</h2>
    <p class="wtp-features-intro">
      輕鬆規劃跨時區的會議，不再混亂。此工俱可協助您為全球團隊和客戶找到最佳會議時間。
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>本地時間優先</h3>
        <p>自動在頂部查看您的本地時間。無需費心計算您所在位置的時間。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>輕鬆新增時區</h3>
        <p>一鍵新增任何城市或時區。即時比較世界各地的時間。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>視覺化時間規劃</h3>
        <p>拖曳以選取時間範圍，並查看它們在不同時區的顯示方式。非常適合安排會議。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>直接日曆整合</h3>
        <p>直接在 Google 日曆、Outlook 或 Yahoo 日曆中建立日曆活動。無需複製貼上。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>無需註冊</h3>
        <p>立即開始規劃。無需帳戶、無需下載、無需設定。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>離線工作</h3>
        <p>載入後，無需網路即可工作。非常適合旅行或網路不穩定的情況。</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>完美適用於：</h3>
      <ul>
        <li>
          <strong>不同國家的遠端團隊</strong><br>
          紐約的莎拉需要與倫敦、東京和雪梨的同事安排一次團隊會議。她拖動選擇自己時間的下午 2-4 點，並立即看到倫敦是晚上 7-9 點，東京是第二天早上 4-6 點，雪梨是第二天早上 6-8 點。
        </li>
        <li>
          <strong>與國際合作夥伴的客戶會議</strong><br>
          柏林的一家行銷機構需要向舊金山的客戶做簡報。他們選擇柏林時間下午 3-4 點，看到舊金山是早上 6-7 點——太早了。他們調整為柏林時間下午 5-6 點，以獲得舊金山更好的上午 8-9 點時段。
        </li>
        <li>
          <strong>為全球觀眾安排網路研討会</strong><br>
          一家科技公司希望為全球使用者舉辦網路研討会。他們選擇美國東部標準時間下午 2-3 點，並立即看到它適用於歐洲（晚上 7-8 點）和亞洲（第二天早上 3-4 点）。他們一鍵為所有時區建立日曆邀請。
        </li>
        <li>
          <strong>個人旅行計劃</strong><br>
          麥克因公從芝加哥前往巴黎。他需要在旅途中給家裡的家人打電話。他選擇巴黎時間晚上 7-8 點，看到芝加哥是下午 1-2 點——非常適合午休時間的通話。
        </li>
        <li>
          <strong>跨時區的家庭通話</strong><br>
          一個家庭的成員分佈在洛杉磯、紐約和倫敦。他們想找一個適合所有人的時間。他們嘗試了不同的時間段，發現洛杉磯時間上午 10 點適用於紐約下午 1 點和倫敦下午 6 點——每個人都可以參加。
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>微調時間範圍</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>開始</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">載入中...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">載入中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>結束</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">載入中...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">載入中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>持續時間</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">載入中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">新增至日曆</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google 日曆
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo 日曆
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

<script src="/assets/js/world-time-planner-zh-tw.js?v=11"></script>
