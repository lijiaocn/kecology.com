---
layout: page
title: "Que horas são na Califórnia, Austrália, Texas, Londres (e mais cidades)"
description: "Descubra a hora local atual na Califórnia, Austrália, Texas, Londres, Japão, Nova York e outras grandes cidades e países ao redor do mundo. Uma ferramenta simples para verificar que horas são em qualquer lugar."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /pt/tool/what-time
lang: pt
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Que horas são na Califórnia, Austrália, Texas, Londres, Japão e mais regiões ou cidades</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Mostrar hora correspondente para:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Confirmar hora">Confirmar</button>
    <button id="reset-time-btn" class="reset-btn" title="Redefinir para a hora ao vivo">Redefinir</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Atualizar automaticamente a hora ao vivo</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Horas ao redor do mundo</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">Estados Unidos</button>
    <button class="tab-link" data-country="argentina">Argentina</button>
    <button class="tab-link" data-country="australia">Austrália</button>
    <button class="tab-link" data-country="brazil">Brasil</button>
    <button class="tab-link" data-country="canada">Canadá</button>
    <button class="tab-link" data-country="china">China</button>
    <button class="tab-link" data-country="egypt">Egito</button>
    <button class="tab-link" data-country="fiji">Fiji</button>
    <button class="tab-link" data-country="france">França</button>
    <button class="tab-link" data-country="germany">Alemanha</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">Índia</button>
    <button class="tab-link" data-country="italy">Itália</button>
    <button class="tab-link" data-country="japan">Japão</button>
    <button class="tab-link" data-country="mexico">México</button>
    <button class="tab-link" data-country="newzealand">Nova Zelândia</button>
    <button class="tab-link" data-country="russia">Rússia</button>
    <button class="tab-link" data-country="singapore">Cingapura</button>
    <button class="tab-link" data-country="southafrica">África do Sul</button>
    <button class="tab-link" data-country="southkorea">Coreia do Sul</button>
    <button class="tab-link" data-country="uae">EAU</button>
    <button class="tab-link" data-country="uk">Reino Unido</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        A Argentina usa um único fuso horário e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosário</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        A Austrália é dividida em três fusos horários principais. O horário de verão (DST) é observado em alguns estados e territórios.
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
        O Brasil tem vários fusos horários. A maior parte do país não observa o horário de verão.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário de Brasília (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Amazonas (AMT)</h4>
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
        O Canadá abrange seis fusos horários principais. O horário de verão é observado na maioria das áreas.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Leste (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montreal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário Central (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário da Montanha (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Pacífico (PT)</h4>
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
        Apesar de seu vasto tamanho geográfico, a China opera oficialmente em um único fuso horário, o Horário Padrão da China (CST).
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Pequim, Xangai, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        O Egito usa um único fuso horário.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Cairo, Alexandria, Gizé</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Fiji tem um fuso horário principal.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        A França Metropolitana usa um único fuso horário e observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marselha, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        A Alemanha usa um único fuso horário e observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlim, Hamburgo, Munique, Frankfurt, Colônia</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong tem um fuso horário padrão e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        A Índia tem um único fuso horário, o Horário Padrão da Índia (IST), e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Nova Deli, Mumbai, Bangalore, Calcutá, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        A Itália usa um único fuso horário e observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Roma, Milão, Veneza, Nápoles, Florença</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        O Japão tem um fuso horário padrão, o Horário Padrão do Japão (JST), e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tóquio, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        O México tem quatro fusos horários principais. A maior parte do país não observa mais o horário de verão.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário Central</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Cidade do México, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Pacífico</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Sudeste</h4>
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
        A Nova Zelândia tem um fuso horário principal e observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        A Rússia é o maior país do mundo e abrange 11 fusos horários.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário de Moscou</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moscou, São Petersburgo</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário de Ecaterimburgo</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ecaterimburgo</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário de Novosibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novosibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário de Vladivostok</h4>
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
        Cingapura tem um fuso horário padrão e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Cingapura</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        A África do Sul tem um fuso horário padrão e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Joanesburgo, Cidade do Cabo, Durban, Pretória</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        A Coreia do Sul tem um fuso horário padrão e não observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Seul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Os Emirados Árabes Unidos têm um fuso horário padrão e não observam o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubai, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        O Reino Unido usa um único fuso horário e observa o horário de verão.
      </div>
      <div class="single-timezone-notice">Este país usa um único fuso horário.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Londres, Manchester, Edimburgo, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Os Estados Unidos usam oficialmente 9 fusos horários padrão. A maior parte do país observa o horário de verão.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Leste (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Nova York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário Central (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, Nova Orleans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário da Montanha (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Horário do Pacífico (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, São Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Locais populares</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Califórnia</div>
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
      <div class="city">Londres</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">Tóquio</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Nova York</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">Índia</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Arizona</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Havaí</div>
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
      <div class="city">Pequim</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Cingapura</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">Joanesburgo</div>
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
      <div class="city">Moscou</div>
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
      <div class="city">Cidade do México</div>
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

<script src="/assets/js/what-time-pt.js"></script>
