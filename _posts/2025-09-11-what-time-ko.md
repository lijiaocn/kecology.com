---
layout: page
title: "캘리포니아, 호주, 텍사스, 런던(및 기타 도시)은 지금 몇 시입니까?"
description: "캘리포니아, 호주, 텍사스, 런던, 일본, 뉴욕 및 전 세계 기타 주요 도시 및 국가의 현재 현지 시간을 확인하십시오. 어디서나 시간을 확인할 수 있는 간단한 도구입니다."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /ko/tool/what-time
lang: ko
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">캘리포니아, 호주, 텍사스, 런던, 일본 및 기타 지역 또는 도시의 현재 시간</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">해당 시간 표시:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="시간 확인">확인</button>
    <button id="reset-time-btn" class="reset-btn" title="실시간으로 재설정">재설정</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">실시간 자동 새로고침</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">전 세계 시간</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">미국</button>
    <button class="tab-link" data-country="argentina">아르헨티나</button>
    <button class="tab-link" data-country="australia">호주</button>
    <button class="tab-link" data-country="brazil">브라질</button>
    <button class="tab-link" data-country="canada">캐나다</button>
    <button class="tab-link" data-country="china">중국</button>
    <button class="tab-link" data-country="egypt">이집트</button>
    <button class="tab-link" data-country="fiji">피지</button>
    <button class="tab-link" data-country="france">프랑스</button>
    <button class="tab-link" data-country="germany">독일</button>
    <button class="tab-link" data-country="hongkong">홍콩</button>
    <button class="tab-link" data-country="india">인도</button>
    <button class="tab-link" data-country="italy">이탈리아</button>
    <button class="tab-link" data-country="japan">일본</button>
    <button class="tab-link" data-country="mexico">멕시코</button>
    <button class="tab-link" data-country="newzealand">뉴질랜드</button>
    <button class="tab-link" data-country="russia">러시아</button>
    <button class="tab-link" data-country="singapore">싱가포르</button>
    <button class="tab-link" data-country="southafrica">남아프리카 공화국</button>
    <button class="tab-link" data-country="southkorea">대한민국</button>
    <button class="tab-link" data-country="uae">아랍에미리트</button>
    <button class="tab-link" data-country="uk">영국</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        아르헨티나는 단일 시간대를 사용하며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">부에노스아이레스, 코르도바, 로사리오</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        호주는 세 개의 주요 시간대로 나뉩니다. 일부 주와 테리토리에서는 서머타임(DST)이 준수됩니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">시드니, 멜버른, 캔버라</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">브리즈번</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">애들레이드</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">다윈</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">퍼스</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        브라질에는 여러 시간대가 있습니다. 대부분의 지역에서는 서머타임을 준수하지 않습니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">브라질리아 시간 (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">상파울루, 리우데자네이루, 브라질리아</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">아마존 시간 (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">살바도르</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        캐나다는 6개의 주요 시간대에 걸쳐 있습니다. 대부분의 지역에서 서머타임이 준수됩니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">동부 시간 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">토론토, 몬트리올, 오타와</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">중부 시간 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">위니펙</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">산지 시간 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">캘거리</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">태평양 시간 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">밴쿠버</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        광대한 지리적 크기에도 불구하고 중국은 공식적으로 단일 시간대인 중국 표준시(CST)를 사용합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">베이징, 상하이, 광저우, 선전, 청두</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        이집트는 단일 시간대를 사용합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">카이로, 알렉산드리아, 기자</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        피지에는 하나의 주요 시간대가 있습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">수바, 나디, 라우토카</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        프랑스 본토는 단일 시간대를 사용하며 서머타임을 준수합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">파리, 마르세유, 리옹</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        독일은 단일 시간대를 사용하며 서머타임을 준수합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">베를린, 함부르크, 뮌헨, 프랑크푸르트, 쾰른</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        홍콩은 표준 시간대가 하나이며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">홍콩</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        인도는 단일 시간대인 인도 표준시(IST)를 사용하며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">뉴델리, 뭄바이, 방갈로르, 콜카타, 첸나이</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        이탈리아는 단일 시간대를 사용하며 서머타임을 준수합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">로마, 밀라노, 베니스, 나폴리, 피렌체</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        일본은 표준 시간대가 하나이며 일본 표준시(JST)를 사용하며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">도쿄, 오사카, 교토, 요코하마, 삿포로</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        멕시코에는 4개의 주요 시간대가 있습니다. 대부분의 지역에서는 더 이상 서머타임을 준수하지 않습니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">중부 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">멕시코시티, 과달라하라</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">몬테레이</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">태평양 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">티후아나</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">남동부 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">칸쿤</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        뉴질랜드에는 하나의 주요 시간대가 있으며 서머타임을 준수합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">오클랜드, 웰링턴, 크라이스트처치</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        러시아는 세계에서 가장 큰 나라이며 11개의 시간대에 걸쳐 있습니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">모스크바 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">모스크바, 상트페테르부르크</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">예카테린부르크 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">예카테린부르크</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">노보시비르스크 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">노보시비르스크</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">블라디보스토크 시간</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">블라디보스토크</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        싱가포르는 표준 시간대가 하나이며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">싱가포르</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        남아프리카 공화국은 표준 시간대가 하나이며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">요하네스버그, 케이프타운, 더반, 프리토리아</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        대한민국은 표준 시간대가 하나이며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">서울, 부산, 인천</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        아랍에미리트는 표준 시간대가 하나이며 서머타임을 준수하지 않습니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">두바이, 아부다비, 샤르자</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        영국은 단일 시간대를 사용하며 서머타임을 준수합니다.
      </div>
      <div class="single-timezone-notice">이 국가는 단일 시간대를 사용합니다.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">런던, 맨체스터, 에든버러, 버밍엄, 글래스고</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        미국은 공식적으로 9개의 표준 시간대를 사용합니다. 대부분의 지역에서는 서머타임을 준수합니다.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">동부 시간 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">뉴욕, 마이애미, 애틀랜타, 보스턴</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">중부 시간 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">시카고, 댈러스, 뉴올리언스, 휴스턴</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">산지 시간 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">덴버, 솔트레이크시티</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">피닉스 (애리조나)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">태평양 시간 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">로스앤젤레스, 샌프란시스코, 시애틀, 샌디에이고</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">인기 있는 위치</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">캘리포니아</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">시드니</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">텍사스</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">런던</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">도쿄</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">뉴욕</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">인도</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">애리조나</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">하와이</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">토론토</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">파리</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">베이징</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">싱가포르</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">요하네스버그</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">상파울루</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">프랑크푸르트</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">두바이</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">홍콩</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">서울</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">모스크바</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">카이로</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">멜버른</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">오클랜드</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">멕시코시티</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">부에노스아이레스</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-ko.js"></script>
