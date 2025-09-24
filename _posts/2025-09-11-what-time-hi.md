---
layout: page
title: "कैलिफ़ॉर्निया, ऑस्ट्रेलिया, टेक्सास, लंदन (और अन्य शहर) में क्या समय हुआ है"
description: "कैलिफ़ॉर्निया, ऑस्ट्रेलिया, टेक्सास, लंदन, जापान, न्यूयॉर्क और दुनिया भर के अन्य प्रमुख शहरों और देशों में वर्तमान स्थानीय समय का पता लगाएं। कहीं भी समय की जांच करने के लिए एक सरल उपकरण।"
date: "2025-09-11 15:36:45 +0800"
last_modified_at: "2025-09-11 15:39:54 +0800"
categories: "tool"
permalink: /hi/tool/what-time
lang: hi
mysetting:
  nowrapper: true
  display: fullscreen
---

<link rel="stylesheet" href="/assets/css/what-time.css">
<div class="wide-wrapper">

<div style="width: 100%; text-align: center; padding: 10px 0;">
  <h1 style="font-size: 2.5em; color: #e0e0e0; font-weight: 600;">कैलिफ़ॉर्निया, ऑस्ट्रेलिया, टेक्सास, लंदन, जापान और अन्य क्षेत्रों या शहरों में क्या समय हुआ है</h1>
</div>

<div class="toggle-wrapper">
  <div class="settings-item">
    <label for="time-override-picker" class="settings-label">इसके लिए संबंधित समय दिखाएं:</label>
    <input type="datetime-local" id="time-override-picker" class="time-picker-input">
    <button id="confirm-time-btn" class="confirm-btn" title="समय की पुष्टि करें">पुष्टि करें</button>
    <button id="reset-time-btn" class="reset-btn" title="लाइव समय पर रीसेट करें">रीसेट करें</button>
  </div>
  <div class="settings-item">
    <label for="global-time-toggle" class="settings-label">लाइव समय को स्वतः रीफ्रेश करें</label>
    <label class="toggle-switch">
        <input type="checkbox" id="global-time-toggle" checked>
        <span class="slider"></span>
    </label>
  </div>
</div>

