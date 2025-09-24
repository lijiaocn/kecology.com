---
layout: page
title: "หน้าจอสีดำ: ทดสอบพิกเซลเสีย, ทำความสะอาดหน้าจอ (สีเพิ่มเติม)"
description: "ใช้หน้าจอสีดำล้วนนี้เพื่อทดสอบพิกเซลที่ตายแล้ว ตรวจสอบแสงรั่ว ทำความสะอาดหน้าจอ ประหยัดพลังงานบนจอแสดงผล OLED/AMOLED และลดอาการปวดตา เครื่องมืออเนกประสงค์สำหรับจอภาพของคุณ"
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: th
permalink: /th/tool/black-screen
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
  <h1>หน้าจอสีดำ: ทดสอบพิกเซลเสีย, ทำความสะอาดหน้าจอ</h1>
  <p>เครื่องมือง่ายๆ ที่จะทำให้หน้าจอของคุณเป็นสีดำสนิท</p>
  <div id="more-info">
    <p>มีประโยชน์หลายอย่าง:</p>
    <ul>
      <li><b>ค้นหาพิกเซลที่ตายแล้ว:</b> หน้าจอสีดำทำให้ง่ายต่อการมองเห็นพิกเซลที่ติดอยู่หรือดับไป</li>
      <li><b>ทำความสะอาดหน้าจอของคุณ:</b> มองเห็นฝุ่นและรอยเปื้อนได้ง่ายบนพื้นหลังสีดำ</li>
      <li><b>ตรวจสอบแสงรั่วของแบ็คไลท์:</b> ในห้องมืด หน้าจอสีดำช่วยให้คุณเห็นแสงที่รั่วออกมาจากขอบหน้าจอ</li>
      <li><b>ประหยัดแบตเตอรี่ (OLED/AMOLED):</b> หน้าจอเหล่านี้ใช้พลังงานน้อยลงเมื่อแสดงผลเป็นสีดำ</li>
      <li><b>ลดอาการปวดตา:</b> หน้าจอสีดำสบายตากว่าในที่มืด</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>คลิกสีเพื่อเติมเต็มหน้าจอ:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="หน้าจอสีขาว"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="หน้าจอสีดำ"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="หน้าจอสีแดง"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="หน้าจอสีเหลือง"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="หน้าจอสีน้ำเงิน"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="หน้าจอสีเขียว"></div>
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
        console.error(`เกิดข้อผิดพลาดขณะพยายามเปิดใช้งานโหมดเต็มหน้าจอ: ${err.message} (${err.name})`);
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