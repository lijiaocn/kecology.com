---
layout: page
title: "Pantalla Negra: Prueba de Píxeles Muertos, Limpieza de Pantalla (Más Colores)"
description: "Usa esta pantalla completamente negra para probar píxeles muertos, verificar fugas de luz de fondo, limpiar tu pantalla, ahorrar energía en pantallas OLED/AMOLED y reducir la fatiga visual. Una herramienta versátil para tu monitor."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: es
permalink: /es/tool/black-screen
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
  <h1>Pantalla Negra: Prueba de Píxeles Muertos, Limpieza de Pantalla</h1>
  <p>Una herramienta simple para poner tu pantalla completamente negra.</p>
  <div id="more-info">
    <p>Útil para muchas cosas:</p>
    <ul>
      <li><b>Encontrar píxeles muertos:</b> Una pantalla negra facilita la detección de píxeles atascados o apagados.</li>
      <li><b>Limpiar tu pantalla:</b> Ve el polvo y las manchas fácilmente sobre un fondo negro.</li>
      <li><b>Verificar fugas de luz de fondo:</b> En una habitación oscura, una pantalla negra te ayuda a ver la luz que se escapa por los bordes de tu pantalla.</li>
      <li><b>Ahorrar batería (OLED/AMOLED):</b> Estas pantallas consumen menos energía al mostrar el color negro.</li>
      <li><b>Reducir la fatiga visual:</b> Una pantalla negra es más cómoda para tus ojos en la oscuridad.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Haz clic en un color para llenar la pantalla:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Pantalla Blanca"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Pantalla Negra"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Pantalla Roja"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Pantalla Amarilla"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Pantalla Azul"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Pantalla Verde"></div>
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
        console.error(`Error al intentar habilitar el modo de pantalla completa: ${err.message} (${err.name})`);
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