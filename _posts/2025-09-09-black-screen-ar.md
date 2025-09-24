---
layout: page
title: "شاشة سوداء: اختبار البكسل الميت، تنظيف الشاشة (ألوان إضافية)"
description: "استخدم هذه الشاشة السوداء الكاملة لاختبار وحدات البكسل الميتة، والتحقق من تسرب الإضاءة الخلفية، وتنظيف شاشتك، وتوفير الطاقة على شاشات OLED/AMOLED، وتقليل إجهاد العين. أداة متعددة الاستخدامات لشاشتك."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: ar
permalink: /ar/tool/black-screen
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
    text-align: right;
    display: inline-block;
  }
  #more-info p {
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: bold;
  }
  #more-info ul {
    list-style-position: inside;
    padding-right: 0;
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

<div id="content" dir="rtl">
  <h1>شاشة سوداء: اختبار البكسل الميت، تنظيف الشاشة</h1>
  <p>أداة بسيطة لتحويل شاشتك إلى اللون الأسود بالكامل.</p>
  <div id="more-info">
    <p>مفيدة لأشياء كثيرة:</p>
    <ul>
      <li><b>العثور على وحدات البكسل الميتة:</b> تسهل الشاشة السوداء اكتشاف وحدات البكسل العالقة أو المتوقفة.</li>
      <li><b>تنظيف شاشتك:</b> شاهد الغبار والبقع بسهولة على خلفية سوداء.</li>
      <li><b>التحقق من تسرب الإضاءة الخلفية:</b> في غرفة مظلمة، تساعدك الشاشة السوداء على رؤية تسرب الضوء من حواف شاشتك.</li>
      <li><b>توفير البطارية (OLED/AMOLED):</b> تستهلك هذه الشاشات طاقة أقل عند عرض اللون الأسود.</li>
      <li><b>تقليل إجهاد العين:</b> الشاشة السوداء أسهل على عينيك في الظلام.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>انقر فوق لون لملء الشاشة:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="شاشة بيضاء"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="شاشة سوداء"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="شاشة حمراء"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="شاشة صفراء"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="شاشة زرقاء"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="شاشة خضراء"></div>
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
        console.error(`خطأ أثناء محاولة تمكين وضع ملء الشاشة: ${err.message} (${err.name})`);
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