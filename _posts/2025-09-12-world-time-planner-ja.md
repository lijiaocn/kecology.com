---
layout: page
title:  "ワールドタイムプランナー：グローバルチームのための完璧な会議時間を直接見つける"
description: "異なるタイムゾーン間で完璧な会議時間を見つけるためのシンプルなツール。都市やタイムゾーンを選択し、時間の重複を視覚化します。"
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: ja
permalink: /ja/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="左にスクロール">&lt;</button>
        <button id="wtp-now-btn" title="現在時刻に移動">今</button>
        <button id="wtp-scroll-right-btn" title="右にスクロール">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">人気の都市</button>
        <button class="wtp-tab-btn" data-tab="country">国別</button>
        <button class="wtp-tab-btn" data-tab="timezone">タイムゾーン別</button>
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
    <h2>ワールドタイムプランナー</h2>
    <p class="wtp-features-intro">
      混乱なくタイムゾーンを越えて会議を計画します。このツールは、グローバルチームやクライアントに最適な会議時間を見つけるのに役立ちます。
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>あなたの現地時間を最初に</h3>
        <p>あなたの現地時間が自動的に一番上に表示されます。今いる場所の時間を把握する必要はありません。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>簡単なタイムゾーンの追加</h3>
        <p>ワンクリックで任意の都市またはタイムゾーンを追加します。世界中の時間を即座に比較します。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>視覚的な時間計画</h3>
        <p>ドラッグして時間範囲を選択し、異なるタイムゾーンでどのように見えるかを確認します。会議のスケジュール設定に最適です。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>ダイレクトカレンダー統合</h3>
        <p>Googleカレンダー、Outlook、またはYahooカレンダーで直接カレンダーイベントを作成します。コピー＆ペーストは不要です。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>登録不要</h3>
        <p>すぐに計画を開始できます。アカウント、ダウンロード、設定は不要です。</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>オフラインで動作</h3>
        <p>一度読み込むと、インターネットなしで動作します。旅行や信頼性の低い接続に最適です。</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>最適:</h3>
      <ul>
        <li>
          <strong>異なる国のリモートチーム</strong><br>
          ニューヨークのサラは、ロンドン、東京、シドニーの同僚とのチームミーティングをスケジュールする必要があります。彼女は自分の時間の午後2時から4時を選択し、ロンドンでは午後7時から9時、東京では翌日の午前4時から6時、シドニーでは翌日の午前6時から8時であることを即座に確認します。
        </li>
        <li>
          <strong>国際的なパートナーとのクライアントミーティング</strong><br>
          ベルリンのマーケティング代理店は、サンフランシスコのクライアントにプレゼンテーションを行う必要があります。彼らはベルリン時間の午後3時から4時を選択し、サンフランシスコでは午前6時から7時であることを確認します - 早すぎます。彼らは、サンフランシスコのより良い午前8時から9時のスロットのために、ベルリン時間の午後5時から6時に調整します。
        </li>
        <li>
          <strong>グローバルな視聴者向けのウェビナーのスケジューリング</strong><br>
          あるテクノロジー企業は、世界中のユーザー向けにウェビナーを開催したいと考えています。彼らは東部標準時の午後2時から3時を選択し、ヨーロッパ（午後7時から8時）とアジア（翌日の午前3時から4時）で機能することを即座に確認します。彼らはワンクリックですべてのタイムゾーンのカレンダー招待状を作成します。
        </li>
        <li>
          <strong>個人の旅行計画</strong><br>
          マイクは仕事でシカゴからパリに旅行しています。彼は旅行中に故郷の家族に電話をかける必要があります。彼はパリ時間の午後7時から8時を選択し、シカゴでは午後1時から2時であることを確認します - ランチ休憩の電話に最適です。
        </li>
        <li>
          <strong>タイムゾーンを越えた家族の電話</strong><br>
          ある家族には、ロサンゼルス、ニューヨーク、ロンドンにメンバーがいます。彼らは皆に都合の良い時間を見つけたいと思っています。彼らはさまざまな時間帯を試し、ロサンゼルス時間の午前10時がニューヨークの午後1時とロンドンの午後6時に機能することを発見します - 全員が参加できます。
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>時間範囲の微調整</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>開始</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">読み込み中...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">読み込み中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>終了</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">読み込み中...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">読み込み中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>期間</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">読み込み中...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">カレンダーに追加</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Googleカレンダー
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahooカレンダー
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

<script src="/assets/js/world-time-planner-ja.js?v=11"></script>
