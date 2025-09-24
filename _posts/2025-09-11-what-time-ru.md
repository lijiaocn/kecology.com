---
layout: page
title: "Сколько времени в Калифорнии, Австралии, Техасе, Лондоне (и других городах)"
description: "Узнайте текущее местное время в Калифорнии, Австралии, Техасе, Лондоне, Японии, Нью-Йорке и других крупных городах и странах по всему миру. Простой инструмент для проверки времени в любом месте."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /ru/tool/what-time
lang: ru
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">Сколько времени в Калифорнии, Австралии, Техасе, Лондоне, Японии и других регионах или городах</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">Показать соответствующее время для:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="Подтвердить время">Подтвердить</button>
    <button id="reset-time-btn" class="reset-btn" title="Сбросить на реальное время">Сбросить</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">Автоматически обновлять реальное время</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">Время по всему миру</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">США</button>
    <button class="tab-link" data-country="argentina">Аргентина</button>
    <button class="tab-link" data-country="australia">Австралия</button>
    <button class="tab-link" data-country="brazil">Бразилия</button>
    <button class="tab-link" data-country="canada">Канада</button>
    <button class="tab-link" data-country="china">Китай</button>
    <button class="tab-link" data-country="egypt">Египет</button>
    <button class="tab-link" data-country="fiji">Фиджи</button>
    <button class="tab-link" data-country="france">Франция</button>
    <button class="tab-link" data-country="germany">Германия</button>
    <button class="tab-link" data-country="hongkong">Гонконг</button>
    <button class="tab-link" data-country="india">Индия</button>
    <button class="tab-link" data-country="italy">Италия</button>
    <button class="tab-link" data-country="japan">Япония</button>
    <button class="tab-link" data-country="mexico">Мексика</button>
    <button class="tab-link" data-country="newzealand">Новая Зеландия</button>
    <button class="tab-link" data-country="russia">Россия</button>
    <button class="tab-link" data-country="singapore">Сингапур</button>
    <button class="tab-link" data-country="southafrica">Южная Африка</button>
    <button class="tab-link" data-country="southkorea">Южная Корея</button>
    <button class="tab-link" data-country="uae">ОАЭ</button>
    <button class="tab-link" data-country="uk">Великобритания</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        Аргентина использует один часовой пояс и не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Буэнос-Айрес, Кордова, Росарио</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        Австралия разделена на три основных часовых пояса. Летнее время (DST) соблюдается в некоторых штатах и территориях.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Сидней, Мельбурн, Канберра</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Брисбен</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Аделаида</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Дарвин</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Перт</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        В Бразилии несколько часовых поясов. Большая часть страны не переходит на летнее время.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Бразильское время (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Сан-Паулу, Рио-де-Жанейро, Бразилиа</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Амазонское время (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Сальвадор</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        Канада охватывает шесть основных часовых поясов. Летнее время соблюдается в большинстве регионов.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Восточное время (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Торонто, Монреаль, Оттава</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Центральное время (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Виннипег</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Горное время (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Калгари</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Тихоокеанское время (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Ванкувер</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        Несмотря на свой огромный географический размер, Китай официально работает в одном часовом поясе, китайском стандартном времени (CST).
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Пекин, Шанхай, Гуанчжоу, Шэньчжэнь, Чэнду</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        Египет использует один часовой пояс.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Каир, Александрия, Гиза</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        У Фиджи один основной часовой пояс.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Сува, Нанди, Лаутока</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        Метрополия Франции использует один часовой пояс и переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Париж, Марсель, Лион</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        Германия использует один часовой пояс и переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Берлин, Гамбург, Мюнхен, Франкфурт, Кельн</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        В Гонконге один стандартный часовой пояс, и он не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Гонконг</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        В Индии один часовой пояс, индийское стандартное время (IST), и она не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Нью-Дели, Мумбаи, Бангалор, Калькутта, Ченнаи</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        Италия использует один часовой пояс и переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Рим, Милан, Венеция, Неаполь, Флоренция</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        В Японии один стандартный часовой пояс, японское стандартное время (JST), и она не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Токио, Осака, Киото, Иокогама, Саппоро</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        В Мексике четыре основных часовых пояса. Большая часть страны больше не переходит на летнее время.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Центральное время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Мехико, Гвадалахара</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Монтеррей</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Тихоокеанское время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Тихуана</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Юго-восточное время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Канкун</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        У Новой Зеландии один основной часовой пояс, и она переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Окленд, Веллингтон, Крайстчерч</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        Россия — самая большая страна в мире и охватывает 11 часовых поясов.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Московское время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Москва, Санкт-Петербург</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Екатеринбургское время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Екатеринбург</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Новосибирское время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Новосибирск</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Владивостокское время</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Владивосток</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        В Сингапуре один стандартный часовой пояс, и он не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Сингапур</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        В Южной Африке один стандартный часовой пояс, и она не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Йоханнесбург, Кейптаун, Дурбан, Претория</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        В Южной Корее один стандартный часовой пояс, и она не переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Сеул, Пусан, Инчхон</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        В Объединенных Арабских Эмиратах один стандартный часовой пояс, и они не переходят на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Дубай, Абу-Даби, Шарджа</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        Великобритания использует один часовой пояс и переходит на летнее время.
      </div>
      <div class="single-timezone-notice">Эта страна использует один часовой пояс.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">Лондон, Манчестер, Эдинбург, Бирмингем, Глазго</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        США официально используют 9 стандартных часовых поясов. Большая часть страны переходит на летнее время.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Восточное время (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Нью-Йорк, Майами, Атланта, Бостон</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Центральное время (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Чикаго, Даллас, Новый Орлеан, Хьюстон</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Горное время (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Денвер, Солт-Лейк-Сити</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">Феникс (Аризона)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">Тихоокеанское время (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">Лос-Анджелес, Сан-Франциско, Сиэтл, Сан-Диего</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">Популярные места</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Калифорния</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Сидней</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Техас</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">Лондон</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">Токио</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Нью-Йорк</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">Индия</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Аризона</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">Гавайи</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">Торонто</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">Париж</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">Пекин</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">Сингапур</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">Йоханнесбург</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">Сан-Паулу</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">Франкфурт</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">Дубай</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">Гонконг</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">Сеул</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">Москва</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">Каир</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">Мельбурн</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">Окленд</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">Мехико</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">Буэнос-Айрес</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-ru.js"></script>
