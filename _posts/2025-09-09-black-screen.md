---
layout: page
title: "Black Screen: Dead Pixel Test, Screen Cleaning (More Colors)"
description: "Use this full black screen to test for dead pixels, check for backlight bleed, clean your screen, save power on OLED/AMOLED displays, and reduce eye strain. A versatile tool for your monitor."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
permalink: /tool/black-screen
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
  <h1>Black Screen: Dead Pixel Test, Screen Cleaning</h1>
  <p>A simple tool to turn your screen completely black.</p>
  <div id="more-info">
    <p>Useful for many things:</p>
    <ul>
      <li><b>Find dead pixels:</b> A black screen makes it easy to spot pixels that are stuck on or off.</li>
      <li><b>Clean your screen:</b> See dust and smudges easily on a black background.</li>
      <li><b>Check for backlight bleed:</b> In a dark room, a black screen helps you see light leaking from the edges of your screen.</li>
      <li><b>Save battery (OLED/AMOLED):</b> These screens use less power when displaying black.</li>
      <li><b>Reduce eye strain:</b> A black screen is easier on your eyes in the dark.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Click a color to fill the screen:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="White Screen"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Black Screen"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Red Screen"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Yellow Screen"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Blue Screen"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Green Screen"></div>
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
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
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
