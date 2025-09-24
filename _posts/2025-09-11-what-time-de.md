---
layout: page
title: "Wie spät ist es in Kalifornien, Australien, Texas, London (und weiteren Städten)"
description: "Finden Sie die aktuelle Ortszeit in Kalifornien, Australien, Texas, London, Japan, New York und anderen wichtigen Städten und Ländern auf der ganzen Welt heraus. Ein einfaches Werkzeug, um überall die Uhrzeit zu überprüfen."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /de/tool/what-time
lang: de
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Wie spät ist es in Kalifornien, Australien, Texas, London, Japan und weiteren Regionen oder Städten</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Entsprechende Zeit anzeigen für:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Zeit bestätigen">Bestätigen</button>
    <button id="reset-time-btn" class="reset-btn" title="Auf Live-Zeit zurücksetzen">Zurücksetzen</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Live-Zeit automatisch aktualisieren</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Zeiten auf der ganzen Welt</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Vereinigte Staaten</button>
    <button class="tab-link" data-country="argentina">Argentinien</button>
    <button class="tab-link" data-country="australia">Australien</button>
    <button class="tab-link" data-country="brazil">Brasilien</button>
    <button class="tab-link" data-country="canada">Kanada</button>
    <button class="tab-link" data-country="china">China</button>
    <button class="tab-link" data-country="egypt">Ägypten</button>
    <button class="tab-link" data-country="fiji">Fidschi</button>
    <button class="tab-link" data-country="france">Frankreich</button>
    <button class="tab-link" data-country="germany">Deutschland</button>
    <button class="tab-link" data-country="hongkong">Hongkong</button>
    <button class="tab-link" data-country="india">Indien</button>
    <button class="tab-link" data-country="italy">Italien</button>
    <button class="tab-link" data-country="japan">Japan</button>
    <button class="tab-link" data-country="mexico">Mexiko</button>
    <button class="tab-link" data-country="newzealand">Neuseeland</button>
    <button class="tab-link" data-country="russia">Russland</button>
    <button class="tab-link" data-country="singapore">Singapur</button>
    <button class="tab-link" data-country="southafrica">Südafrika</button>
    <button class="tab-link" data-country="southkorea">Südkorea</button>
    <button class="tab-link" data-country="uae">VAE</button>
    <button class="tab-link" data-country="uk">Vereinigtes Königreich</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Argentinien verwendet eine einzige Zeitzone und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Australien ist in drei Hauptzeitzonen unterteilt. In einigen Bundesstaaten und Territorien wird die Sommerzeit (DST) beachtet.
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
        Brasilien hat mehrere Zeitzonen. Der größte Teil des Landes beachtet keine Sommerzeit.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Brasília-Zeit (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Amazonas-Zeit (AMT)</h4>
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
        Kanada erstreckt sich über sechs primäre Zeitzonen. In den meisten Gebieten wird die Sommerzeit beachtet.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ostküstenzeit (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Zentralzeit (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Bergzeit (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pazifische Zeit (PT)</h4>
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
        Trotz seiner enormen geografischen Größe arbeitet China offiziell in einer einzigen Zeitzone, der China Standard Time (CST).
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Peking, Shanghai, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Ägypten verwendet eine einzige Zeitzone.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Kairo, Alexandria, Gizeh</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fidschi hat eine primäre Zeitzone.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        Das französische Mutterland verwendet eine einzige Zeitzone und beachtet die Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marseille, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Deutschland verwendet eine einzige Zeitzone und beachtet die Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlin, Hamburg, München, Frankfurt, Köln</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hongkong hat eine Standardzeitzone und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hongkong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        Indien hat eine einzige Zeitzone, die India Standard Time (IST), und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Neu-Delhi, Mumbai, Bangalore, Kolkata, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        Italien verwendet eine einzige Zeitzone und beachtet die Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Rom, Mailand, Venedig, Neapel, Florenz</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Japan hat eine Standardzeitzone, die Japan Standard Time (JST), und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokio, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Mexiko hat vier primäre Zeitzonen. Der größte Teil des Landes beachtet die Sommerzeit nicht mehr.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Zentralzeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Mexiko-Stadt, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pazifische Zeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Südost-Zeit</h4>
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
        Neuseeland hat eine primäre Zeitzone und beachtet die Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Russland ist das größte Land der Welt und erstreckt sich über 11 Zeitzonen.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Moskauer Zeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moskau, Sankt Petersburg</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Jekaterinburger Zeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Jekaterinburg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Nowosibirsker Zeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Nowosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Wladiwostoker Zeit</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Wladiwostok</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        Singapur hat eine Standardzeitzone und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapur</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Südafrika hat eine Standardzeitzone und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Kapstadt, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        Südkorea hat eine Standardzeitzone und beachtet keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seoul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Die Vereinigten Arabischen Emirate haben eine Standardzeitzone und beachten keine Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Das Vereinigte Königreich verwendet eine einzige Zeitzone und beachtet die Sommerzeit.
      </div>
      <div class="single-timezone-notice">Dieses Land verwendet eine einzige Zeitzone.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">London, Manchester, Edinburgh, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Die Vereinigten Staaten verwenden offiziell 9 Standardzeitzonen. Der größte Teil des Landes beachtet die Sommerzeit.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ostküstenzeit (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Zentralzeit (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, New Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Bergzeit (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Pazifische Zeit (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Beliebte Standorte</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Kalifornien</div>
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
      <div class="city">Tokio</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">New York</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">Indien</div>
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
      <div class="city">Peking</div>
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
      <div class="city">Hongkong</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Seoul</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moskau</div>
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
      <div class="city">Mexiko-Stadt</div>
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

<script src="/assets/js/what-time-de.js"></script>
