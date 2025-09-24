---
layout: page
title:  "مخطط التوقيت العالمي: ابحث مباشرة عن وقت الاجتماع المثالي للفريق العالمي"
description: "أداة بسيطة للعثور على وقت الاجتماع المثالي عبر مناطق زمنية مختلفة. حدد المدن أو المناطق الزمنية وتصور تداخل الوقت."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: ar
permalink: /ar/tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app" dir="rtl">

  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="التمرير إلى اليسار">&lt;</button>
        <button id="wtp-now-btn" title="اذهب إلى الوقت الحالي">الآن</button>
        <button id="wtp-scroll-right-btn" title="التمرير إلى اليمين">&gt;</button>
      </div>
    </div>
        <div id="wtp-scroll-container">
          <div id="wtp-rows-wrapper" style="position: relative;">
              <div id="wtp-time-rows"></div>
              <div id="wtp-time-selector" style="display: none;"></div>
          </div>
        </div>
  </div>

  <div class="wtp-selectors-container">
    <div class="wtp-tab-buttons">
      <div class="wtp-tab-btn-container">
        <button class="wtp-tab-btn active" data-tab="popular">المدن الشهيرة</button>
        <button class="wtp-tab-btn" data-tab="country">حسب البلد</button>
        <button class="wtp-tab-btn" data-tab="timezone">حسب المنطقة الزمنية</button>
      </div>
    </div>
    
    <div class="wtp-tab-content">
      <div class="wtp-tab-panel active" id="popular-cities-panel">
        <div id="popular-cities-list" class="wtp-city-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="country-panel">
        <div id="country-list" class="wtp-country-grid"></div>
      </div>
      <div class="wtp-tab-panel" id="timezone-panel">
        <div id="timezone-list" class="wtp-city-grid"></div>
      </div>
    </div>
    
    <div id="city-modal" class="wtp-modal">
      <div class="wtp-modal-content">
        <span class="wtp-modal-close">&times;</span>
        <h3 id="modal-country-name"></h3>
        <div id="modal-country-info" class="wtp-country-info"></div>
        <div id="modal-city-list" class="wtp-city-grid"></div>
      </div>
    </div>
  </div>

  <div class="wtp-features-section">
    <h2>مخطط التوقيت العالمي</h2>
    <p class="wtp-features-intro">
      خطط للاجتماعات عبر المناطق الزمنية دون ارتباك. تساعدك هذه الأداة في العثور على أفضل أوقات الاجتماعات للفرق والعملاء العالميين.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>التوقيت المحلي أولاً</h3>
        <p>شاهد توقيتك المحلي في الأعلى تلقائيًا. لا حاجة لمعرفة الوقت في مكانك.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>إضافة سهلة للمنطقة الزمنية</h3>
        <p>أضف أي مدينة أو منطقة زمنية بنقرة واحدة. قارن الأوقات في جميع أنحاء العالم على الفور.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>تخطيط مرئي للوقت</h3>
        <p>اسحب لتحديد نطاقات زمنية وشاهد كيف تبدو في مناطق زمنية مختلفة. مثالي لجدولة الاجتماعات.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>تكامل مباشر مع التقويم</h3>
        <p>أنشئ أحداث تقويم مباشرة في تقويم Google أو Outlook أو تقويم Yahoo. لا حاجة للنسخ واللصق.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>لا يلزم التسجيل</h3>
        <p>ابدأ التخطيط على الفور. لا حسابات ولا تنزيلات ولا إعداد مطلوب.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>يعمل دون اتصال بالإنترنت</h3>
        <p>بمجرد التحميل ، يعمل بدون إنترنت. رائع للسفر أو الاتصالات غير الموثوقة.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>مثالي لـ:</h3>
      <ul>
        <li>
          <strong>فرق العمل عن بعد في بلدان مختلفة</strong><br>
          تحتاج سارة في نيويورك إلى جدولة اجتماع فريق مع زملاء في لندن وطوكيو وسيدني. تسحب لتحديد 2-4 مساءً بتوقيتها وترى على الفور أنها 7-9 مساءً في لندن ، و 4-6 صباحًا في اليوم التالي في طوكيو ، و 6-8 صباحًا في اليوم التالي في سيدني.
        </li>
        <li>
          <strong>اجتماعات العملاء مع الشركاء الدوليين</strong><br>
          تحتاج وكالة تسويق في برلين إلى تقديم عرض لعميل في سان فرانسيسكو. يختارون 3-4 مساءً بتوقيت برلين ويرون أنها 6-7 صباحًا في سان فرانسيسكو - مبكر جدًا. يقومون بالتعديل إلى 5-6 مساءً بتوقيت برلين للحصول على فترة أفضل من 8-9 صباحًا في سان فرانسيسكو.
        </li>
        <li>
          <strong>جدولة الندوات عبر الإنترنت للجماهير العالمية</strong><br>
          ترغب شركة تقنية في استضافة ندوة عبر الإنترنت للمستخدمين في جميع أنحاء العالم. يختارون 2-3 مساءً بتوقيت شرق الولايات المتحدة ويرون على الفور أنها تعمل في أوروبا (7-8 مساءً) وآسيا (3-4 صباحًا في اليوم التالي). يقومون بإنشاء دعوات تقويم لجميع المناطق الزمنية بنقرة واحدة.
        </li>
        <li>
          <strong>تخطيط السفر الشخصي</strong><br>
          يسافر مايك من شيكاغو إلى باريس للعمل. يحتاج إلى الاتصال بأسرته في الوطن أثناء رحلته. يختار 7-8 مساءً بتوقيت باريس ويرى أنها 1-2 مساءً في شيكاغو - مثالي لمكالمة في استراحة الغداء.
        </li>
        <li>
          <strong>مكالمات عائلية عبر المناطق الزمنية</strong><br>
          لدى عائلة أفراد في لوس أنجلوس ونيويورك ولندن. يريدون إيجاد وقت يناسب الجميع. يجربون فترات زمنية مختلفة ويكتشفون أن الساعة 10 صباحًا بتوقيت لوس أنجلوس تعمل في الساعة 1 مساءً في نيويورك والساعة 6 مساءً في لندن - يمكن للجميع الانضمام.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>ضبط النطاق الزمني</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>بداية</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">جار التحميل...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">جار التحميل...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>نهاية</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">جار التحميل...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">جار التحميل...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>المدة</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">جار التحميل...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">إضافة إلى التقويم</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              تقويم جوجل
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              تقويم ياهو
            </button>
          </div>
        </div>
        <div id="wtp-timezone-times"></div>
      </div>
      <button class="wtp-range-dialog-close">&times;</button>
    </div>
  </div>

</div>

<template id="wtp-timeline-row-template">
  <div class="wtp-timeline-row">
    <div class="wtp-timezone-info">
      <button class="wtp-remove-btn">&times;</button>
      <div class="wtp-city"></div>
      <div class="wtp-current-time"></div>
    </div>
    <div class="wtp-timeline-track">
      <div class="wtp-hover-time-label"></div>
    </div>
  </div>
</template>

<script src="/assets/js/world-time-planner-ar.js?v=11"></script>
