---
layout: page
title: "黒い画面：ドット抜けテスト、画面クリーニング（その他の色）"
description: "この真っ黒な画面を使用して、ドット抜けのテスト、バックライトの漏れのチェック、画面のクリーニング、OLED/AMOLEDディスプレイの電力節約、目の疲れの軽減を行います。モニター用の多用途ツールです。"
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: ja
permalink: /ja/tool/black-screen
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
  <h1>黒い画面：ドット抜けテスト、画面クリーニング</h1>
  <p>画面を真っ黒にするシンプルなツールです。</p>
  <div id="more-info">
    <p>多くのことに役立ちます：</p>
    <ul>
      <li><b>ドット抜けを見つける：</b> 黒い画面は、点灯または消灯したままのピクセルを見つけやすくします。</li>
      <li><b>画面をきれいにする：</b> 黒い背景でほこりや汚れを簡単に見つけられます。</li>
      <li><b>バックライトの漏れを確認する：</b> 暗い部屋では、黒い画面で画面の端から光が漏れているのを確認できます。</li>
      <li><b>バッテリーを節約する（OLED/AMOLED）：</b> これらの画面は、黒を表示するときに消費電力が少なくなります。</li>
      <li><b>目の疲れを軽減する：</b> 黒い画面は、暗闇で目に優しくなります。</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>色をクリックして画面を塗りつぶします：</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="白い画面"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="黒い画面"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="赤い画面"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="黄色い画面"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="青い画面"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="緑の画面"></div>
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
        console.error(`全画面モードを有効にしようとしてエラーが発生しました：${err.message} (${err.name})`);
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