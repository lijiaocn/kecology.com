---
layout: page
title: "Bây giờ là mấy giờ ở California, Úc, Texas, London (và các thành phố khác)"
description: "Tìm hiểu thời gian địa phương hiện tại ở California, Úc, Texas, London, Nhật Bản, New York và các thành phố và quốc gia lớn khác trên khắp thế giới. Một công cụ đơn giản để kiểm tra xem bây giờ là mấy giờ ở bất cứ đâu."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /vi/tool/what-time
lang: vi
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Bây giờ là mấy giờ ở California, Úc, Texas, London, Nhật Bản và các khu vực hoặc thành phố khác</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Hiển thị thời gian tương ứng cho:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Xác nhận thời gian">Xác nhận</button>
    <button id="reset-time-btn" class="reset-btn" title="Đặt lại về thời gian trực tiếp">Đặt lại</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Tự động làm mới thời gian trực tiếp</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Giờ trên khắp thế giới</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Hoa Kỳ</button>
    <button class="tab-link" data-country="argentina">Argentina</button>
    <button class="tab-link" data-country="australia">Úc</button>
    <button class="tab-link" data-country="brazil">Brazil</button>
    <button class="tab-link" data-country="canada">Canada</button>
    <button class="tab-link" data-country="china">Trung Quốc</button>
    <button class="tab-link" data-country="egypt">Ai Cập</button>
    <button class="tab-link" data-country="fiji">Fiji</button>
    <button class="tab-link" data-country="france">Pháp</button>
    <button class="tab-link" data-country="germany">Đức</button>
    <button class="tab-link" data-country="hongkong">Hồng Kông</button>
    <button class="tab-link" data-country="india">Ấn Độ</button>
    <button class="tab-link" data-country="italy">Ý</button>
    <button class="tab-link" data-country="japan">Nhật Bản</button>
    <button class="tab-link" data-country="mexico">Mexico</button>
    <button class="tab-link" data-country="newzealand">New Zealand</button>
    <button class="tab-link" data-country="russia">Nga</button>
    <button class="tab-link" data-country="singapore">Singapore</button>
    <button class="tab-link" data-country="southafrica">Nam Phi</button>
    <button class="tab-link" data-country="southkorea">Hàn Quốc</button>
    <button class="tab-link" data-country="uae">UAE</button>
    <button class="tab-link" data-country="uk">Vương quốc Anh</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Argentina sử dụng một múi giờ duy nhất và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Úc được chia thành ba múi giờ chính. Giờ mùa hè (DST) được áp dụng ở một số tiểu bang và vùng lãnh thổ.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Sydney, Melbourne, Canberra</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Brisbane</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Adelaide</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Darwin</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Perth</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        Brazil có nhiều múi giờ. Hầu hết các vùng của đất nước không áp dụng Giờ mùa hè.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Brasília (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Amazon (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Salvador</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        Canada trải dài qua sáu múi giờ chính. Giờ mùa hè được áp dụng ở hầu hết các khu vực.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền Đông (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền Trung (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền núi (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Thái Bình Dương (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Vancouver</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        Mặc dù có diện tích địa lý rộng lớn, Trung Quốc chính thức hoạt động theo một múi giờ duy nhất, Giờ chuẩn Trung Quốc (CST).
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Bắc Kinh, Thượng Hải, Quảng Châu, Thâm Quyến, Thành Đô</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Ai Cập sử dụng một múi giờ duy nhất.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Cairo, Alexandria, Giza</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fiji có một múi giờ chính.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        Pháp đô thị sử dụng một múi giờ duy nhất và áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marseille, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Đức sử dụng một múi giờ duy nhất và áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlin, Hamburg, Munich, Frankfurt, Cologne</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hồng Kông có một múi giờ chuẩn và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hồng Kông</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        Ấn Độ có một múi giờ duy nhất, Giờ chuẩn Ấn Độ (IST), và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">New Delhi, Mumbai, Bangalore, Kolkata, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        Ý sử dụng một múi giờ duy nhất và áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Rome, Milan, Venice, Naples, Florence</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Nhật Bản có một múi giờ chuẩn, Giờ chuẩn Nhật Bản (JST), và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokyo, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Mexico có bốn múi giờ chính. Hầu hết các vùng của đất nước không còn áp dụng Giờ mùa hè.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền Trung</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Mexico City, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Thái Bình Dương</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Đông Nam</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Cancún</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        New Zealand có một múi giờ chính và áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Nga là quốc gia lớn nhất thế giới và trải dài qua 11 múi giờ.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Moscow</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moscow, Saint Petersburg</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Yekaterinburg</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Yekaterinburg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Novosibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Vladivostok</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Vladivostok</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        Singapore có một múi giờ chuẩn và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapore</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Nam Phi có một múi giờ chuẩn và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Cape Town, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        Hàn Quốc có một múi giờ chuẩn và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seoul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Các Tiểu vương quốc Ả Rập Thống nhất có một múi giờ chuẩn và không áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Vương quốc Anh sử dụng một múi giờ duy nhất và áp dụng Giờ mùa hè.
      </div>
      <div class="single-timezone-notice">Quốc gia này sử dụng một múi giờ duy nhất.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">London, Manchester, Edinburgh, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Hoa Kỳ chính thức sử dụng 9 múi giờ chuẩn. Hầu hết các vùng của đất nước áp dụng Giờ mùa hè.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền Đông (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền Trung (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, New Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ miền núi (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Giờ Thái Bình Dương (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Địa điểm phổ biến</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">California</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Sydney</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Texas</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">London</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">Tokyo</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">New York</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">Ấn Độ</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Arizona</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Hawaii</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">Toronto</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">Paris</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">Bắc Kinh</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Singapore</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">Johannesburg</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">São Paulo</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">Frankfurt</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">Dubai</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">Hồng Kông</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Seoul</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moscow</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Cairo</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Melbourne</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">Auckland</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">Mexico City</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">Buenos Aires</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-vi.js"></script>
