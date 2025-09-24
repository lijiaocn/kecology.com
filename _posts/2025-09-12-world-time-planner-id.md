---
layout: page
title:  "Perencana Waktu Dunia: Langsung Temukan Waktu Rapat Sempurna untuk Tim Global"
description: "Alat sederhana untuk menemukan waktu rapat yang sempurna di berbagai zona waktu. Pilih kota atau zona waktu dan visualisasikan tumpang tindih waktu."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: id
permalink: /id/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="Gulir ke kiri">&lt;</button>
        <button id="wtp-now-btn" title="Pergi ke waktu saat ini">Sekarang</button>
        <button id="wtp-scroll-right-btn" title="Gulir ke kanan">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">Kota Populer</button>
        <button class="wtp-tab-btn" data-tab="country">Berdasarkan Negara</button>
        <button class="wtp-tab-btn" data-tab="timezone">Berdasarkan Zona Waktu</button>
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
    <h2>Perencana Waktu Dunia</h2>
    <p class="wtp-features-intro">
      Rencanakan rapat di berbagai zona waktu tanpa kebingungan. Alat ini membantu Anda menemukan waktu rapat terbaik untuk tim dan klien global.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Waktu Lokal Anda Terlebih Dahulu</h3>
        <p>Lihat waktu lokal Anda di bagian atas secara otomatis. Tidak perlu mencari tahu jam berapa di tempat Anda berada.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Penambahan Zona Waktu yang Mudah</h3>
        <p>Tambahkan kota atau zona waktu apa pun dengan satu klik. Bandingkan waktu di seluruh dunia secara instan.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Perencanaan Waktu Visual</h3>
        <p>Seret untuk memilih rentang waktu dan lihat tampilannya di zona waktu yang berbeda. Sempurna untuk menjadwalkan rapat.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Integrasi Kalender Langsung</h3>
        <p>Buat acara kalender langsung di Google Calendar, Outlook, atau Yahoo Calendar. Tidak perlu salin-tempel.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Tidak Perlu Registrasi</h3>
        <p>Mulai merencanakan segera. Tanpa akun, tanpa unduhan, tanpa perlu penyiapan.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Bekerja Offline</h3>
        <p>Setelah dimuat, berfungsi tanpa internet. Cocok untuk bepergian atau koneksi yang tidak dapat diandalkan.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Sempurna Untuk:</h3>
      <ul>
        <li>
          <strong>Tim jarak jauh di berbagai negara</strong><br>
          Sarah di New York perlu menjadwalkan rapat tim dengan rekan kerja di London, Tokyo, dan Sydney. Dia menyeret untuk memilih pukul 14.00-16.00 waktunya dan langsung melihat pukul 19.00-21.00 di London, 04.00-06.00 keesokan harinya di Tokyo, dan 06.00-08.00 keesokan harinya di Sydney.
        </li>
        <li>
          <strong>Rapat klien dengan mitra internasional</strong><br>
          Sebuah agensi pemasaran di Berlin perlu presentasi kepada klien di San Francisco. Mereka memilih pukul 15.00-16.00 waktu Berlin dan melihat pukul 06.00-07.00 di San Francisco - terlalu pagi. Mereka menyesuaikan ke pukul 17.00-18.00 waktu Berlin untuk slot pukul 08.00-09.00 yang lebih baik di San Francisco.
        </li>
        <li>
          <strong>Penjadwalan webinar untuk audiens global</strong><br>
          Sebuah perusahaan teknologi ingin menyelenggarakan webinar untuk pengguna di seluruh dunia. Mereka memilih pukul 14.00-15.00 EST dan langsung melihat bahwa itu berfungsi untuk Eropa (19.00-20.00) dan Asia (03.00-04.00 keesokan harinya). Mereka membuat undangan kalender untuk semua zona waktu dengan satu klik.
        </li>
        <li>
          <strong>Perencanaan perjalanan pribadi</strong><br>
          Mike bepergian dari Chicago ke Paris untuk urusan bisnis. Dia perlu menelepon keluarganya di rumah selama perjalanannya. Dia memilih pukul 19.00-20.00 waktu Paris dan melihat pukul 13.00-14.00 di Chicago - sempurna untuk panggilan istirahat makan siang.
        </li>
        <li>
          <strong>Panggilan keluarga lintas zona waktu</strong><br>
          Sebuah keluarga memiliki anggota di Los Angeles, New York, dan London. Mereka ingin mencari waktu yang cocok untuk semua orang. Mereka mencoba slot waktu yang berbeda dan menemukan bahwa pukul 10.00 waktu LA cocok untuk pukul 13.00 di New York dan 18.00 di London - semua orang bisa bergabung.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Sempurnakan Rentang Waktu</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Mulai</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Memuat...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Memuat...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Selesai</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Memuat...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Memuat...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Durasi</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Memuat...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Tambahkan ke Kalender</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Calendar
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Calendar
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

<script src="/assets/js/world-time-planner-id.js?v=11"></script>
