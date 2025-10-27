---
layout: page
date: "2025-09-09 20:22:14 +0800"
categories: "tool"
permalink: /tool/black-screen
i18n: true
comments: false
mysetting:
  display: fullscreen
  nowrapper: true
  background-color: black
title: "Dead Pixel Test: A Black Color Screen for Monitor Test (More Colors)"
description: "Use this full black screen to test for dead pixels, check for backlight bleed, clean your screen, save power on OLED/AMOLED displays, and reduce eye strain. A versatile tool for your monitor."
---

{% assign i18n_data = site.data.i18n['black-screen'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['black-screen']['en'] %}
{% endif %}

<link rel="stylesheet" href="/assets/css/black-screen.css?v=1">

<div id="content">
  <h1>{{ i18n_data.h1 }}</h1>
  <p>{{ i18n_data.intro_text }}</p>
  <div id="more-info">
    <p>{{ i18n_data.useful_text }}</p>
    <ul>
      <li><b>{{ i18n_data.dead_pixels }}:</b> {{ i18n_data.dead_pixels_desc }}</li>
      <li><b>{{ i18n_data.clean_screen }}:</b> {{ i18n_data.clean_screen_desc }}</li>
      <li><b>{{ i18n_data.backlight_bleed }}:</b> {{ i18n_data.backlight_bleed_desc }}</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>{{ i18n_data.color_palette_text }}</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="{{ i18n_data.white_screen }}"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="{{ i18n_data.black_screen }}"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="{{ i18n_data.red_screen }}"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="{{ i18n_data.yellow_screen }}"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="{{ i18n_data.blue_screen }}"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="{{ i18n_data.green_screen }}"></div>
    </div>
  </div>
</div>

<script src="/assets/js/black-screen.js?v=1"></script>
