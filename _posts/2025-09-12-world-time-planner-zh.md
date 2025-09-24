---
layout: page
title:  "世界时间规划器：直接为全球团队找到完美的会议时间"
description: "一个简单的工具，用于查找跨不同时区的完美会议时间。选择城市或时区并可视化时间重叠。"
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: zh-CN
permalink: /zh/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="向左滚动">&lt;</button>
        <button id="wtp-now-btn" title="转到当前时间">现在</button>
        <button id="wtp-scroll-right-btn" title="向右滚动">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">热门城市</button>
        <button class="wtp-tab-btn" data-tab="country">按国家</button>
        <button class="wtp-tab-btn" data-tab="timezone">按时区</button>
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
    <h2>世界时间规划器</h2>
    <p class="wtp-features-intro">
      轻松规划跨时区的会议，不再混乱。此工具可帮助您为全球团队和客户找到最佳会议时间。
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>本地时间优先</h3>
        <p>自动在顶部查看您的本地时间。无需费心计算您所在位置的时间。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>轻松添加时区</h3>
        <p>一键添加任何城市或时区。即时比较世界各地的时间。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>可视化时间规划</h3>
        <p>拖动以选择时间范围，并查看它们在不同时区的显示方式。非常适合安排会议。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>直接日历集成</h3>
        <p>直接在 Google 日历、Outlook 或 Yahoo 日历中创建日历活动。无需复制粘贴。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>无需注册</h3>
        <p>立即开始规划。无需帐户、无需下载、无需设置。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>离线工作</h3>
        <p>加载后，无需互联网即可工作。非常适合旅行或网络不稳定的情况。</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>完美适用于：</h3>
      <ul>
        <li>
          <strong>不同国家的远程团队</strong><br>
          纽约的莎拉需要与伦敦、东京和悉尼的同事安排一次团队会议。她拖动选择自己时间的下午 2-4 点，并立即看到伦敦是晚上 7-9 点，东京是第二天早上 4-6 点，悉尼是第二天早上 6-8 点。
        </li>
        <li>
          <strong>与国际合作伙伴的客户会议</strong><br>
          柏林的一家营销机构需要向旧金山的客户做演示。他们选择柏林时间下午 3-4 点，看到旧金山是早上 6-7 点——太早了。他们调整为柏林时间下午 5-6 点，以获得旧金山更好的上午 8-9 点时段。
        </li>
        <li>
          <strong>为全球观众安排网络研讨会</strong><br>
          一家科技公司希望为全球用户举办网络研讨会。他们选择美国东部标准时间下午 2-3 点，并立即看到它适用于欧洲（晚上 7-8 点）和亚洲（第二天早上 3-4 点）。他们一键为所有时区创建日历邀请。
        </li>
        <li>
          <strong>个人旅行计划</strong><br>
          迈克因公从芝加哥前往巴黎。他需要在旅途中给家里的家人打电话。他选择巴黎时间晚上 7-8 点，看到芝加哥是下午 1-2 点——非常适合午休时间的通话。
        </li>
        <li>
          <strong>跨时区的家庭通话</strong><br>
          一个家庭的成员分布在洛杉矶、纽约和伦敦。他们想找一个适合所有人的时间。他们尝试了不同的时间段，发现洛杉矶时间上午 10 点适用于纽约下午 1 点和伦敦下午 6 点——每个人都可以参加。
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>微调时间范围</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>开始</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">加载中...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">加载中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>结束</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">加载中...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">加载中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>持续时间</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">加载中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">添加到日历</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google 日历
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo 日历
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

<script src="/assets/js/world-time-planner-zh.js?v=11"></script>
