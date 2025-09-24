---
layout: page
title: "黑屏：壞點測試、螢幕清潔（更多顏色）"
description: "使用這個全黑螢幕來測試壞點、檢查背光洩漏、清潔螢幕、在OLED/AMOLED顯示器上節省電量以及減少眼睛疲勞。一個為您的顯示器準備的多功能工具。"
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: zh-TW
permalink: /zh-tw/tool/black-screen
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
  <h1>黑屏：壞點測試、螢幕清潔</h1>
  <p>一個將螢幕完全變黑的簡單工具。</p>
  <div id="more-info">
    <p>用途廣泛：</p>
    <ul>
      <li><b>尋找壞點：</b> 黑屏可以輕鬆發現卡住或熄滅的像素。</li>
      <li><b>清潔螢幕：</b> 在黑色背景上輕鬆看到灰塵和污跡。</li>
      <li><b>檢查背光洩漏：</b> 在黑暗的房間裡，黑屏可以幫助您看到螢幕邊緣漏出的光。</li>
      <li><b>節省電池（OLED/AMOLED）：</b> 這些螢幕在顯示黑色時耗電更少。</li>
      <li><b>減輕眼睛疲勞：</b> 在黑暗中，黑屏對您的眼睛更友善。</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>點擊一種顏色以填滿螢幕：</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="白屏"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="黑屏"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="紅屏"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="黃屏"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="藍屏"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="綠屏"></div>
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
        console.error(`嘗試啟用全螢幕模式時出錯：${err.message} (${err.name})`);
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