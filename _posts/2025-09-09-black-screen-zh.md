---
layout: page
title: "黑屏：坏点测试、屏幕清洁（更多颜色）"
description: "使用这个全黑屏幕来测试坏点、检查背光泄漏、清洁屏幕、在OLED/AMOLED显示器上节省电量以及减少眼睛疲劳。一个为您的显示器准备的多功能工具。"
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: zh-CN
permalink: /zh/tool/black-screen
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
  <h1>黑屏：坏点测试、屏幕清洁</h1>
  <p>一个将屏幕完全变黑的简单工具。</p>
  <div id="more-info">
    <p>用途广泛：</p>
    <ul>
      <li><b>查找坏点：</b> 黑屏可以轻松发现卡住或熄灭的像素。</li>
      <li><b>清洁屏幕：</b> 在黑色背景上轻松看到灰尘和污迹。</li>
      <li><b>检查背光泄漏：</b> 在黑暗的房间里，黑屏可以帮助您看到屏幕边缘漏出的光。</li>
      <li><b>节省电池（OLED/AMOLED）：</b> 这些屏幕在显示黑色时耗电更少。</li>
      <li><b>减轻眼睛疲劳：</b> 在黑暗中，黑屏对您的眼睛更友好。</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>点击一种颜色以填充屏幕：</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="白屏"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="黑屏"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="红屏"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="黄屏"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="蓝屏"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="绿屏"></div>
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
        console.error(`尝试启用全屏模式时出错：${err.message} (${err.name})`);
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