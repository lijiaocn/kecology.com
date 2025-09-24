---
layout: page
title: "Kaliforniya, Avustralya, Teksas, Londra'da (ve diğer şehirlerde) saat kaç?"
description: "Kaliforniya, Avustralya, Teksas, Londra, Japonya, New York ve dünyadaki diğer büyük şehir ve ülkelerdeki güncel yerel saati öğrenin. Herhangi bir yerdeki saati kontrol etmek için basit bir araç."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /tr/tool/what-time
lang: tr
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Kaliforniya, Avustralya, Teksas, Londra, Japonya ve diğer bölgeler veya şehirlerde saat kaç</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">İlgili saati göster:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Saati onayla">Onayla</button>
    <button id="reset-time-btn" class="reset-btn" title="Canlı saate sıfırla">Sıfırla</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Canlı Saati Otomatik Yenile</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Dünyadaki Saatler</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Amerika Birleşik Devletleri</button>
    <button class="tab-link" data-country="argentina">Arjantin</button>
    <button class="tab-link" data-country="australia">Avustralya</button>
    <button class="tab-link" data-country="brazil">Brezilya</button>
    <button class="tab-link" data-country="canada">Kanada</button>
    <button class="tab-link" data-country="china">Çin</button>
    <button class="tab-link" data-country="egypt">Mısır</button>
    <button class="tab-link" data-country="fiji">Fiji</button>
    <button class="tab-link" data-country="france">Fransa</button>
    <button class="tab-link" data-country="germany">Almanya</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">Hindistan</button>
    <button class="tab-link" data-country="italy">İtalya</button>
    <button class="tab-link" data-country="japan">Japonya</button>
    <button class="tab-link" data-country="mexico">Meksika</button>
    <button class="tab-link" data-country="newzealand">Yeni Zelanda</button>
    <button class="tab-link" data-country="russia">Rusya</button>
    <button class="tab-link" data-country="singapore">Singapur</button>
    <button class="tab-link" data-country="southafrica">Güney Afrika</button>
    <button class="tab-link" data-country="southkorea">Güney Kore</button>
    <button class="tab-link" data-country="uae">BAE</button>
    <button class="tab-link" data-country="uk">Birleşik Krallık</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Arjantin tek bir saat dilimi kullanır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Avustralya üç ana saat dilimine ayrılmıştır. Yaz Saati Uygulaması (DST) bazı eyalet ve bölgelerde uygulanmaktadır.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Sidney, Melbourne, Canberra</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
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
        Brezilya'da birden fazla saat dilimi vardır. Ülkenin çoğu Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Brasília Saati (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Amazon Saati (AMT)</h4>
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
        Kanada altı ana saat dilimini kapsar. Yaz Saati Uygulaması çoğu bölgede uygulanmaktadır.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Doğu Saati (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Merkez Saati (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Dağ Saati (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pasifik Saati (PT)</h4>
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
        Geniş coğrafi büyüklüğüne rağmen, Çin resmi olarak tek bir saat diliminde, Çin Standart Saati'nde (CST) çalışır.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Pekin, Şangay, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Mısır tek bir saat dilimi kullanır.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Kahire, İskenderiye, Gize</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fiji'nin bir ana saat dilimi vardır.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        Metropolitan Fransa tek bir saat dilimi kullanır ve Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marsilya, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Almanya tek bir saat dilimi kullanır ve Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlin, Hamburg, Münih, Frankfurt, Köln</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong'un bir standart saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        Hindistan'ın tek bir saat dilimi vardır, Hindistan Standart Saati (IST) ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Yeni Delhi, Mumbai, Bangalore, Kalküta, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        İtalya tek bir saat dilimi kullanır ve Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Roma, Milano, Venedik, Napoli, Floransa</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Japonya'nın bir standart saat dilimi vardır, Japonya Standart Saati (JST) ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokyo, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Meksika'nın dört ana saat dilimi vardır. Ülkenin çoğu artık Yaz Saati Uygulaması'nı gözlemlemiyor.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Merkez Saati</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Meksiko, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pasifik Saati</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Güneydoğu Saati</h4>
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
        Yeni Zelanda'nın bir ana saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Rusya dünyanın en büyük ülkesidir ve 11 saat dilimini kapsar.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Moskova Saati</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moskova, St. Petersburg</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Yekaterinburg Saati</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Yekaterinburg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Novosibirsk Saati</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Vladivostok Saati</h4>
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
        Singapur'un bir standart saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapur</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Güney Afrika'nın bir standart saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Cape Town, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        Güney Kore'nin bir standart saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Birleşik Arap Emirlikleri'nin bir standart saat dilimi vardır ve Yaz Saati Uygulaması'nı gözlemlemez.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dabi, Şarja</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Birleşik Krallık tek bir saat dilimi kullanır ve Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="single-timezone-notice">Bu ülke tek bir saat dilimi kullanır.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Londra, Manchester, Edinburgh, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Amerika Birleşik Devletleri resmi olarak 9 standart saat dilimi kullanır. Ülkenin çoğu Yaz Saati Uygulaması'nı gözlemler.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Doğu Saati (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Merkez Saati (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, New Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Dağ Saati (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pasifik Saati (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Popüler Konumlar</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Kaliforniya</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Sidney</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Teksas</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">Londra</div>
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
      <div class="city">Hindistan</div>
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
      <div class="city">Pekin</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Singapur</div>
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
      <div class="city">Seul</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moskova</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Kahire</div>
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
      <div class="city">Meksiko</div>
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

<script src="/assets/js/what-time-tr.js"></script>
