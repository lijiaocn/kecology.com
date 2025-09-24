---
layout: page
title: "ตอนนี้เวลาเท่าไหร่ในแคลิฟอร์เนีย ออสเตรเลีย เท็กซัส ลอนดอน (และเมืองอื่นๆ)"
description: "ค้นหาเวลาท้องถิ่นปัจจุบันในแคลิฟอร์เนีย ออสเตรเลีย เท็กซัส ลอนดอน ญี่ปุ่น นิวยอร์ก และเมืองและประเทศสำคัญอื่นๆ ทั่วโลก เครื่องมือง่ายๆ ในการตรวจสอบว่าตอนนี้เวลาเท่าไหร่"
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /th/tool/what-time
lang: th
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">ตอนนี้เวลาเท่าไหร่ในแคลิฟอร์เนีย ออสเตรเลีย เท็กซัส ลอนดอน ญี่ปุ่น และภูมิภาคหรือเมืองอื่นๆ</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">แสดงเวลาที่สอดคล้องกันสำหรับ:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="ยืนยันเวลา">ยืนยัน</button>
    <button id="reset-time-btn" class="reset-btn" title="รีเซ็ตเป็นเวลาสด">รีเซ็ต</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">รีเฟรชเวลาสดอัตโนมัติ</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">เวลาทั่วโลก</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">สหรัฐอเมริกา</button>
    <button class="tab-link" data-country="argentina">อาร์เจนตินา</button>
    <button class="tab-link" data-country="australia">ออสเตรเลีย</button>
    <button class="tab-link" data-country="brazil">บราซิล</button>
    <button class="tab-link" data-country="canada">แคนาดา</button>
    <button class="tab-link" data-country="china">จีน</button>
    <button class="tab-link" data-country="egypt">อียิปต์</button>
    <button class="tab-link" data-country="fiji">ฟิจิ</button>
    <button class="tab-link" data-country="france">ฝรั่งเศส</button>
    <button class="tab-link" data-country="germany">เยอรมนี</button>
    <button class="tab-link" data-country="hongkong">ฮ่องกง</button>
    <button class="tab-link" data-country="india">อินเดีย</button>
    <button class="tab-link" data-country="italy">อิตาลี</button>
    <button class="tab-link" data-country="japan">ญี่ปุ่น</button>
    <button class="tab-link" data-country="mexico">เม็กซิโก</button>
    <button class="tab-link" data-country="newzealand">นิวซีแลนด์</button>
    <button class="tab-link" data-country="russia">รัสเซีย</button>
    <button class="tab-link" data-country="singapore">สิงคโปร์</button>
    <button class="tab-link" data-country="southafrica">แอฟริกาใต้</button>
    <button class="tab-link" data-country="southkorea">เกาหลีใต้</button>
    <button class="tab-link" data-country="uae">สหรัฐอาหรับเอมิเรตส์</button>
    <button class="tab-link" data-country="uk">สหราชอาณาจักร</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        อาร์เจนตินาใช้เขตเวลาเดียวและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">บัวโนสไอเรส, กอร์โดบา, โรซาริโอ</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        ออสเตรเลียแบ่งออกเป็นสามเขตเวลาหลัก บางรัฐและดินแดนใช้เวลาออมแสง (DST)
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ซิดนีย์, เมลเบิร์น, แคนเบอร์รา</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">บริสเบน</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">แอดิเลด</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">ดาร์วิน</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">เพิร์ท</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        บราซิลมีหลายเขตเวลา พื้นที่ส่วนใหญ่ของประเทศไม่ใช้เวลาออมแสง
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาบราซิเลีย (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">เซาเปาลู, รีโอเดจาเนโร, บราซิเลีย</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาแอมะซอน (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ซัลวาดอร์</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        แคนาดามีหกเขตเวลาหลัก พื้นที่ส่วนใหญ่ใช้เวลาออมแสง
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาตะวันออก (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">โทรอนโต, มอนทรีออล, ออตตาวา</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลากลาง (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">วินนิเพก</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาภูเขา (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">คาลการี</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาแปซิฟิก (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">แวนคูเวอร์</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        แม้จะมีขนาดทางภูมิศาสตร์ที่กว้างใหญ่ แต่จีนก็ใช้เขตเวลาเดียวอย่างเป็นทางการคือเวลามาตรฐานของจีน (CST)
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ปักกิ่ง, เซี่ยงไฮ้, กวางโจว, เซินเจิ้น, เฉิงตู</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        อียิปต์ใช้เขตเวลาเดียว
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ไคโร, อเล็กซานเดรีย, กิซ่า</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        ฟิจิมีเขตเวลาหลักหนึ่งเขต
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ซูวา, นาดี, เลาโตกา</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        ฝรั่งเศสแผ่นดินใหญ่ใช้เขตเวลาเดียวและใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ปารีส, มาร์แซย์, ลียง</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        เยอรมนีใช้เขตเวลาเดียวและใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">เบอร์ลิน, ฮัมบูร์ก, มิวนิก, แฟรงก์เฟิร์ต, โคโลญ</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        ฮ่องกงมีเขตเวลามาตรฐานหนึ่งเขตและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ฮ่องกง</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        อินเดียมีเขตเวลาเดียวคือเวลามาตรฐานของอินเดีย (IST) และไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">นิวเดลี, มุมไบ, บังกาลอร์, โกลกาตา, เจนไน</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        อิตาลีใช้เขตเวลาเดียวและใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">โรม, มิลาน, เวนิส, เนเปิลส์, ฟลอเรนซ์</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        ญี่ปุ่นมีเขตเวลามาตรฐานหนึ่งเขตคือเวลามาตรฐานของญี่ปุ่น (JST) และไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">โตเกียว, โอซาก้า, เกียวโต, โยโกฮาม่า, ซัปโปโร</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        เม็กซิโกมีสี่เขตเวลาหลัก พื้นที่ส่วนใหญ่ของประเทศไม่ใช้เวลาออมแสงอีกต่อไป
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลากลาง</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">เม็กซิโกซิตี้, กวาดาลาฮารา</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">มอนเตร์เรย์</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาแปซิฟิก</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ติฮัวนา</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาตะวันออกเฉียงใต้</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">แคนคูน</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        นิวซีแลนด์มีเขตเวลาหลักหนึ่งเขตและใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">โอ๊คแลนด์, เวลลิงตัน, ไครสต์เชิร์ช</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        รัสเซียเป็นประเทศที่ใหญ่ที่สุดในโลกและมี 11 เขตเวลา
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลามอสโก</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">มอสโก, เซนต์ปีเตอร์สเบิร์ก</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาเยคาเตรินเบิร์ก</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">เยคาเตรินเบิร์ก</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาโนโวซีบีสค์</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">โนโวซีบีสค์</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาวลาดีวอสตอค</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">วลาดีวอสตอค</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        สิงคโปร์มีเขตเวลามาตรฐานหนึ่งเขตและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">สิงคโปร์</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        แอฟริกาใต้มีเขตเวลามาตรฐานหนึ่งเขตและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">โจฮันเนสเบิร์ก, เคปทาวน์, เดอร์บัน, พริทอเรีย</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        เกาหลีใต้มีเขตเวลามาตรฐานหนึ่งเขตและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">โซล, ปูซาน, อินชอน</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        สหรัฐอาหรับเอมิเรตส์มีเขตเวลามาตรฐานหนึ่งเขตและไม่ใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ดูไบ, อาบูดาบี, ชาร์จาห์</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        สหราชอาณาจักรใช้เขตเวลาเดียวและใช้เวลาออมแสง
      </div>
      <div class="single-timezone-notice">ประเทศนี้ใช้เขตเวลาเดียว</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ลอนดอน, แมนเชสเตอร์, เอดินบะระ, เบอร์มิงแฮม, กลาสโกว์</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        สหรัฐอเมริกาใช้เขตเวลามาตรฐาน 9 เขตอย่างเป็นทางการ พื้นที่ส่วนใหญ่ของประเทศใช้เวลาออมแสง
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาตะวันออก (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">นิวยอร์ก, ไมอามี, แอตแลนตา, บอสตัน</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลากลาง (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ชิคาโก, ดัลลัส, นิวออร์ลีนส์, ฮูสตัน</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาภูเขา (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">เดนเวอร์, ซอลต์เลกซิตี</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">ฟีนิกซ์ (แอริโซนา)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">เวลาแปซิฟิก (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ลอสแอนเจลิส, ซานฟรานซิสโก, ซีแอตเทิล, ซานดิเอโก</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">สถานที่ยอดนิยม</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">แคลิฟอร์เนีย</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">ซิดนีย์</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">เท็กซัส</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">ลอนดอน</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">โตเกียว</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">นิวยอร์ก</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">อินเดีย</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">แอริโซนา</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">ฮาวาย</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">โทรอนโต</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">ปารีส</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">ปักกิ่ง</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">สิงคโปร์</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">โจฮันเนสเบิร์ก</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">เซาเปาลู</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">แฟรงก์เฟิร์ต</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">ดูไบ</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">ฮ่องกง</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">โซล</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">มอสโก</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">ไคโร</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">เมลเบิร์น</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">โอ๊คแลนด์</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">เม็กซิโกซิตี้</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">บัวโนสไอเรส</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-th.js"></script>
