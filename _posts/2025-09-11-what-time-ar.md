---
layout: page
title: "ما هو الوقت في كاليفورنيا وأستراليا وتكساس ولندن (والمزيد من المدن)"
description: "اكتشف التوقيت المحلي الحالي في كاليفورنيا وأستراليا وتكساس ولندن واليابان ونيويورك وغيرها من المدن والبلدان الرئيسية حول العالم. أداة بسيطة للتحقق من الوقت في أي مكان."
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /ar/tool/what-time
lang: ar
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">ما هو الوقت في كاليفورنيا وأستراليا وتكساس ولندن واليابان والمزيد من المناطق أو المدن</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">إظهار الوقت المقابل لـ:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="تأكيد الوقت">تأكيد</button>
    <button id="reset-time-btn" class="reset-btn" title="إعادة التعيين إلى الوقت المباشر">إعادة تعيين</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">تحديث تلقائي للوقت المباشر</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">الأوقات حول العالم</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">الولايات المتحدة</button>
    <button class="tab-link" data-country="argentina">الأرجنتين</button>
    <button class="tab-link" data-country="australia">أستراليا</button>
    <button class="tab-link" data-country="brazil">البرازيل</button>
    <button class="tab-link" data-country="canada">كندا</button>
    <button class="tab-link" data-country="china">الصين</button>
    <button class="tab-link" data-country="egypt">مصر</button>
    <button class="tab-link" data-country="fiji">فيجي</button>
    <button class="tab-link" data-country="france">فرنسا</button>
    <button class="tab-link" data-country="germany">ألمانيا</button>
    <button class="tab-link" data-country="hongkong">هونج كونج</button>
    <button class="tab-link" data-country="india">الهند</button>
    <button class="tab-link" data-country="italy">إيطاليا</button>
    <button class="tab-link" data-country="japan">اليابان</button>
    <button class="tab-link" data-country="mexico">المكسيك</button>
    <button class="tab-link" data-country="newzealand">نيوزيلندا</button>
    <button class="tab-link" data-country="russia">روسيا</button>
    <button class="tab-link" data-country="singapore">سنغافورة</button>
    <button class="tab-link" data-country="southafrica">جنوب أفريقيا</button>
    <button class="tab-link" data-country="southkorea">كوريا الجنوبية</button>
    <button class="tab-link" data-country="uae">الإمارات العربية المتحدة</button>
    <button class="tab-link" data-country="uk">المملكة المتحدة</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        تستخدم الأرجنتين منطقة زمنية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">بوينس آيرس، قرطبة، روزاريو</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        تنقسم أستراليا إلى ثلاث مناطق زمنية رئيسية. يتم الالتزام بالتوقيت الصيفي (DST) في بعض الولايات والأقاليم.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">سيدني، ملبورن، كانبرا</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">بريزبان</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">أديلايد</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">داروين</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">بيرث</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        لدى البرازيل مناطق زمنية متعددة. معظم أنحاء البلاد لا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت برازيليا (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">ساو باولو، ريو دي جانيرو، برازيليا</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت الأمازون (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">سلفادور</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        تمتد كندا عبر ست مناطق زمنية أساسية. يتم الالتزام بالتوقيت الصيفي في معظم المناطق.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الشرقي (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">تورنتو، مونتريال، أوتاوا</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت المركزي (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">وينيبيغ</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الجبلي (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">كالجاري</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الباسيفيكي (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">فانكوفر</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        على الرغم من حجمها الجغرافي الهائل، تعمل الصين رسميًا بمنطقة زمنية واحدة، وهي توقيت الصين الرسمي (CST).
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">بكين، شنغهاي، قوانغتشو، شنتشن، تشنغدو</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        تستخدم مصر منطقة زمنية واحدة.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">القاهرة، الإسكندرية، الجيزة</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        لدى فيجي منطقة زمنية أساسية واحدة.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">سوفا، نادي، لوتوكا</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        تستخدم فرنسا المتروبولية منطقة زمنية واحدة وتلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">باريس، مرسيليا، ليون</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        تستخدم ألمانيا منطقة زمنية واحدة وتلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">برلين، هامبورغ، ميونخ، فرانكفورت، كولونيا</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        لدى هونج كونج منطقة زمنية قياسية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">هونج كونج</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        لدى الهند منطقة زمنية واحدة، وهي توقيت الهند الرسمي (IST)، ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">نيودلهي، مومباي، بنغالور، كولكاتا، تشيناي</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        تستخدم إيطاليا منطقة زمنية واحدة وتلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">روما، ميلانو، البندقية، نابولي، فلورنسا</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        لدى اليابان منطقة زمنية قياسية واحدة، وهي توقيت اليابان الرسمي (JST)، ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">طوكيو، أوساكا، كيوتو، يوكوهاما، سابورو</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        لدى المكسيك أربع مناطق زمنية أساسية. معظم أنحاء البلاد لم تعد تلتزم بالتوقيت الصيفي.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت المركزي</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">مكسيكو سيتي، غوادالاخارا</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">مونتيري</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الباسيفيكي</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">تيخوانا</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الجنوبي الشرقي</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">كانكون</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        لدى نيوزيلندا منطقة زمنية أساسية واحدة وتلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">أوكلاند، ويلينغتون، كرايستشيرش</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        روسيا هي أكبر دولة في العالم وتمتد عبر 11 منطقة زمنية.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت موسكو</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">موسكو، سانت بطرسبرغ</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت يكاترينبورغ</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">يكاترينبورغ</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت نوفوسيبيرسك</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">نوفوسيبيرسك</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">توقيت فلاديفوستوك</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">فلاديفوستوك</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        لدى سنغافورة منطقة زمنية قياسية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">سنغافورة</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        لدى جنوب أفريقيا منطقة زمنية قياسية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">جوهانسبرغ، كيب تاون، ديربان، بريتوريا</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        لدى كوريا الجنوبية منطقة زمنية قياسية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">سيول، بوسان، إنتشون</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        لدى الإمارات العربية المتحدة منطقة زمنية قياسية واحدة ولا تلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">دبي، أبو ظبي، الشارقة</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        تستخدم المملكة المتحدة منطقة زمنية واحدة وتلتزم بالتوقيت الصيفي.
      </div>
      <div class="single-timezone-notice">تستخدم هذه الدولة منطقة زمنية واحدة.</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">لندن، مانشستر، إدنبرة، برمنغهام، غلاسكو</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        تستخدم الولايات المتحدة رسميًا 9 مناطق زمنية قياسية. تلتزم معظم أنحاء البلاد بالتوقيت الصيفي.
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الشرقي (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">نيويورك، ميامي، أتلانتا، بوسطن</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت المركزي (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">شيكاغو، دالاس، نيو أورلينز، هيوستن</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الجبلي (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">دنفر، سولت ليك سيتي</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">فينيكس (أريزونا)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">التوقيت الباسيفيكي (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">لوس أنجلوس، سان فرانسيسكو، سياتل، سان دييغو</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">المواقع الشهيرة</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">كاليفورنيا</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">سيدني</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">تكساس</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">لندن</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">طوكيو</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">نيويورك</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">الهند</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">أريزونا</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">هاواي</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">تورنتو</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">باريس</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">بكين</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">سنغافورة</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">جوهانسبرغ</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">ساو باولو</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">فرانكفورت</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">دبي</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">هونج كونج</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">سيول</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">موسكو</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">القاهرة</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">ملبورن</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">أوكلاند</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">مكسيكو سيتي</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">بوينس آيرس</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-ar.js"></script>