<div class="time-container">

    <h2 class="time-section-title">दुनिया भर का समय</h2>

  

  <div class="tab-nav">
    <button class="tab-link" data-country="usa">संयुक्त राज्य अमेरिका</button>
    <button class="tab-link" data-country="argentina">अर्जेंटीना</button>
    <button class="tab-link" data-country="australia">ऑस्ट्रेलिया</button>
    <button class="tab-link" data-country="brazil">ब्राजील</button>
    <button class="tab-link" data-country="canada">कनाडा</button>
    <button class="tab-link" data-country="china">चीन</button>
    <button class="tab-link" data-country="egypt">मिस्र</button>
    <button class="tab-link" data-country="fiji">फिजी</button>
    <button class="tab-link" data-country="france">फ्रांस</button>
    <button class="tab-link" data-country="germany">जर्मनी</button>
    <button class="tab-link" data-country="hongkong">हाँग काँग</button>
    <button class="tab-link" data-country="india">भारत</button>
    <button class="tab-link" data-country="italy">इटली</button>
    <button class="tab-link" data-country="japan">जापान</button>
    <button class="tab-link" data-country="mexico">मेक्सिको</button>
    <button class="tab-link" data-country="newzealand">न्यूजीलैंड</button>
    <button class="tab-link" data-country="russia">रूस</button>
    <button class="tab-link" data-country="singapore">सिंगापुर</button>
    <button class="tab-link" data-country="southafrica">दक्षिण अफ्रीका</button>
    <button class="tab-link" data-country="southkorea">दक्षिण कोरिया</button>
    <button class="tab-link" data-country="uae">संयुक्त अरब अमीरात</button>
    <button class="tab-link" data-country="uk">यूनाइटेड किंगडम</button>
  </div>

  <!-- Argentina -->
  <div class="tab-content" data-country="argentina">
    <div class="country-section">
      <div class="country-info">
        अर्जेंटीना एक ही समय क्षेत्र का उपयोग करता है और डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ब्यूनस आयर्स, कॉर्डोबा, रोसारियो</span><span class="time" data-timezone="America/Argentina/Buenos_Aires">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Australia -->
  <div class="tab-content" data-country="australia">
    <div class="country-section">
      <div class="country-info">
        ऑस्ट्रेलिया तीन मुख्य समय क्षेत्रों में विभाजित है। कुछ राज्यों और क्षेत्रों में डेलाइट सेविंग टाइम (डीएसटी) का पालन किया जाता है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AEST / AEDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">सिडनी, मेलबर्न, कैनबरा</span><span class="time" data-timezone="Australia/Sydney">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">ब्रिस्बेन</span><span class="time" data-timezone="Australia/Brisbane">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ACST / ACDT</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">एडिलेड</span><span class="time" data-timezone="Australia/Adelaide">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">डार्विन</span><span class="time" data-timezone="Australia/Darwin">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">AWST</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">पर्थ</span><span class="time" data-timezone="Australia/Perth">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Brazil -->
  <div class="tab-content" data-country="brazil">
    <div class="country-section">
      <div class="country-info">
        ब्राजील में कई समय क्षेत्र हैं। देश का अधिकांश भाग डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">ब्रासीलिया समय (BRT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">साओ पाउलो, रियो डी जनेरियो, ब्रासीलिया</span><span class="time" data-timezone="America/Sao_Paulo">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">अमेज़ॅन समय (AMT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">सल्वाडोर</span><span class="time" data-timezone="America/Bahia">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Canada -->
  <div class="tab-content" data-country="canada">
    <div class="country-section">
      <div class="country-info">
        कनाडा छह प्राथमिक समय क्षेत्रों में फैला है। अधिकांश क्षेत्रों में डेलाइट सेविंग टाइम का पालन किया जाता है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">पूर्वी समय (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">टोरंटो, मॉन्ट्रियल, ओटावा</span><span class="time" data-timezone="America/Toronto">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">मध्य समय (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">विन्निपेग</span><span class="time" data-timezone="America/Winnipeg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">पर्वतीय समय (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">कैलगरी</span><span class="time" data-timezone="America/Edmonton">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">प्रशांत समय (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">वैंकूवर</span><span class="time" data-timezone="America/Vancouver">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- China -->
  <div class="tab-content" data-country="china">
    <div class="country-section">
      <div class="country-info">
        अपने विशाल भौगोलिक आकार के बावजूद, चीन आधिकारिक तौर पर एक ही समय क्षेत्र, चीन मानक समय (सीएसटी) पर काम करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">बीजिंग, शंघाई, ग्वांगझू, शेन्ज़ेन, चेंगदू</span><span class="time" data-timezone="Asia/Shanghai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Egypt -->
  <div class="tab-content" data-country="egypt">
    <div class="country-section">
      <div class="country-info">
        मिस्र एक ही समय क्षेत्र का उपयोग करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">काहिरा, अलेक्जेंड्रिया, गीज़ा</span><span class="time" data-timezone="Africa/Cairo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Fiji -->
  <div class="tab-content" data-country="fiji">
    <div class="country-section">
      <div class="country-info">
        फिजी का एक प्राथमिक समय क्षेत्र है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">सुवा, नाडी, लुतोका</span><span class="time" data-timezone="Pacific/Fiji">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- France -->
  <div class="tab-content" data-country="france">
    <div class="country-section">
      <div class="country-info">
        मेट्रोपॉलिटन फ्रांस एक ही समय क्षेत्र का उपयोग करता है और डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">पेरिस, मार्सिले, ल्यों</span><span class="time" data-timezone="Europe/Paris">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Germany -->
  <div class="tab-content" data-country="germany">
    <div class="country-section">
      <div class="country-info">
        जर्मनी एक ही समय क्षेत्र का उपयोग करता है और डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">बर्लिन, हैम्बर्ग, म्यूनिख, फ्रैंकफर्ट, कोलोन</span><span class="time" data-timezone="Europe/Berlin">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Hong Kong -->
  <div class="tab-content" data-country="hongkong">
    <div class="country-section">
      <div class="country-info">
        हाँग काँग का एक मानक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">हाँग काँग</span><span class="time" data-timezone="Asia/Hong_Kong">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- India -->
  <div class="tab-content" data-country="india">
    <div class="country-section">
      <div class="country-info">
        भारत का एक ही समय क्षेत्र है, भारतीय मानक समय (IST), और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">नई दिल्ली, मुंबई, बैंगलोर, कोलकाता, चेन्नई</span><span class="time" data-timezone="Asia/Kolkata">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Italy -->
  <div class="tab-content" data-country="italy">
    <div class="country-section">
      <div class="country-info">
        इटली एक ही समय क्षेत्र का उपयोग करता है और डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">रोम, मिलान, वेनिस, नेपल्स, फ्लोरेंस</span><span class="time" data-timezone="Europe/Rome">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Japan -->
  <div class="tab-content" data-country="japan">
    <div class="country-section">
      <div class="country-info">
        जापान का एक मानक समय क्षेत्र है, जापान मानक समय (JST), और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">टोक्यो, ओसाका, क्योटो, योकोहामा, साप्पोरो</span><span class="time" data-timezone="Asia/Tokyo">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Mexico -->
  <div class="tab-content" data-country="mexico">
    <div class="country-section">
      <div class="country-info">
        मेक्सिको में चार प्राथमिक समय क्षेत्र हैं। देश का अधिकांश भाग अब डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">मध्य समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">मेक्सिको सिटी, ग्वाडलाहारा</span><span class="time" data-timezone="America/Mexico_City">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">मॉन्टेरी</span><span class="time" data-timezone="America/Monterrey">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">प्रशांत समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">तिजुआना</span><span class="time" data-timezone="America/Tijuana">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">दक्षिण-पूर्वी समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">कैनकन</span><span class="time" data-timezone="America/Cancun">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- New Zealand -->
  <div class="tab-content" data-country="newzealand">
    <div class="country-section">
      <div class="country-info">
        न्यूजीलैंड का एक प्राथमिक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">ऑकलैंड, वेलिंगटन, क्राइस्टचर्च</span><span class="time" data-timezone="Pacific/Auckland">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- Russia -->
  <div class="tab-content" data-country="russia">
    <div class="country-section">
      <div class="country-info">
        रूस दुनिया का सबसे बड़ा देश है और 11 समय क्षेत्रों में फैला है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">मास्को समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">मास्को, सेंट पीटर्सबर्ग</span><span class="time" data-timezone="Europe/Moscow">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">येकातेरिनबर्ग समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">येकातेरिनबर्ग</span><span class="time" data-timezone="Asia/Yekaterinburg">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">नोवोसिबिर्स्क समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">नोवोसिबिर्स्क</span><span class="time" data-timezone="Asia/Novosibirsk">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">व्लादिवोस्तोक समय</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">व्लादिवोस्तोक</span><span class="time" data-timezone="Asia/Vladivostok">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Singapore -->
  <div class="tab-content" data-country="singapore">
    <div class="country-section">
      <div class="country-info">
        सिंगापुर का एक मानक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">सिंगापुर</span><span class="time" data-timezone="Asia/Singapore">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Africa -->
  <div class="tab-content" data-country="southafrica">
    <div class="country-section">
      <div class="country-info">
        दक्षिण अफ्रीका का एक मानक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">जोहान्सबर्ग, केप टाउन, डरबन, प्रिटोरिया</span><span class="time" data-timezone="Africa/Johannesburg">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- South Korea -->
  <div class="tab-content" data-country="southkorea">
    <div class="country-section">
      <div class="country-info">
        दक्षिण कोरिया का एक मानक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">सियोल, बुसान, इंचियोन</span><span class="time" data-timezone="Asia/Seoul">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- UAE -->
  <div class="tab-content" data-country="uae">
    <div class="country-section">
      <div class="country-info">
        संयुक्त अरब अमीरात का एक मानक समय क्षेत्र है और यह डेलाइट सेविंग टाइम का पालन नहीं करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">दुबई, अबू धाबी, शारजाह</span><span class="time" data-timezone="Asia/Dubai">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United Kingdom -->
  <div class="tab-content" data-country="uk">
    <div class="country-section">
      <div class="country-info">
        यूनाइटेड किंगडम एक ही समय क्षेत्र का उपयोग करता है और डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="single-timezone-notice">यह देश एक ही समय क्षेत्र का उपयोग करता है।</div>
      <ul class="city-time-list">
        <li class="city-time-item"><span class="city">लंदन, मैनचेस्टर, एडिनबर्ग, बर्मिंघम, ग्लासगो</span><span class="time" data-timezone="Europe/London">--:--:-- --</span></li>
      </ul>
    </div>
  </div>

  <!-- United States -->
  <div class="tab-content" data-country="usa">
    <div class="country-section">
      <div class="country-info">
        संयुक्त राज्य अमेरिका आधिकारिक तौर पर 9 मानक समय क्षेत्रों का उपयोग करता है। देश का अधिकांश भाग डेलाइट सेविंग टाइम का पालन करता है।
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">पूर्वी समय (ET)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">न्यूयॉर्क, मियामी, अटलांटा, बोस्टन</span><span class="time" data-timezone="America/New_York">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">मध्य समय (CT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">शिकागो, डलास, न्यू ऑरलियन्स, ह्यूस्टन</span><span class="time" data-timezone="America/Chicago">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">पर्वतीय समय (MT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">डेनवर, साल्ट लेक सिटी</span><span class="time" data-timezone="America/Denver">--:--:-- --</span></li>
          <li class="city-time-item"><span class="city">फीनिक्स (एरिज़ोना)</span><span class="time" data-timezone="America/Phoenix">--:--:-- --</span></li>
        </ul>
      </div>
      <div class="timezone-group">
        <h4 class="timezone-name">प्रशांत समय (PT)</h4>
        <ul class="city-time-list">
          <li class="city-time-item"><span class="city">लॉस एंजिल्स, सैन फ्रांसिस्को, सिएटल, सैन डिएगो</span><span class="time" data-timezone="America/Los_Angeles">--:--:-- --</span></li>
        </ul>
      </div>
    </div>
  </div>

    <h2 class="time-section-title">लोकप्रिय स्थान</h2>
  <div class="popular-times-grid">
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">कैलिफ़ॉर्निया</div>
      <div class="time" data-timezone="America/Los_Angeles"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">सिडनी</div>
      <div class="time" data-timezone="Australia/Sydney"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">टेक्सास</div>
      <div class="time" data-timezone="America/Chicago"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">UK</span>
      <div class="city">लंदन</div>
      <div class="time" data-timezone="Europe/London"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">JP</span>
      <div class="city">टोक्यो</div>
      <div class="time" data-timezone="Asia/Tokyo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">न्यूयॉर्क</div>
      <div class="time" data-timezone="America/New_York"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">IN</span>
      <div class="city">भारत</div>
      <div class="time" data-timezone="Asia/Kolkata"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">एरिज़ोना</div>
      <div class="time" data-timezone="America/Phoenix"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">US</span>
      <div class="city">हवाई</div>
      <div class="time" data-timezone="Pacific/Honolulu"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CA</span>
      <div class="city">टोरंटो</div>
      <div class="time" data-timezone="America/Toronto"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">FR</span>
      <div class="city">पेरिस</div>
      <div class="time" data-timezone="Europe/Paris"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">CN</span>
      <div class="city">बीजिंग</div>
      <div class="time" data-timezone="Asia/Shanghai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">SG</span>
      <div class="city">सिंगापुर</div>
      <div class="time" data-timezone="Asia/Singapore"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">ZA</span>
      <div class="city">जोहान्सबर्ग</div>
      <div class="time" data-timezone="Africa/Johannesburg"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">BR</span>
      <div class="city">साओ पाउलो</div>
      <div class="time" data-timezone="America/Sao_Paulo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">DE</span>
      <div class="city">फ्रैंकफर्ट</div>
      <div class="time" data-timezone="Europe/Berlin"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AE</span>
      <div class="city">दुबई</div>
      <div class="time" data-timezone="Asia/Dubai"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">HK</span>
      <div class="city">हाँग काँग</div>
      <div class="time" data-timezone="Asia/Hong_Kong"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">KR</span>
      <div class="city">सियोल</div>
      <div class="time" data-timezone="Asia/Seoul"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">RU</span>
      <div class="city">मास्को</div>
      <div class="time" data-timezone="Europe/Moscow"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">EG</span>
      <div class="city">काहिरा</div>
      <div class="time" data-timezone="Africa/Cairo"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AU</span>
      <div class="city">मेलबर्न</div>
      <div class="time" data-timezone="Australia/Melbourne"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">NZ</span>
      <div class="city">ऑकलैंड</div>
      <div class="time" data-timezone="Pacific/Auckland"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">MX</span>
      <div class="city">मेक्सिको सिटी</div>
      <div class="time" data-timezone="America/Mexico_City"></div>
    </div>
    <div class="popular-time-card">
      <span class="country-abbr">AR</span>
      <div class="city">ब्यूनस आयर्स</div>
      <div class="time" data-timezone="America/Argentina/Buenos_Aires"></div>
    </div>
  </div>

</div>
</div>

<script src="/assets/js/what-time-hi.js"></script>
