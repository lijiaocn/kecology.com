---
layout: page
title: "Tela Preta: Teste de Pixel Morto, Limpeza de Tela (Mais Cores)"
description: "Use esta tela totalmente preta para testar pixels mortos, verificar vazamento de luz de fundo, limpar sua tela, economizar energia em telas OLED/AMOLED e reduzir o cansaço visual. Uma ferramenta versátil para o seu monitor."
date: "2025-09-09 20:22:14 +0800"
last_modified_at: "2025-09-09 22:00:04 +0800"
categories: "tool"
lang: pt
permalink: /pt/tool/black-screen
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
  <h1>Tela Preta: Teste de Pixel Morto, Limpeza de Tela</h1>
  <p>Uma ferramenta simples para deixar sua tela completamente preta.</p>
  <div id="more-info">
    <p>Útil para muitas coisas:</p>
    <ul>
      <li><b>Encontrar pixels mortos:</b> Uma tela preta facilita a identificação de pixels presos ou desligados.</li>
      <li><b>Limpar sua tela:</b> Veja poeira e manchas facilmente em um fundo preto.</li>
      <li><b>Verificar vazamento de luz de fundo:</b> Em um quarto escuro, uma tela preta ajuda a ver a luz vazando pelas bordas da tela.</li>
      <li><b>Economizar bateria (OLED/AMOLED):</b> Essas telas usam menos energia ao exibir preto.</li>
      <li><b>Reduzir o cansaço visual:</b> Uma tela preta é mais fácil para os olhos no escuro.</li>
    </ul>
  </div>
  <div id="color-palette-container">
    <p>Clique em uma cor para preencher a tela:</p>
    <div id="color-palette">
      <div class="color-swatch" style="background-color: white;" data-color="white" title="Tela Branca"></div>
      <div class="color-swatch" style="background-color: black;" data-color="black" title="Tela Preta"></div>
      <div class="color-swatch" style="background-color: red;" data-color="red" title="Tela Vermelha"></div>
      <div class="color-swatch" style="background-color: yellow;" data-color="yellow" title="Tela Amarela"></div>
      <div class="color-swatch" style="background-color: blue;" data-color="blue" title="Tela Azul"></div>
      <div class="color-swatch" style="background-color: green;" data-color="green" title="Tela Verde"></div>
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
        console.error(`Erro ao tentar ativar o modo de tela cheia: ${err.message} (${err.name})`);
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