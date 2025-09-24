---
layout: page
title: "Jam berapa di California, Australia, Texas, London (dan kota-kota lainnya)"
description: "Cari tahu waktu lokal saat ini di California, Australia, Texas, London, Jepang, New York, dan kota-kota besar serta negara-negara lain di seluruh dunia. Alat sederhana untuk memeriksa jam berapa di mana saja."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /id/tool/what-time
lang: id
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Jam berapa di California, Australia, Texas, London, Jepang, dan wilayah atau kota lainnya</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Tampilkan waktu yang sesuai untuk:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Konfirmasi waktu">Konfirmasi</button>
    <button id="reset-time-btn" class="reset-btn" title="Setel ulang ke waktu langsung">Setel ulang</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Segarkan Waktu Langsung Secara Otomatis</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Waktu di Seluruh Dunia</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Amerika Serikat</button>
    <button class="tab-link" data-country="argentina">Argentina</button>
    <button class="tab-link" data-country="australia">Australia</button>
    <button class="tab-link" data-country="brazil">Brasil</button>
    <button class="tab-link" data-country="canada">Kanada</button>
    <button class="tab-link" data-country="china">Cina</button>
    <button class="tab-link" data-country="egypt">Mesir</button>
    <button class="tab-link" data-country="fiji">Fiji</button>
    <button class="tab-link" data-country="france">Prancis</button>
    <button class="tab-link" data-country="germany">Jerman</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">India</button>
    <button class="tab-link" data-country="italy">Italia</button>
    <button class="tab-link" data-country="japan">Jepang</button>
    <button class="tab-link" data-country="mexico">Meksiko</button>
    <button class="tab-link" data-country="newzealand">Selandia Baru</button>
    <button class="tab-link" data-country="russia">Rusia</button>
    <button class="tab-link" data-country="singapore">Singapura</button>
    <button class="tab-link" data-country="southafrica">Afrika Selatan</button>
    <button class="tab-link" data-country="southkorea">Korea Selatan</button>
    <button class="tab-link" data-country="uae">UEA</button>
    <button class="tab-link" data-country="uk">Britania Raya</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Argentina menggunakan satu zona waktu dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Australia dibagi menjadi tiga zona waktu utama. Waktu Musim Panas (DST) diterapkan di beberapa negara bagian dan teritori.
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
        Brasil memiliki beberapa zona waktu. Sebagian besar negara tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Brasilia (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Amazon (AMT)</h4>
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
        Kanada mencakup enam zona waktu utama. Waktu Musim Panas diterapkan di sebagian besar wilayah.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Timur (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Tengah (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Pegunungan (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Pasifik (PT)</h4>
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
        Meskipun ukurannya geografisnya luas, Cina secara resmi beroperasi pada satu zona waktu, Waktu Standar Cina (CST).
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Mesir menggunakan satu zona waktu.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Kairo, Alexandria, Giza</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fiji memiliki satu zona waktu utama.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        Prancis Metropolitan menggunakan satu zona waktu dan menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marseille, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Jerman menggunakan satu zona waktu dan menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlin, Hamburg, Munich, Frankfurt, Cologne</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong memiliki satu zona waktu standar dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        India memiliki satu zona waktu, Waktu Standar India (IST), dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">New Delhi, Mumbai, Bangalore, Kolkata, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        Italia menggunakan satu zona waktu dan menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Roma, Milan, Venesia, Napoli, Florence</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Jepang memiliki satu zona waktu standar, Waktu Standar Jepang (JST), dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokyo, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Meksiko memiliki empat zona waktu utama. Sebagian besar negara tidak lagi menerapkan Waktu Musim Panas.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Tengah</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Mexico City, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Pasifik</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Tenggara</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Cancun</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        Selandia Baru memiliki satu zona waktu utama dan menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Rusia adalah negara terbesar di dunia dan mencakup 11 zona waktu.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Moskow</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moskow, Saint Petersburg</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Yekaterinburg</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Yekaterinburg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Novosibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Vladivostok</h4>
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
        Singapura memiliki satu zona waktu standar dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapura</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Afrika Selatan memiliki satu zona waktu standar dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Cape Town, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        Korea Selatan memiliki satu zona waktu standar dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seoul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Uni Emirat Arab memiliki satu zona waktu standar dan tidak menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Britania Raya menggunakan satu zona waktu dan menerapkan Waktu Musim Panas.
      </div>
      <div class="single-timezone-notice">Negara ini menggunakan satu zona waktu.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">London, Manchester, Edinburgh, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Amerika Serikat secara resmi menggunakan 9 zona waktu standar. Sebagian besar negara menerapkan Waktu Musim Panas.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Timur (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Tengah (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, New Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Pegunungan (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Waktu Pasifik (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Lokasi Populer</h2>
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
      <div class="city">India</div>
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
      <div class="city">Beijing</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Singapura</div>
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
      <div class="city">Hong Kong</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Seoul</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moskow</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Kairo</div>
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

<script src="/assets/js/what-time-id.js"></script>
