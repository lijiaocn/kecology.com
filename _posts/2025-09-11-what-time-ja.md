---
layout: page
title: "カリフォルニア、オーストラリア、テキサス、ロンドンの現在の時刻（その他の都市）"
description: "カリフォルニア、オーストラリア、テキサス、ロンドン、日本、ニューヨークなど、世界中の主要な都市や国の現在の現地時刻を調べます。どこでも時刻を確認できる簡単なツールです。"
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /ja/tool/what-time
lang: ja
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">カリフォルニア、オーストラリア、テキサス、ロンドン、日本、その他の地域や都市の現在の時刻</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">対応する時刻を表示：</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="時刻を確定">確定</button>
    <button id="reset-time-btn" class="reset-btn" title="ライブ時刻にリセット">リセット</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">ライブ時刻を自動更新</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">世界中の時刻</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">アメリカ合衆国</button>
    <button class="tab-link" data-country="argentina">アルゼンチン</button>
    <button class="tab-link" data-country="australia">オーストラリア</button>
    <button class="tab-link" data-country="brazil">ブラジル</button>
    <button class="tab-link" data-country="canada">カナダ</button>
    <button class="tab-link" data-country="china">中国</button>
    <button class="tab-link" data-country="egypt">エジプト</button>
    <button class="tab-link" data-country="fiji">フィジー</button>
    <button class="tab-link" data-country="france">フランス</button>
    <button class="tab-link" data-country="germany">ドイツ</button>
    <button class="tab-link" data-country="hongkong">香港</button>
    <button class="tab-link" data-country="india">インド</button>
    <button class="tab-link" data-country="italy">イタリア</button>
    <button class="tab-link" data-country="japan">日本</button>
    <button class="tab-link" data-country="mexico">メキシコ</button>
    <button class="tab-link" data-country="newzealand">ニュージーランド</button>
    <button class="tab-link" data-country="russia">ロシア</button>
    <button class="tab-link" data-country="singapore">シンガポール</button>
    <button class="tab-link" data-country="southafrica">南アフリカ</button>
    <button class="tab-link" data-country="southkorea">韓国</button>
    <button class="tab-link" data-country="uae">アラブ首長国連邦</button>
    <button class="tab-link" data-country="uk">イギリス</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        アルゼンチンは単一のタイムゾーンを使用しており、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ブエノスアイレス、コルドバ、ロサリオ</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        オーストラリアは3つの主要なタイムゾーンに分かれています。一部の州および準州では夏時間（DST）が採用されています。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">シドニー、メルボルン、キャンベラ</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">ブリスベン</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">アデレード</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">ダーウィン</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">パース</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        ブラジルには複数のタイムゾーンがあります。国のほとんどの地域では夏時間は採用されていません。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ブラジリア時間 (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">サンパウロ、リオデジャネイロ、ブラジリア</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">アマゾン時間 (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">サルバドール</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        カナダは6つの主要なタイムゾーンにまたがっています。ほとんどの地域で夏時間が採用されています。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">東部標準時 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">トロント、モントリオール、オタワ</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部標準時 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ウィニペグ</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山岳部標準時 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">カルガリー</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋標準時 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">バンクーバー</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        広大な地理的サイズにもかかわらず、中国は公式に単一のタイムゾーン、中国標準時（CST）で運営されています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">北京、上海、広州、深圳、成都</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        エジプトは単一のタイムゾーンを使用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">カイロ、アレクサンドリア、ギザ</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        フィジーには主要なタイムゾーンが1つあります。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">スバ、ナンディ、ラウトカ</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        フランス本土は単一のタイムゾーンを使用し、夏時間を採用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">パリ、マルセイユ、リヨン</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        ドイツは単一のタイムゾーンを使用し、夏時間を採用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ベルリン、ハンブルク、ミュンヘン、フランクフルト、ケルン</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        香港には標準タイムゾーンが1つあり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">香港</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        インドには単一のタイムゾーン、インド標準時（IST）があり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ニューデリー、ムンバイ、バンガロール、コルカタ、チェンナイ</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        イタリアは単一のタイムゾーンを使用し、夏時間を採用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ローマ、ミラノ、ヴェネツィア、ナポリ、フィレンツェ</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        日本には標準タイムゾーンが1つ、日本標準時（JST）があり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">東京、大阪、京都、横浜、札幌</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        メキシコには4つの主要なタイムゾーンがあります。国のほとんどの地域では夏時間は採用されなくなりました。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部標準時</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">メキシコシティ、グアダラハラ</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">モンテレイ</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋標準時</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ティフアナ</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">南東部標準時</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">カンクン</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        ニュージーランドには主要なタイムゾーンが1つあり、夏時間を採用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">オークランド、ウェリントン、クライストチャーチ</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        ロシアは世界で最も広い国で、11のタイムゾーンにまたがっています。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">モスクワ時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">モスクワ、サンクトペテルブルク</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">エカテリンブルク時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">エカテリンブルク</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ノボシビルスク時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ノボシビルスク</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ウラジオストク時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ウラジオストク</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        シンガポールには標準タイムゾーンが1つあり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">シンガポール</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        南アフリカには標準タイムゾーンが1つあり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ヨハネスブルグ、ケープタウン、ダーバン、プレトリア</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        韓国には標準タイムゾーンが1つあり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ソウル、釜山、仁川</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        アラブ首長国連邦には標準タイムゾーンが1つあり、夏時間は採用していません。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ドバイ、アブダビ、シャールジャ</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        イギリスは単一のタイムゾーンを使用し、夏時間を採用しています。
      </div>
      <div class="single-timezone-notice">この国は単一のタイムゾーンを使用しています。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ロンドン、マンチェスター、エディンバラ、バーミンガム、グラスゴー</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        アメリカ合衆国は公式に9つの標準タイムゾーンを使用しています。国のほとんどの地域で夏時間が採用されています。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">東部標準時 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ニューヨーク、マイアミ、アトランタ、ボストン</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部標準時 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">シカゴ、ダラス、ニューオーリンズ、ヒューストン</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山岳部標準時 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">デンバー、ソルトレイクシティ</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">フェニックス (アリゾナ州)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋標準時 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ロサンゼルス、サンフランシスコ、シアトル、サンディエゴ</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">人気の場所</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">カリフォルニア</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">シドニー</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">テキサス</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">ロンドン</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">東京</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">ニューヨーク</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">インド</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">アリゾナ</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">ハワイ</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">トロント</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">パリ</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">北京</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">シンガポール</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">ヨハネスブルグ</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">サンパウロ</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">フランクフルト</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">ドバイ</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">香港</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">ソウル</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">モスクワ</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">カイロ</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">メルボルン</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">オークランド</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">メキシコシティ</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">ブエノスアイレス</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-ja.js"></script>
