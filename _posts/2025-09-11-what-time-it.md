---
layout: page
title: "Che ora è in California, Australia, Texas, Londra (e altre città)"
description: "Scopri l'ora locale attuale in California, Australia, Texas, Londra, Giappone, New York e altre principali città e paesi del mondo. Un semplice strumento per controllare che ora è ovunque."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /it/tool/what-time
lang: it
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Che ora è in California, Australia, Texas, Londra, Giappone e altre regioni o città</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Mostra l'ora corrispondente per:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Conferma l'ora">Conferma</button>
    <button id="reset-time-btn" class="reset-btn" title="Ripristina l'ora dal vivo">Ripristina</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Aggiorna automaticamente l'ora dal vivo</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Ore nel mondo</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Stati Uniti</button>
    <button class="tab-link" data-country="argentina">Argentina</button>
    <button class="tab-link" data-country="australia">Australia</button>
    <button class="tab-link" data-country="brazil">Brasile</button>
    <button class="tab-link" data-country="canada">Canada</button>
    <button class="tab-link" data-country="china">Cina</button>
    <button class="tab-link" data-country="egypt">Egitto</button>
    <button class="tab-link" data-country="fiji">Figi</button>
    <button class="tab-link" data-country="france">Francia</button>
    <button class="tab-link" data-country="germany">Germania</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">India</button>
    <button class="tab-link" data-country="italy">Italia</button>
    <button class="tab-link" data-country="japan">Giappone</button>
    <button class="tab-link" data-country="mexico">Messico</button>
    <button class="tab-link" data-country="newzealand">Nuova Zelanda</button>
    <button class="tab-link" data-country="russia">Russia</button>
    <button class="tab-link" data-country="singapore">Singapore</button>
    <button class="tab-link" data-country="southafrica">Sudafrica</button>
    <button class="tab-link" data-country="southkorea">Corea del Sud</button>
    <button class="tab-link" data-country="uae">EAU</button>
    <button class="tab-link" data-country="uk">Regno Unito</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        L'Argentina utilizza un unico fuso orario e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        L'Australia è divisa in tre fusi orari principali. L'ora legale (DST) è osservata in alcuni stati e territori.
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
        Il Brasile ha più fusi orari. La maggior parte del paese non osserva l'ora legale.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di Brasilia (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">San Paolo, Rio de Janeiro, Brasilia</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora dell'Amazzonia (AMT)</h4>
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
        Il Canada si estende su sei fusi orari principali. L'ora legale è osservata nella maggior parte delle aree.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora orientale (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora centrale (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di montagna (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora del Pacifico (PT)</h4>
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
        Nonostante le sue vaste dimensioni geografiche, la Cina opera ufficialmente su un unico fuso orario, l'ora standard cinese (CST).
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Pechino, Shanghai, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        L'Egitto utilizza un unico fuso orario.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Il Cairo, Alessandria, Giza</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Le Figi hanno un fuso orario principale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        La Francia metropolitana utilizza un unico fuso orario e osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Parigi, Marsiglia, Lione</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        La Germania utilizza un unico fuso orario e osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlino, Amburgo, Monaco, Francoforte, Colonia</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong ha un fuso orario standard e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        L'India ha un unico fuso orario, l'ora standard indiana (IST), e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Nuova Delhi, Mumbai, Bangalore, Calcutta, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        L'Italia utilizza un unico fuso orario e osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Roma, Milano, Venezia, Napoli, Firenze</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Il Giappone ha un fuso orario standard, l'ora standard del Giappone (JST), e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokyo, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Il Messico ha quattro fusi orari principali. La maggior parte del paese non osserva più l'ora legale.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora centrale</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Città del Messico, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora del Pacifico</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora del sud-est</h4>
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
        La Nuova Zelanda ha un fuso orario principale e osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        La Russia è il paese più grande del mondo e si estende su 11 fusi orari.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di Mosca</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Mosca, San Pietroburgo</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di Ekaterinburg</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ekaterinburg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di Novosibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di Vladivostok</h4>
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
        Singapore ha un fuso orario standard e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapore</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Il Sudafrica ha un fuso orario standard e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Città del Capo, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        La Corea del Sud ha un fuso orario standard e non osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Gli Emirati Arabi Uniti hanno un fuso orario standard e non osservano l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Il Regno Unito utilizza un unico fuso orario e osserva l'ora legale.
      </div>
      <div class="single-timezone-notice">Questo paese utilizza un unico fuso orario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Londra, Manchester, Edimburgo, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Gli Stati Uniti utilizzano ufficialmente 9 fusi orari standard. La maggior parte del paese osserva l'ora legale.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora orientale (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora centrale (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, New Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora di montagna (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Ora del Pacifico (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Località popolari</h2>
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
      <div class="city">Parigi</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">Pechino</div>
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
      <div class="city">San Paolo</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">Francoforte</div>
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
      <div class="city">Mosca</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Il Cairo</div>
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
      <div class="city">Città del Messico</div>
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

<script src="/assets/js/what-time-it.js"></script>
