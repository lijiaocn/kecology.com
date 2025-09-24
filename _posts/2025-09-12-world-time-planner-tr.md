---
layout: page
title:  "Dünya Saati Planlayıcısı: Küresel Ekip İçin Mükemmel Toplantı Zamanını Doğrudan Bulun"
description: "Farklı saat dilimlerinde mükemmel toplantı zamanını bulmak için basit bir araç. Şehirleri veya saat dilimlerini seçin ve zaman çakışmasını görselleştirin."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: tr
permalink: /tr/tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app">

  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="Sola kaydır">&lt;</button>
        <button id="wtp-now-btn" title="Geçerli saate git">Şimdi</button>
        <button id="wtp-scroll-right-btn" title="Sağa kaydır">&gt;</button>
      </div>
    </div>
        <div id="wtp-scroll-container">
          <div id="wtp-rows-wrapper" style="position: relative;">
              <div id="wtp-time-rows"></div>
              <div id="wtp-time-selector" style="display: none;"></div>
          </div>
        </div>
  </div>

  <div class="wtp-selectors-container">
    <div class="wtp-tab-buttons">
      <div class="wtp-tab-btn-container">
        <button class="wtp-tab-btn active" data-tab="popular">Popüler Şehirler</button>
        <button class="wtp-tab-btn" data-tab="country">Ülkeye Göre</button>
        <button class="wtp-tab-btn" data-tab="timezone">Saat Dilimine Göre</button>
      </div>
    </div>
    
    <div class="wtp-tab-content">
      <div class="wtp-tab-panel active" id="popular-cities-panel">
        <div id="popular-cities-list" class="wtp-city-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="country-panel">
        <div id="country-list" class="wtp-country-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="timezone-panel">
        <div id="timezone-list" class="wtp-city-grid"></div>
      </div>
    </div>
    
    <div id="city-modal" class="wtp-modal">
      <div class="wtp-modal-content">
        <span class="wtp-modal-close">&times;</span>
        <h3 id="modal-country-name"></h3>
        <div id="modal-country-info" class="wtp-country-info"></div>
        <div id="modal-city-list" class="wtp-city-grid"></div>
      </div>
    </div>
  </div>

  <div class="wtp-features-section">
    <h2>Dünya Saati Planlayıcısı</h2>
    <p class="wtp-features-intro">
      Karışıklık olmadan saat dilimleri arasında toplantılar planlayın. Bu araç, küresel ekipler ve müşteriler için en iyi toplantı zamanlarını bulmanıza yardımcı olur.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Önce Yerel Saatiniz</h3>
        <p>Yerel saatinizi otomatik olarak en üstte görün. Nerede olduğunuzu anlamanıza gerek yok.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Kolay Saat Dilimi Ekleme</h3>
        <p>Tek bir tıklamayla herhangi bir şehri veya saat dilimini ekleyin. Dünyanın dört bir yanındaki saatleri anında karşılaştırın.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Görsel Zaman Planlaması</h3>
        <p>Zaman aralıklarını seçmek için sürükleyin ve farklı saat dilimlerinde nasıl göründüklerini görün. Toplantıları planlamak için mükemmel.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Doğrudan Takvim Entegrasyonu</h3>
        <p>Doğrudan Google Takvim, Outlook veya Yahoo Takvim'de takvim etkinlikleri oluşturun. Kopyala-yapıştır gerekmez.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Kayıt Gerekmez</h3>
        <p>Hemen planlamaya başlayın. Hesap yok, indirme yok, kurulum gerekmez.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Çevrimdışı Çalışır</h3>
        <p>Yüklendikten sonra internet olmadan çalışır. Seyahat veya güvenilmez bağlantılar için harika.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Şunlar için mükemmel:</h3>
      <ul>
        <li>
          <strong>Farklı ülkelerdeki uzak ekipler</strong><br>
          New York'taki Sarah'nın Londra, Tokyo ve Sidney'deki meslektaşlarıyla bir ekip toplantısı planlaması gerekiyor. Kendi saatine göre 14:00-16:00'yı seçmek için sürükler ve anında Londra'da 19:00-21:00, ertesi gün Tokyo'da 04:00-06:00 ve ertesi gün Sidney'de 06:00-08:00 olduğunu görür.
        </li>
        <li>
          <strong>Uluslararası ortaklarla müşteri toplantıları</strong><br>
          Berlin'deki bir pazarlama ajansının San Francisco'daki bir müşteriye sunum yapması gerekiyor. Berlin saatiyle 15:00-16:00'yı seçiyorlar ve San Francisco'da 06:00-07:00 olduğunu görüyorlar - çok erken. San Francisco'da daha iyi bir 08:00-09:00 aralığı için Berlin saatini 17:00-18:00'e ayarlıyorlar.
        </li>
        <li>
          <strong>Küresel kitleler için web semineri planlaması</strong><br>
          Bir teknoloji şirketi dünya çapındaki kullanıcılar için bir web semineri düzenlemek istiyor. 14:00-15:00 EST'yi seçiyorlar ve anında Avrupa (19:00-20:00) ve Asya (ertesi gün 03:00-04:00) için işe yaradığını görüyorlar. Tek bir tıklamayla tüm saat dilimleri için takvim davetiyeleri oluşturuyorlar.
        </li>
        <li>
          <strong>Kişisel seyahat planlaması</strong><br>
          Mike iş için Chicago'dan Paris'e seyahat ediyor. Seyahati sırasında evdeki ailesini araması gerekiyor. Paris saatiyle 19:00-20:00'yi seçiyor ve Chicago'da 13:00-14:00 olduğunu görüyor - öğle yemeği molası araması için mükemmel.
        </li>
        <li>
          <strong>Saat dilimleri arasında aile görüşmeleri</strong><br>
          Bir ailenin Los Angeles, New York ve Londra'da üyeleri var. Herkes için uygun bir zaman bulmak istiyorlar. Farklı zaman aralıklarını deniyorlar ve Los Angeles saatiyle 10:00'un New York'ta 13:00'e ve Londra'da 18:00'e denk geldiğini keşfediyorlar - herkes katılabilir.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Zaman Aralığını İnce Ayarla</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Başlangıç</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Yükleniyor...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Yükleniyor...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Bitiş</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Yükleniyor...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Yükleniyor...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Süre</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Yükleniyor...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Takvime Ekle</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Takvim
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Takvim
            </button>
          </div>
        </div>
        <div id="wtp-timezone-times"></div>
      </div>
      <button class="wtp-range-dialog-close">&times;</button>
    </div>
  </div>

</div>

<template id="wtp-timeline-row-template">
  <div class="wtp-timeline-row">
    <div class="wtp-timezone-info">
      <button class="wtp-remove-btn">&times;</button>
      <div class="wtp-city"></div>
      <div class="wtp-current-time"></div>
    </div>
    <div class="wtp-timeline-track">
      <div class="wtp-hover-time-label"></div>
    </div>
  </div>
</template>

<script src="/assets/js/world-time-planner-tr.js?v=11"></script>
