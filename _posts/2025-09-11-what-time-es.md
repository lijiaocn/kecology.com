---
layout: page
title: "¿Qué hora es en California, Australia, Texas, Londres (y más ciudades)?"
description: "Descubre la hora local actual en California, Australia, Texas, Londres, Japón, Nueva York y otras ciudades y países importantes de todo el mundo. Una herramienta sencilla para saber qué hora es en cualquier lugar."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /es/tool/what-time
lang: es
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Qué hora es en California, Australia, Texas, Londres, Japón y más regiones o ciudades</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Mostrar hora correspondiente para:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Confirmar hora">Confirmar</button>
    <button id="reset-time-btn" class="reset-btn" title="Restablecer a la hora en vivo">Restablecer</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Actualizar automáticamente la hora en vivo</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Horas en todo el mundo</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Estados Unidos</button>
    <button class="tab-link" data-country="argentina">Argentina</button>
    <button class="tab-link" data-country="australia">Australia</button>
    <button class="tab-link" data-country="brazil">Brasil</button>
    <button class="tab-link" data-country="canada">Canadá</button>
    <button class="tab-link" data-country="china">China</button>
    <button class="tab-link" data-country="egypt">Egipto</button>
    <button class="tab-link" data-country="fiji">Fiyi</button>
    <button class="tab-link" data-country="france">Francia</button>
    <button class="tab-link" data-country="germany">Alemania</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">India</button>
    <button class="tab-link" data-country="italy">Italia</button>
    <button class="tab-link" data-country="japan">Japón</button>
    <button class="tab-link" data-country="mexico">México</button>
    <button class="tab-link" data-country="newzealand">Nueva Zelanda</button>
    <button class="tab-link" data-country="russia">Rusia</button>
    <button class="tab-link" data-country="singapore">Singapur</button>
    <button class="tab-link" data-country="southafrica">Sudáfrica</button>
    <button class="tab-link" data-country="southkorea">Corea del Sur</button>
    <button class="tab-link" data-country="uae">EAU</button>
    <button class="tab-link" data-country="uk">Reino Unido</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Argentina utiliza un único huso horario y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Australia se divide en tres husos horarios principales. El horario de verano (DST) se observa en algunos estados y territorios.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Sídney, Melbourne, Canberra</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Brisbane</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Adelaida</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
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
        Brasil tiene múltiples husos horarios. La mayor parte del país no observa el horario de verano.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de Brasilia (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Río de Janeiro, Brasilia</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Amazonas (AMT)</h4>
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
        Canadá abarca seis husos horarios principales. El horario de verano se observa en la mayoría de las áreas.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Este (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora Central (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de la Montaña (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Pacífico (PT)</h4>
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
        A pesar de su vasto tamaño geográfico, China opera oficialmente en un único huso horario, la hora estándar de China (CST).
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Pekín, Shanghái, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Egipto utiliza un único huso horario.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">El Cairo, Alejandría, Giza</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fiyi tiene un huso horario principal.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        La Francia metropolitana utiliza un único huso horario y observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">París, Marsella, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Alemania utiliza un único huso horario y observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlín, Hamburgo, Múnich, Fráncfort, Colonia</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong tiene una zona horaria estándar y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        India tiene un único huso horario, la hora estándar de la India (IST), y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Nueva Delhi, Bombay, Bangalore, Calcuta, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        Italia utiliza un único huso horario y observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Roma, Milán, Venecia, Nápoles, Florencia</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Japón tiene una zona horaria estándar, la hora estándar de Japón (JST), y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokio, Osaka, Kioto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        México tiene cuatro husos horarios principales. La mayor parte del país ya no observa el horario de verano.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora Central</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ciudad de México, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Pacífico</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Sureste</h4>
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
        Nueva Zelanda tiene un huso horario principal y observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Rusia es el país más grande del mundo y abarca 11 husos horarios.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de Moscú</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moscú, San Petersburgo</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de Ekaterimburgo</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ekaterimburgo</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de Novosibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de Vladivostok</h4>
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
        Singapur tiene una zona horaria estándar y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapur</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        Sudáfrica tiene una zona horaria estándar y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburgo, Ciudad del Cabo, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        Corea del Sur tiene una zona horaria estándar y no observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seúl, Busán, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Los Emiratos Árabes Unidos tienen una zona horaria estándar y no observan el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubái, Abu Dabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        El Reino Unido utiliza un único huso horario y observa el horario de verano.
      </div>
      <div class="single-timezone-notice">Este país utiliza un único huso horario.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Londres, Mánchester, Edimburgo, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Estados Unidos utiliza oficialmente 9 husos horarios estándar. La mayor parte del país observa el horario de verano.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Este (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Nueva York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora Central (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, Nueva Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora de la Montaña (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Hora del Pacífico (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Ángeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Ubicaciones populares</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">California</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Sídney</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Texas</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">Londres</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">Tokio</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Nueva York</div>
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
      <div class="city">Hawái</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">Toronto</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">París</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">Pekín</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Singapur</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">Johannesburgo</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">São Paulo</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">Fráncfort</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">Dubái</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">Hong Kong</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Seúl</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moscú</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">El Cairo</div>
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
      <div class="city">Ciudad de México</div>
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

<script src="/assets/js/what-time-es.js"></script>
