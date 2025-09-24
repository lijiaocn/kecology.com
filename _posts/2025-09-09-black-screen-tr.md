---
layout: page
title: "Siyah Ekran: Ölü Piksel Testi, Ekran Temizleme (Daha Fazla Renk)"
description: "Bu tam siyah ekranı ölü pikselleri test etmek, arka ışık sızmasını kontrol etmek, ekranınızı temizlemek, OLED/AMOLED ekranlarda güç tasarrufu yapmak ve göz yorgunluğunu azaltmak için kullanın. Monitörünüz için çok yönlü bir araç."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: tr
permalink: /tr/tool/black-screen
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
  <h1>Siyah Ekran: Ölü Piksel Testi, Ekran Temizleme</h1>
  <p>Ekranınızı tamamen siyaha çevirmek için basit bir araç.</p>
  <div id="more-info">
    <p>Birçok şey için kullanışlıdır:</p>
    <ul>
      <li><b>Ölü pikselleri bulun:</b> Siyah bir ekran, takılı kalmış veya sönmüş pikselleri tespit etmeyi kolaylaştırır.</li>
      <li><b>Ekranınızı temizleyin:</b> Siyah bir arka planda tozu ve lekeleri kolayca görün.</li>
      <li><b>Arka ışık sızmasını kontrol edin:</b> Karanlık bir odada, siyah bir ekran ekranınızın kenarlarından sızan ışığı görmenize yardımcı olur.</li>
      <li><b>Pil tasarrufu yapın (OLED/AMOLED):</b> Bu ekranlar siyah görüntülerken daha az güç kullanır.</li>
      <li><b>Göz yorgunluğunu azaltın:</b> Siyah bir ekran karanlıkta gözleriniz için daha kolaydır.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Ekranı doldurmak için bir renge tıklayın:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Beyaz Ekran"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Siyah Ekran"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Kırmızı Ekran"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Sarı Ekran"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Mavi Ekran"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Yeşil Ekran"></div>
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
        console.error(`Tam ekran modunu etkinleştirme girişimi sırasında hata: ${err.message} (${err.name})`);
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