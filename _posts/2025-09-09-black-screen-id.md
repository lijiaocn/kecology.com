---
layout: page
title: "Layar Hitam: Tes Piksel Mati, Pembersihan Layar (Warna Lain)"
description: "Gunakan layar hitam penuh ini untuk menguji piksel mati, memeriksa kebocoran lampu latar, membersihkan layar, menghemat daya pada layar OLED/AMOLED, dan mengurangi ketegangan mata. Alat serbaguna untuk monitor Anda."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: id
permalink: /id/tool/black-screen
comments: false
mysetting:
  display: fullscreen
  nowrapper: true
  background-color: black
---

<style>
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #content {
    color: white;
    text-align: center;
    width: 90%;
    max-width: 800px;
    padding: 2rem 0;
  }
  #content h1 {
    font-size: 2.1em;
    margin-bottom: 20px;
  }
  #content p {
    font-size: 1.3em;
  }
  #more-info {
    margin-top: 20px;
    text-align: left;
    display: inline-block;
  }
  #more-info p {
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: bold;
  }
  #more-info ul {
    list-style-position: inside;
    padding-left: 0;
  }
  #more-info li {
    font-size: 1em;
    margin-bottom: 8px;
  }
  #color-palette-container {
    margin-top: 30px;
  }
  #color-palette {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
  }
  .color-swatch {
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 3px solid white;
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
  }
  .color-swatch:hover {
    transform: scale(1.15);
  }
</style>

<div id="content">
  <h1>Layar Hitam: Tes Piksel Mati, Pembersihan Layar</h1>
  <p>Alat sederhana untuk membuat layar Anda menjadi hitam total.</p>
  <div id="more-info">
    <p>Berguna untuk banyak hal:</p>
    <ul>
      <li><b>Menemukan piksel mati:</b> Layar hitam memudahkan untuk menemukan piksel yang macet atau mati.</li>
      <li><b>Membersihkan layar Anda:</b> Lihat debu dan noda dengan mudah di latar belakang hitam.</li>
      <li><b>Memeriksa kebocoran lampu latar:</b> Di ruangan gelap, layar hitam membantu Anda melihat cahaya yang bocor dari tepi layar Anda.</li>
      <li><b>Menghemat baterai (OLED/AMOLED):</b> Layar ini menggunakan lebih sedikit daya saat menampilkan warna hitam.</li>
      <li><b>Mengurangi ketegangan mata:</b> Layar hitam lebih nyaman untuk mata Anda dalam gelap.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Klik warna untuk mengisi layar:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Layar Putih"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Layar Hitam"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Layar Merah"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Layar Kuning"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Layar Biru"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Layar Hijau"></div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const initialBodyBackground = document.body.style.backgroundColor || 'black';

    function enterFullscreen(color) {
      document.body.style.backgroundColor = color;
      content.style.display = 'none';

      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Kesalahan saat mencoba mengaktifkan mode layar penuh: ${err.message} (${err.name})`);
        exitFullscreen();
      });
    }

    function exitFullscreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      content.style.display = 'block';
      document.body.style.backgroundColor = initialBodyBackground;
    }

    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const color = e.target.dataset.color;
        enterFullscreen(color);
      });
    });

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        exitFullscreen();
      }
    });

    // Allow exiting fullscreen with a click/tap on the screen
    document.addEventListener('click', (e) => {
        if (document.fullscreenElement && e.target === document.documentElement) {
            exitFullscreen();
        }
    });
  });
</script>