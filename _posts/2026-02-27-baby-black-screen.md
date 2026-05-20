---
layout: page
date: "2026-02-27 10:00:00 +0800"
categories: "tool"
permalink: /tool/baby-black-screen
i18n: true
mysetting:
  header: hidden
  nowrapper: true
title: "Baby Black Screen: Fake Shutdown Screen to Reduce Toddler Screen Time"
description: "Baby Black Screen is a simple iOS and Android app that shows a fake shutdown screen so that when toddlers grab your phone and tap everywhere, nothing happens—helping reduce phone obsession, accidental usage, and potential eye strain from too much screen time."
---

{% assign i18n_data = site.data.i18n['baby-black-screen'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['baby-black-screen']['en'] %}
{% endif %}

<link rel="stylesheet" href="/assets/css/baby-black-screen.css?v=2">

<div class="baby-black-screen-page">
  <p class="page-description">{{ page.description }}</p>

  <div class="download-section">
    <h2>{{ i18n_data.section_download_title }}</h2>
    <ul class="download-links">
      <li>
        <a href="https://apps.apple.com/cn/app/%E5%93%84%E5%A8%83%E9%BB%91%E5%B1%8F/id6758646187" rel="noopener" target="_blank">{{ i18n_data.download_ios_label }}</a>
      </li>
      <li>
        <a href="/download/fakeshutdown/fakeshutdown-v1.0.apk" download>{{ i18n_data.download_android_label }}</a>
      </li>
    </ul>
    <p class="download-note">{{ i18n_data.download_note }}</p>
  </div>

  <div class="screenshot-section">
    <div class="screenshot-card">
      <img src="/assets/img/fakeshutdown/screen-en.png"
           alt="{{ i18n_data.screenshot_en_alt }}"
           class="screenshot-image">
      <p class="caption">{{ i18n_data.screenshot_en_caption }}</p>
    </div>
    <div class="screenshot-card">
      <img src="/assets/img/fakeshutdown/screen-zh.png"
           alt="{{ i18n_data.screenshot_zh_alt }}"
           class="screenshot-image">
      <p class="caption">{{ i18n_data.screenshot_zh_caption }}</p>
    </div>
  </div>

  <h2>{{ i18n_data.section_how_it_works_title }}</h2>
  <p>{{ i18n_data.section_how_it_works_p1 }}</p>
  <p>{{ i18n_data.section_how_it_works_p2 }}</p>

  <h2>{{ i18n_data.section_features_title }}</h2>
  <ul>
    <li>{{ i18n_data.feature_fullscreen_fake_shutdown }}</li>
    <li>{{ i18n_data.feature_brightness_control }}</li>
    <li>{{ i18n_data.feature_keep_screen_on }}</li>
    <li>{{ i18n_data.feature_no_ads_simple }}</li>
  </ul>

  <h2>{{ i18n_data.section_support_title }}</h2>
  <p>{{ i18n_data.support_intro }}</p>
  <ul>
    <li>{{ i18n_data.support_how_to_contact }}</li>
    <li>{{ i18n_data.support_bug_report }}</li>
    <li><a href="mailto:lijiaocn@foxmial.com">lijiaocn@foxmial.com</a></li>
  </ul>

  <h2>{{ i18n_data.section_privacy_title }}</h2>
  <p>{{ i18n_data.privacy_policy_content }}</p>


</div>

