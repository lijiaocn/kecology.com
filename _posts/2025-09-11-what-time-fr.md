---
layout: page
title: "Quelle heure est-il en Californie, en Australie, au Texas, à Londres (et dans d'autres villes) ?"
description: "Découvrez l'heure locale actuelle en Californie, en Australie, au Texas, à Londres, au Japon, à New York et dans d'autres grandes villes et pays du monde. Un outil simple pour savoir l'heure qu'il est n'importe où."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /fr/tool/what-time
lang: fr
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Quelle heure est-il en Californie, en Australie, au Texas, à Londres, au Japon et dans d'autres régions ou villes</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Afficher l'heure correspondante pour :</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Confirmer l'heure">Confirmer</button>
    <button id="reset-time-btn" class="reset-btn" title="Réinitialiser à l'heure en direct">Réinitialiser</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Actualisation automatique de l'heure en direct</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Heures dans le monde</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">États-Unis</button>
    <button class="tab-link" data-country="argentina">Argentine</button>
    <button class="tab-link" data-country="australia">Australie</button>
    <button class="tab-link" data-country="brazil">Brésil</button>
    <button class="tab-link" data-country="canada">Canada</button>
    <button class="tab-link" data-country="china">Chine</button>
    <button class="tab-link" data-country="egypt">Égypte</button>
    <button class="tab-link" data-country="fiji">Fidji</button>
    <button class="tab-link" data-country="france">France</button>
    <button class="tab-link" data-country="germany">Allemagne</button>
    <button class="tab-link" data-country="hongkong">Hong Kong</button>
    <button class="tab-link" data-country="india">Inde</button>
    <button class="tab-link" data-country="italy">Italie</button>
    <button class="tab-link" data-country="japan">Japon</button>
    <button class="tab-link" data-country="mexico">Mexique</button>
    <button class="tab-link" data-country="newzealand">Nouvelle-Zélande</button>
    <button class="tab-link" data-country="russia">Russie</button>
    <button class="tab-link" data-country="singapore">Singapour</button>
    <button class="tab-link" data-country="southafrica">Afrique du Sud</button>
    <button class="tab-link" data-country="southkorea">Corée du Sud</button>
    <button class="tab-link" data-country="uae">EAU</button>
    <button class="tab-link" data-country="uk">Royaume-Uni</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        L'Argentine utilise un seul fuseau horaire et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Buenos Aires, Córdoba, Rosario</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        L'Australie est divisée en trois fuseaux horaires principaux. L'heure d'été (DST) est observée dans certains États et territoires.
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
          <li class="city-time-item"><span class="city">Adélaïde</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
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
        Le Brésil a plusieurs fuseaux horaires. La majeure partie du pays n'observe pas l'heure d'été.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de Brasília (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">São Paulo, Rio de Janeiro, Brasília</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de l'Amazonie (AMT)</h4>
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
        Le Canada s'étend sur six fuseaux horaires principaux. L'heure d'été est observée dans la plupart des régions.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de l'Est (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Toronto, Montréal, Ottawa</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Centre (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Winnipeg</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure des Rocheuses (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Calgary</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Pacifique (PT)</h4>
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
        Malgré sa vaste superficie géographique, la Chine fonctionne officiellement sur un seul fuseau horaire, l'heure standard de Chine (CST).
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Pékin, Shanghai, Guangzhou, Shenzhen, Chengdu</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        L'Égypte utilise un seul fuseau horaire.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Le Caire, Alexandrie, Gizeh</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        Les Fidji ont un fuseau horaire principal.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Suva, Nadi, Lautoka</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        La France métropolitaine utilise un seul fuseau horaire et observe l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Paris, Marseille, Lyon</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        L'Allemagne utilise un seul fuseau horaire et observe l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Berlin, Hambourg, Munich, Francfort, Cologne</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        Hong Kong a un fuseau horaire standard et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Hong Kong</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        L'Inde a un seul fuseau horaire, l'heure standard de l'Inde (IST), et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">New Delhi, Mumbai, Bangalore, Kolkata, Chennai</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        L'Italie utilise un seul fuseau horaire et observe l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Rome, Milan, Venise, Naples, Florence</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        Le Japon a un fuseau horaire standard, l'heure standard du Japon (JST), et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Tokyo, Osaka, Kyoto, Yokohama, Sapporo</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        Le Mexique a quatre fuseaux horaires principaux. La majeure partie du pays n'observe plus l'heure d'été.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Centre</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Mexico, Guadalajara</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Monterrey</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Pacifique</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Tijuana</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Sud-Est</h4>
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
        La Nouvelle-Zélande a un fuseau horaire principal et observe l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Auckland, Wellington, Christchurch</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        La Russie est le plus grand pays du monde et s'étend sur 11 fuseaux horaires.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de Moscou</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Moscou, Saint-Pétersbourg</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure d'Ekaterinbourg</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ekaterinbourg</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de Novossibirsk</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Novossibirsk</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de Vladivostok</h4>
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
        Singapour a un fuseau horaire standard et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Singapour</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        L'Afrique du Sud a un fuseau horaire standard et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Johannesburg, Le Cap, Durban, Pretoria</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        La Corée du Sud a un fuseau horaire standard et n'observe pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Séoul, Busan, Incheon</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        Les Émirats arabes unis ont un fuseau horaire standard et n'observent pas l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Dubaï, Abu Dhabi, Sharjah</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Le Royaume-Uni utilise un seul fuseau horaire et observe l'heure d'été.
      </div>
      <div class="single-timezone-notice">Ce pays utilise un seul fuseau horaire.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Londres, Manchester, Édimbourg, Birmingham, Glasgow</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        Les États-Unis utilisent officiellement 9 fuseaux horaires standard. La majeure partie du pays observe l'heure d'été.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure de l'Est (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">New York, Miami, Atlanta, Boston</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Centre (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Chicago, Dallas, La Nouvelle-Orléans, Houston</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure des Rocheuses (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Denver, Salt Lake City</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Phoenix (Arizona)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Heure du Pacifique (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Los Angeles, San Francisco, Seattle, San Diego</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Lieux populaires</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Californie</div>
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
      <div class="city">Inde</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Arizona</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Hawaï</div>
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
      <div class="city">Pékin</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Singapour</div>
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
      <div class="city">Francfort</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">Dubaï</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">Hong Kong</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Séoul</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Moscou</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Le Caire</div>
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
      <div class="city">Mexico</div>
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

<script src="/assets/js/what-time-fr.js"></script>
