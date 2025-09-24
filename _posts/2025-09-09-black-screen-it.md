---
layout: page
title: "Schermo Nero: Test Pixel Morti, Pulizia Schermo (Altri Colori)"
description: "Usa questo schermo completamente nero per testare i pixel morti, verificare la retroilluminazione, pulire lo schermo, risparmiare energia sui display OLED/AMOLED e ridurre l'affaticamento degli occhi. Uno strumento versatile per il tuo monitor."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: it
permalink: /it/tool/black-screen
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
  <h1>Schermo Nero: Test Pixel Morti, Pulizia Schermo</h1>
  <p>Un semplice strumento per rendere il tuo schermo completamente nero.</p>
  <div id="more-info">
    <p>Utile per molte cose:</p>
    <ul>
      <li><b>Trova pixel morti:</b> Uno schermo nero rende facile individuare i pixel bloccati o spenti.</li>
      <li><b>Pulisci il tuo schermo:</b> Vedi facilmente polvere e macchie su uno sfondo nero.</li>
      <li><b>Verifica la retroilluminazione:</b> In una stanza buia, uno schermo nero ti aiuta a vedere la luce che fuoriesce dai bordi dello schermo.</li>
      <li><b>Risparmia batteria (OLED/AMOLED):</b> Questi schermi consumano meno energia quando visualizzano il nero.</li>
      <li><b>Riduci l'affaticamento degli occhi:</b> Uno schermo nero è più riposante per i tuoi occhi al buio.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Fai clic su un colore per riempire lo schermo:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Schermo Bianco"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Schermo Nero"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Schermo Rosso"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Schermo Giallo"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Schermo Blu"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Schermo Verde"></div>
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
        console.error(`Errore durante il tentativo di abilitare la modalità a schermo intero: ${err.message} (${err.name})`);
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