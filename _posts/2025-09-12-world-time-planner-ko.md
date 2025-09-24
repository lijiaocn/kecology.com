---
layout: page
title:  "세계 시간 플래너: 글로벌 팀을 위한 완벽한 회의 시간을 직접 찾아보세요"
description: "여러 시간대에 걸쳐 완벽한 회의 시간을 찾을 수 있는 간단한 도구입니다. 도시나 시간대를 선택하고 시간 중복을 시각화하세요."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: ko
permalink: /ko/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="왼쪽으로 스크롤">&lt;</button>
        <button id="wtp-now-btn" title="현재 시간으로 이동">지금</button>
        <button id="wtp-scroll-right-btn" title="오른쪽으로 스크롤">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">인기 도시</button>
        <button class="wtp-tab-btn" data-tab="country">국가별</button>
        <button class="wtp-tab-btn" data-tab="timezone">시간대별</button>
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
    <h2>세계 시간 플래너</h2>
    <p class="wtp-features-intro">
      혼란 없이 여러 시간대에 걸쳐 회의를 계획하세요. 이 도구는 글로벌 팀과 고객을 위한 최적의 회의 시간을 찾는 데 도움이 됩니다.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>현지 시간 우선</h3>
        <p>현지 시간을 맨 위에 자동으로 표시합니다. 현재 계신 곳의 시간을 알아낼 필요가 없습니다.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>간편한 시간대 추가</h3>
        <p>클릭 한 번으로 모든 도시나 시간대를 추가하세요. 전 세계의 시간을 즉시 비교할 수 있습니다.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>시각적 시간 계획</h3>
        <p>시간 범위를 선택하려면 드래그하여 다른 시간대에서 어떻게 보이는지 확인하세요. 회의 일정 잡기에 적합합니다.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>직접적인 캘린더 통합</h3>
        <p>Google 캘린더, Outlook 또는 Yahoo 캘린더에서 직접 캘린더 이벤트를 만드세요. 복사하여 붙여넣을 필요가 없습니다.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>등록 불필요</h3>
        <p>즉시 계획을 시작하세요. 계정, 다운로드, 설정이 필요 없습니다.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>오프라인 작동</h3>
        <p>로드되면 인터넷 없이 작동합니다. 여행이나 불안정한 연결에 적합합니다.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>적합한 대상:</h3>
      <ul>
        <li>
          <strong>여러 국가에 있는 원격 팀</strong><br>
          뉴욕에 있는 사라는 런던, 도쿄, 시드니에 있는 동료들과 팀 회의를 계획해야 합니다. 그녀는 자신의 시간으로 오후 2-4시를 선택하고 즉시 런던에서는 오후 7-9시, 도쿄에서는 다음 날 오전 4-6시, 시드니에서는 다음 날 오전 6-8시임을 확인합니다.
        </li>
        <li>
          <strong>해외 파트너와의 고객 회의</strong><br>
          베를린의 한 마케팅 대행사는 샌프란시스코의 고객에게 프레젠테이션을 해야 합니다. 그들은 베를린 시간으로 오후 3-4시를 선택하고 샌프란시스코에서는 오전 6-7시임을 확인합니다. 너무 이릅니다. 그들은 샌프란시스코의 더 나은 오전 8-9시 시간대를 위해 베를린 시간을 오후 5-6시로 조정합니다.
        </li>
        <li>
          <strong>글로벌 청중을 위한 웨비나 일정 잡기</strong><br>
          한 기술 회사가 전 세계 사용자를 위해 웨비나를 개최하고자 합니다. 그들은 동부 표준시 기준 오후 2-3시를 선택하고 즉시 유럽(오후 7-8시)과 아시아(다음 날 오전 3-4시)에 적합하다는 것을 확인합니다. 그들은 한 번의 클릭으로 모든 시간대에 대한 캘린더 초대장을 만듭니다.
        </li>
        <li>
          <strong>개인 여행 계획</strong><br>
          마이크는 사업차 시카고에서 파리로 여행 중입니다. 그는 여행 중에 집에 있는 가족에게 전화해야 합니다. 그는 파리 시간으로 오후 7-8시를 선택하고 시카고에서는 오후 1-2시임을 확인합니다. 점심시간 통화에 안성맞춤입니다.
        </li>
        <li>
          <strong>여러 시간대에 걸친 가족 통화</strong><br>
          한 가족은 로스앤젤레스, 뉴욕, 런던에 구성원이 있습니다. 그들은 모두에게 맞는 시간을 찾고 싶어 합니다. 그들은 여러 시간대를 시도해보고 로스앤젤레스 시간 오전 10시가 뉴욕 오후 1시와 런던 오후 6시에 적합하다는 것을 발견합니다. 모두가 참여할 수 있습니다.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>시간 범위 미세 조정</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>시작</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">로드 중...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">로드 중...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>종료</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">로드 중...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">로드 중...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>기간</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">로드 중...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">캘린더에 추가</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google 캘린더
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo 캘린더
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

<script src="/assets/js/world-time-planner-ko.js?v=11"></script>
