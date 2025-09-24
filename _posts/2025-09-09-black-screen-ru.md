---
layout: page
title: "Черный экран: тест на битые пиксели, очистка экрана (больше цветов)"
description: "Используйте этот полностью черный экран для проверки на наличие битых пикселей, проверки засветки, очистки экрана, экономии заряда на OLED/AMOLED-дисплеях и снижения нагрузки на глаза. Универсальный инструмент для вашего монитора."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: ru
permalink: /ru/tool/black-screen
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
  <h1>Черный экран: тест на битые пиксели, очистка экрана</h1>
  <p>Простой инструмент, чтобы сделать ваш экран полностью черным.</p>
  <div id="more-info">
    <p>Полезно для многих вещей:</p>
    <ul>
      <li><b>Найти битые пиксели:</b> Черный экран позволяет легко заметить застрявшие или выключенные пиксели.</li>
      <li><b>Очистить экран:</b> На черном фоне легко увидеть пыль и пятна.</li>
      <li><b>Проверить засветку:</b> В темной комнате черный экран помогает увидеть утечку света по краям экрана.</li>
      <li><b>Экономить батарею (OLED/AMOLED):</b> Эти экраны потребляют меньше энергии при отображении черного цвета.</li>
      <li><b>Снизить нагрузку на глаза:</b> Черный экран более комфортен для глаз в темноте.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Нажмите на цвет, чтобы заполнить экран:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Белый экран"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Черный экран"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Красный экран"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Желтый экран"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Синий экран"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Зеленый экран"></div>
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
        console.error(`Ошибка при попытке включить полноэкранный режим: ${err.message} (${err.name})`);
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