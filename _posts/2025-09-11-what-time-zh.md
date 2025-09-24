---
layout: page
title: "现在加州、澳大利亚、德州、伦敦（更多城市）的时间是几点"
description: "查询全球主要城市和国家的当前本地时间，包括加州、澳大利亚、德州、伦敦、日本、纽约等。一个简单的时间查询工具。"
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /zh/tool/what-time
lang: zh-CN
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">加州、澳大利亚、德州、伦敦、日本及更多地区或城市的当前时间</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">显示对应时间：</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="确认时间">确认</button>
    <button id="reset-time-btn" class="reset-btn" title="重置为实时时间">重置</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">自动刷新实时时间</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">全球时间</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">美国</button>
    <button class="tab-link" data-country="argentina">阿根廷</button>
    <button class="tab-link" data-country="australia">澳大利亚</button>
    <button class="tab-link" data-country="brazil">巴西</button>
    <button class="tab-link" data-country="canada">加拿大</button>
    <button class="tab-link" data-country="china">中国</button>
    <button class="tab-link" data-country="egypt">埃及</button>
    <button class="tab-link" data-country="fiji">斐济</button>
    <button class="tab-link" data-country="france">法国</button>
    <button class="tab-link" data-country="germany">德国</button>
    <button class="tab-link" data-country="hongkong">香港</button>
    <button class="tab-link" data-country="india">印度</button>
    <button class="tab-link" data-country="italy">意大利</button>
    <button class="tab-link" data-country="japan">日本</button>
    <button class="tab-link" data-country="mexico">墨西哥</button>
    <button class="tab-link" data-country="newzealand">新西兰</button>
    <button class="tab-link" data-country="russia">俄罗斯</button>
    <button class="tab-link" data-country="singapore">新加坡</button>
    <button class="tab-link" data-country="southafrica">南非</button>
    <button class="tab-link" data-country="southkorea">韩国</button>
    <button class="tab-link" data-country="uae">阿联酋</button>
    <button class="tab-link" data-country="uk">英国</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        阿根廷使用单一时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">布宜诺斯艾利斯、科尔多瓦、罗萨里奥</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        澳大利亚分为三个主要时区。部分州和地区实行夏令时（DST）。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">悉尼、墨尔本、堪培拉</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">布里斯班</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">阿德莱德</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">达尔文</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">珀斯</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        巴西有多个时区。该国大部分地区不实行夏令时。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">巴西利亚时间 (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">圣保罗、里约热内卢、巴西利亚</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">亚马逊时间 (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">萨尔瓦多</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        加拿大横跨六个主要时区。大部分地区实行夏令时。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">东部时间 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">多伦多、蒙特利尔、渥太华</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部时间 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">温尼伯</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山区时间 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">卡尔加里</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋时间 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">温哥华</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        尽管地域辽阔，中国官方仍实行单一时区，即中国标准时间（CST）。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">北京、上海、广州、深圳、成都</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        埃及使用单一时区。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">开罗、亚历山大、吉萨</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        斐济有一个主要时区。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">苏瓦、楠迪、劳托卡</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        法国本土使用单一时区，并实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">巴黎、马赛、里昂</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        德国使用单一时区，并实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">柏林、汉堡、慕尼黑、法兰克福、科隆</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        香港有一个标准时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">香港</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        印度有单一时区，即印度标准时间（IST），不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">新德里、孟买、班加罗尔、加尔各答、金奈</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        意大利使用单一时区，并实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">罗马、米兰、威尼斯、那不勒斯、佛罗伦萨</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        日本有一个标准时区，即日本标准时间（JST），不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">东京、大阪、京都、横滨、札幌</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        墨西哥有四个主要时区。该国大部分地区不再实行夏令时。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部时间</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">墨西哥城、瓜达拉哈拉</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">蒙特雷</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋时间</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">蒂华纳</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">东南部时间</h4>
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
        新西兰有一个主要时区，并实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">奥克兰、惠灵顿、基督城</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        俄罗斯是世界上最大的国家，横跨11个时区。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">莫斯科时间</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">莫斯科、圣彼得堡</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">叶卡捷琳堡时间</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">叶卡捷琳堡</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">新西伯利亚时间</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">新西伯利亚</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">符拉迪沃斯托克时间</h4>
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
        新加坡有一个标准时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">新加坡</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        南非有一个标准时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">约翰内斯堡、开普敦、德班、比勒陀利亚</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        韩国有一个标准时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">首尔、釜山、仁川</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        阿拉伯联合酋长国有一个标准时区，不实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">迪拜、阿布扎比、沙迦</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        英国使用单一时区，并实行夏令时。
      </div>
      <div class="single-timezone-notice">该国家使用单一时区。</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">伦敦、曼彻斯特、爱丁堡、伯明翰、格拉斯哥</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        美国官方使用9个标准时区。该国大部分地区实行夏令时。
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">东部时间 (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">纽约、迈阿密、亚特兰大、波士顿</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">中部时间 (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">芝加哥、达拉斯、新奥尔良、休斯顿</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">山区时间 (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">丹佛、盐湖城</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">凤凰城 (亚利桑那州)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">太平洋时间 (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">洛杉矶、旧金山、西雅图、圣地亚哥</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">热门地点</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">加州</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">悉尼</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">德州</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">伦敦</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">东京</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">纽约</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">印度</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">亚利桑那</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">夏威夷</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">多伦多</div>
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
      <div class="city">约翰内斯堡</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">圣保罗</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">法兰克福</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">迪拜</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">香港</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">首尔</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">莫斯科</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">开罗</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">墨尔本</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">奥克兰</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">墨西哥城</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">布宜诺斯艾利斯</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-zh.js"></script>
