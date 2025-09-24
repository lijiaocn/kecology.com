---
layout: page
title: "Màn hình đen: Kiểm tra điểm chết, Vệ sinh màn hình (Nhiều màu hơn)"
description: "Sử dụng màn hình đen hoàn toàn này để kiểm tra các điểm ảnh chết, kiểm tra hở sáng, vệ sinh màn hình, tiết kiệm pin trên màn hình OLED/AMOLED và giảm mỏi mắt. Một công cụ đa năng cho màn hình của bạn."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: vi
permalink: /vi/tool/black-screen
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
  <h1>Màn hình đen: Kiểm tra điểm chết, Vệ sinh màn hình</h1>
  <p>Một công cụ đơn giản để chuyển màn hình của bạn sang màu đen hoàn toàn.</p>
  <div id="more-info">
    <p>Hữu ích cho nhiều việc:</p>
    <ul>
      <li><b>Tìm điểm ảnh chết:</b> Màn hình đen giúp dễ dàng phát hiện các điểm ảnh bị kẹt hoặc tắt.</li>
      <li><b>Vệ sinh màn hình của bạn:</b> Dễ dàng nhìn thấy bụi và vết bẩn trên nền đen.</li>
      <li><b>Kiểm tra hở sáng:</b> Trong phòng tối, màn hình đen giúp bạn nhìn thấy ánh sáng rò rỉ từ các cạnh của màn hình.</li>
      <li><b>Tiết kiệm pin (OLED/AMOLED):</b> Các màn hình này sử dụng ít năng lượng hơn khi hiển thị màu đen.</li>
      <li><b>Giảm mỏi mắt:</b> Màn hình đen dễ chịu hơn cho mắt bạn trong bóng tối.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Nhấp vào một màu để lấp đầy màn hình:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Màn hình trắng"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Màn hình đen"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Màn hình đỏ"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Màn hình vàng"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Màn hình xanh lam"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Màn hình xanh lục"></div>
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
        console.error(`Lỗi khi cố gắng bật chế độ toàn màn hình: ${err.message} (${err.name})`);
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