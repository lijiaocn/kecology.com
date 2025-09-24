---
layout: page
title: "검은 화면: 데드 픽셀 테스트, 화면 청소 (더 많은 색상)"
description: "이 전체 검은 화면을 사용하여 데드 픽셀을 테스트하고, 백라이트 번짐을 확인하고, 화면을 청소하고, OLED/AMOLED 디스플레이에서 전원을 절약하고, 눈의 피로를 줄이세요. 모니터를 위한 다용도 도구입니다."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: ko
permalink: /ko/tool/black-screen
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
  <h1>검은 화면: 데드 픽셀 테스트, 화면 청소</h1>
  <p>화면을 완전히 검게 만드는 간단한 도구입니다.</p>
  <div id="more-info">
    <p>여러 가지로 유용합니다:</p>
    <ul>
      <li><b>데드 픽셀 찾기:</b> 검은 화면을 사용하면 켜져 있거나 꺼져 있는 픽셀을 쉽게 찾을 수 있습니다.</li>
      <li><b>화면 청소하기:</b> 검은 배경에서 먼지와 얼룩을 쉽게 볼 수 있습니다.</li>
      <li><b>백라이트 번짐 확인:</b> 어두운 방에서 검은 화면은 화면 가장자리에서 새는 빛을 확인하는 데 도움이 됩니다.</li>
      <li><b>배터리 절약 (OLED/AMOLED):</b> 이러한 화면은 검은색을 표시할 때 전력을 덜 사용합니다.</li>
      <li><b>눈의 피로 줄이기:</b> 검은 화면은 어둠 속에서 눈을 편안하게 해줍니다.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>색상을 클릭하여 화면을 채우세요:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="흰색 화면"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="검은 화면"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="빨간 화면"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="노란 화면"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="파란 화면"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="녹색 화면"></div>
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
        console.error(`전체 화면 모드를 활성화하는 동안 오류 발생: ${err.message} (${err.name})`);
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