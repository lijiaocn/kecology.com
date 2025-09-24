---
layout: page
title:  "Планировщик мирового времени: Напрямую найдите идеальное время для встречи для глобальной команды"
description: "Простой инструмент для поиска идеального времени встречи в разных часовых поясах. Выберите города или часовые пояса и визуализируйте совпадение времени."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: ru
permalink: /ru/tool/world-time-planner
mysetting:
  nowrapper: true
  background-color: '#121212'
---

<link rel="stylesheet" href="/assets/css/world-time-planner.css?v=11">

<div id="world-time-planner-app">

  <div id="wtp-timeline-container" class="wtp-timeline-container">
    <div class="wtp-timeline-header">
      <div class="wtp-date-controls">
        <div id="wtp-date-buttons"></div>
        <input type="date" id="wtp-date-picker">
      </div>
      <div class="wtp-time-nav-controls">
        <button id="wtp-scroll-left-btn" title="Прокрутить влево">&lt;</button>
        <button id="wtp-now-btn" title="Перейти к текущему времени">Сейчас</button>
        <button id="wtp-scroll-right-btn" title="Прокрутить вправо">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">Популярные города</button>
        <button class="wtp-tab-btn" data-tab="country">По стране</button>
        <button class="wtp-tab-btn" data-tab="timezone">По часовому поясу</button>
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
    <h2>Планировщик мирового времени</h2>
    <p class="wtp-features-intro">
      Планируйте встречи в разных часовых поясах без путаницы. Этот инструмент поможет вам найти лучшее время для встреч для глобальных команд и клиентов.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Сначала ваше местное время</h3>
        <p>Ваше местное время автоматически отображается вверху. Не нужно выяснять, который час у вас.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Простое добавление часового пояса</h3>
        <p>Добавьте любой город или часовой пояс одним щелчком мыши. Мгновенно сравнивайте время по всему миру.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Визуальное планирование времени</h3>
        <p>Перетащите, чтобы выбрать временные диапазоны и посмотреть, как они выглядят в разных часовых поясах. Идеально подходит для планирования встреч.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Прямая интеграция с календарем</h3>
        <p>Создавайте события календаря прямо в Google Календаре, Outlook или Yahoo Календаре. Копировать и вставлять не нужно.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Регистрация не требуется</h3>
        <p>Начните планировать немедленно. Никаких учетных записей, никаких загрузок, никакой настройки не требуется.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Работает в автономном режиме</h3>
        <p>После загрузки работает без интернета. Отлично подходит для путешествий или ненадежных соединений.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Идеально для:</h3>
      <ul>
        <li>
          <strong>Удаленные команды в разных странах</strong><br>
          Саре в Нью-Йорке нужно запланировать встречу команды с коллегами в Лондоне, Токио и Сиднее. Она перетаскивает, чтобы выбрать 14-16 часов по своему времени, и сразу видит, что в Лондоне 19-21, в Токио 4-6 утра следующего дня, а в Сиднее 6-8 утра следующего дня.
        </li>
        <li>
          <strong>Встречи с клиентами с международными партнерами</strong><br>
          Маркетинговому агентству в Берлине необходимо провести презентацию для клиента в Сан-Франциско. Они выбирают 15-16 часов по берлинскому времени и видят, что в Сан-Франциско 6-7 утра - слишком рано. Они корректируют время на 17-18 часов по берлинскому времени, чтобы получить более удобный слот в 8-9 утра в Сан-Франциско.
        </li>
        <li>
          <strong>Планирование вебинаров для глобальной аудитории</strong><br>
          Технологическая компания хочет провести вебинар для пользователей по всему миру. Они выбирают 14-15 часов по восточному времени и сразу видят, что это подходит для Европы (19-20 часов) и Азии (3-4 утра следующего дня). Они создают приглашения в календарь для всех часовых поясов одним щелчком мыши.
        </li>
        <li>
          <strong>Планирование личных поездок</strong><br>
          Майк едет из Чикаго в Париж по делам. Ему нужно позвонить своей семье домой во время поездки. Он выбирает 19-20 часов по парижскому времени и видит, что в Чикаго 13-14 часов - идеально для звонка во время обеденного перерыва.
        </li>
        <li>
          <strong>Семейные звонки в разных часовых поясах</strong><br>
          У семьи есть члены в Лос-Анджелесе, Нью-Йорке и Лондоне. Они хотят найти время, которое подходит для всех. Они пробуют разные временные интервалы и обнаруживают, что 10 утра по времени Лос-Анджелеса подходит для 13 часов в Нью-Йорке и 18 часов в Лондоне - все могут присоединиться.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Точная настройка временного диапазона</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Начало</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Загрузка...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Загрузка...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Конец</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Загрузка...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Загрузка...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Продолжительность</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Загрузка...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Добавить в календарь</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Календарь
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Календарь
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

<script src="/assets/js/world-time-planner-ru.js?v=11"></script>
