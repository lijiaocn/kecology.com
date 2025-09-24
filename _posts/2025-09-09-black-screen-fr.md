---
layout: page
title: "Écran Noir : Test de Pixels Morts, Nettoyage d'Écran (Plus de Couleurs)"
description: "Utilisez cet écran entièrement noir pour tester les pixels morts, vérifier les fuites de rétroéclairage, nettoyer votre écran, économiser de l'énergie sur les écrans OLED/AMOLED et réduire la fatigue oculaire. Un outil polyvalent pour votre moniteur."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: fr
permalink: /fr/tool/black-screen
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
  <h1>Écran Noir : Test de Pixels Morts, Nettoyage d'Écran</h1>
  <p>Un outil simple pour rendre votre écran complètement noir.</p>
  <div id="more-info">
    <p>Utile pour de nombreuses choses :</p>
    <ul>
      <li><b>Trouver les pixels morts :</b> Un écran noir facilite la détection des pixels bloqués ou éteints.</li>
      <li><b>Nettoyer votre écran :</b> Voyez facilement la poussière et les taches sur un fond noir.</li>
      <li><b>Vérifier les fuites de rétroéclairage :</b> Dans une pièce sombre, un écran noir vous aide à voir la lumière qui s'échappe des bords de votre écran.</li>
      <li><b>Économiser la batterie (OLED/AMOLED) :</b> Ces écrans consomment moins d'énergie en affichant du noir.</li>
      <li><b>Réduire la fatigue oculaire :</b> Un écran noir est plus reposant pour vos yeux dans l'obscurité.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Cliquez sur une couleur pour remplir l'écran :</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Écran Blanc"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Écran Noir"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Écran Rouge"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Écran Jaune"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Écran Bleu"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Écran Vert"></div>
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
        console.error(`Erreur lors de la tentative d'activation du mode plein écran : ${err.message} (${err.name})`);
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