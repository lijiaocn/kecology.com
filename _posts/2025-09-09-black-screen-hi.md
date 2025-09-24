---
layout: page
title: "ब्लैक स्क्रीन: डेड पिक्सल टेस्ट, स्क्रीन क्लीनिंग (अधिक रंग)"
description: "डेड पिक्सल का परीक्षण करने, बैकलाइट ब्लीड की जांच करने, अपनी स्क्रीन को साफ करने, OLED/AMOLED डिस्प्ले पर बिजली बचाने और आंखों के तनाव को कम करने के लिए इस पूरी ब्लैक स्क्रीन का उपयोग करें। आपके मॉनिटर के लिए एक बहुमुखी उपकरण।"
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: hi
permalink: /hi/tool/black-screen
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
  <h1>ब्लैक स्क्रीन: डेड पिक्सल टेस्ट, स्क्रीन क्लीनिंग</h1>
  <p>आपकी स्क्रीन को पूरी तरह से काला करने के लिए एक सरल उपकरण।</p>
  <div id="more-info">
    <p>कई चीजों के लिए उपयोगी:</p>
    <ul>
      <li><b>डेड पिक्सल खोजें:</b> एक काली स्क्रीन उन पिक्सल को स्पॉट करना आसान बनाती है जो चालू या बंद हो गए हैं।</li>
      <li><b>अपनी स्क्रीन साफ करें:</b> काली पृष्ठभूमि पर धूल और धब्बों को आसानी से देखें।</li>
      <li><b>बैकलाइट ब्लीड की जांच करें:</b> एक अंधेरे कमरे में, एक काली स्क्रीन आपको अपनी स्क्रीन के किनारों से रिसने वाली रोशनी को देखने में मदद करती है।</li>
      <li><b>बैटरी बचाएं (OLED/AMOLED):</b> ये स्क्रीन काला प्रदर्शित करते समय कम बिजली का उपयोग करती हैं।</li>
      <li><b>आंखों का तनाव कम करें:</b> एक काली स्क्रीन अंधेरे में आपकी आंखों के लिए आसान होती है।</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>स्क्रीन को भरने के लिए एक रंग पर क्लिक करें:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="सफेद स्क्रीन"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="ब्लैक स्क्रीन"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="लाल स्क्रीन"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="पीली स्क्रीन"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="नीली स्क्रीन"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="हरी स्क्रीन"></div>
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
        console.error(`फ़ुल-स्क्रीन मोड को सक्षम करने का प्रयास करते समय त्रुटि: ${err.message} (${err.name})`);
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