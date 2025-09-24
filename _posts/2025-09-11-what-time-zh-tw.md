---
layout: page
title: "現在加州、澳洲、德州、倫敦（更多城市）的時間是幾點"
description: "查詢全球主要城市和國家的目前本地時間，包括加州、澳洲、德州、倫敦、日本、紐約等。一個簡單的時間查詢工具。"
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /zh-tw/tool/what-time
lang: zh-TW
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">加州、澳洲、德州、倫敦、日本及更多地區或城市的目前時間</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">顯示對應時間：</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="確認時間">確認</button>
    <button id="reset-time-btn" class="reset-btn" title="重設為即時時間">重設</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">自動刷新即時時間</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">全球時間</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">美國</button>
    <button class="tab-link" data-country="argentina">阿根廷</button>
    <button class="tab-link" data-country="australia">澳洲</button>
    <button class="tab-link" data-country="brazil">巴西</button>
    <button class="tab-link" data-country="canada">加拿大</button>
    <button class="tab-link" data-country="china">中國</button>
    <button class="tab-link" data-country="egypt">埃及</button>
    <button class="tab-link" data-country="fiji">斐濟</button>
    <button class="tab-link" data-country="france">法國</button>
    <button class="tab-link" data-country="germany">德國</button>
    <button class="tab-link" data-country="hongkong">香港</button>
    <button class="tab-link" data-country="india">印度</button>
    <button class="tab-link" data-country="italy">義大利</button>
    <button class="tab-link" data-country="japan">日本</button>
    <button class="tab-link" data-country="mexico">墨西哥</button>
    <button class="tab-link" data-country="newzealand">紐西蘭</button>
    <button class="tab-link" data-country="russia">俄羅斯</button>
    <button class="tab-link" data-country="singapore">新加坡</button>
    <button class="tab-link" data-country="southafrica">南非</button>
    <button class="tab-link" data-country="southkorea">韓國</button>
    <button class="tab-link" data-country="uae">阿聯酋</button>
    <button class="tab-link" data-country="uk">英國</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        阿根廷使用單一時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">布宜諾斯艾利斯、哥多華、羅薩里奧</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        澳洲分為三個主要時區。部分州和地區實行夏令時（DST）。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">雪梨、墨爾本、坎培拉</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">布里斯本</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">阿得雷德</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">達爾文</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">伯斯</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        巴西有多個時區。該國大部分地區不實行夏令時。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">巴西利亞時間 (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">聖保羅、里約熱內盧、巴西利亞</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">亞馬遜時間 (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">薩爾瓦多</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        加拿大橫跨六個主要時區。大部分地區實行夏令時。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">東部時間 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">多倫多、蒙特婁、渥太華</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部時間 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">溫尼伯</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山區時間 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">卡加利</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋時間 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">溫哥華</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        儘管地域遼闊，中國官方仍實行單一時區，即中國標準時間（CST）。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">北京、上海、廣州、深圳、成都</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        埃及使用單一時區。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">開羅、亞歷山大、吉薩</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        斐濟有一個主要時區。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">蘇瓦、楠迪、勞托卡</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        法國本土使用單一時區，並實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">巴黎、馬賽、里昂</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        德國使用單一時區，並實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">柏林、漢堡、慕尼黑、法蘭克福、科隆</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        香港有一個標準時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">香港</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        印度有單一時區，即印度標準時間（IST），不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">新德里、孟買、班加羅爾、加爾各答、欽奈</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        義大利使用單一時區，並實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">羅馬、米蘭、威尼斯、拿坡里、佛羅倫斯</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        日本有一個標準時區，即日本標準時間（JST），不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">東京、大阪、京都、橫濱、札幌</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        墨西哥有四個主要時區。該國大部分地區不再實行夏令時。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">墨西哥城、瓜達拉哈拉</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">蒙特雷</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">提華納</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">東南部時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">坎昆</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        紐西蘭有一個主要時區，並實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">奧克蘭、威靈頓、基督城</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        俄羅斯是世界上最大的國家，橫跨11個時區。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">莫斯科時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">莫斯科、聖彼得堡</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">葉卡捷琳堡時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">葉卡捷琳堡</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">新西伯利亞時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">新西伯利亞</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">符拉迪沃斯托克時間</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">符拉迪沃斯托克</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        新加坡有一個標準時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">新加坡</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        南非有一個標準時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">約翰尼斯堡、開普敦、德班、普利托利亞</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        韓國有一個標準時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">首爾、釜山、仁川</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        阿拉伯聯合大公國有一個標準時區，不實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">杜拜、阿布達比、沙迦</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        英國使用單一時區，並實行夏令時。
      </div>
      <div class="single-timezone-notice">該國家使用單一時區。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">倫敦、曼徹斯特、愛丁堡、伯明罕、格拉斯哥</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        美國官方使用9個標準時區。該國大部分地區實行夏令時。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">東部時間 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">紐約、邁阿密、亞特蘭大、波士頓</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部時間 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">芝加哥、達拉斯、紐奧良、休士頓</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山區時間 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">丹佛、鹽湖城</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">鳳凰城 (亞利桑那州)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋時間 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">洛杉磯、舊金山、西雅圖、聖地牙哥</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">熱門地點</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">加州</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">雪梨</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">德州</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">倫敦</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">東京</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">紐約</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">印度</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">亞利桑那</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">夏威夷</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">多倫多</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">巴黎</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">北京</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">新加坡</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">約翰尼斯堡</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">聖保羅</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">法蘭克福</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">杜拜</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">香港</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">首爾</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">莫斯科</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">開羅</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">墨爾本</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">奧克蘭</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">墨西哥城</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">布宜諾斯艾利斯</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-zh-tw.js"></script>
