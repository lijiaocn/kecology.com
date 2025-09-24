---
layout: page
title:  "Planejador de Horário Mundial: Encontre Diretamente o Horário de Reunião Perfeito para Equipes Globais"
description: "Uma ferramenta simples para encontrar o horário de reunião perfeito em diferentes fusos horários. Selecione cidades ou fusos horários e visualize a sobreposição de horários."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: pt
permalink: /pt/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="Rolar para a esquerda">&lt;</button>
        <button id="wtp-now-btn" title="Ir para a hora atual">Agora</button>
        <button id="wtp-scroll-right-btn" title="Rolar para a direita">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">Cidades Populares</button>
        <button class="wtp-tab-btn" data-tab="country">Por País</button>
        <button class="wtp-tab-btn" data-tab="timezone">Por Fuso Horário</button>
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
    <h2>Planejador de Horário Mundial</h2>
    <p class="wtp-features-intro">
      Planeje reuniões em fusos horários diferentes sem confusão. Esta ferramenta ajuda você a encontrar os melhores horários de reunião para equipes e clientes globais.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Seu Horário Local Primeiro</h3>
        <p>Veja seu horário local no topo automaticamente. Não precisa descobrir que horas são onde você está.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Adição Fácil de Fuso Horário</h3>
        <p>Adicione qualquer cidade ou fuso horário com um clique. Compare os horários em todo o mundo instantaneamente.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Planejamento Visual de Horário</h3>
        <p>Arraste para selecionar intervalos de tempo e veja como eles ficam em diferentes fusos horários. Perfeito para agendar reuniões.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Integração Direta com o Calendário</h3>
        <p>Crie eventos de calendário diretamente no Google Calendar, Outlook ou Yahoo Calendar. Não é necessário copiar e colar.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Não é Necessário Registro</h3>
        <p>Comece a planejar imediatamente. Sem contas, sem downloads, sem necessidade de configuração.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Funciona Offline</h3>
        <p>Uma vez carregado, funciona sem internet. Ótimo para viagens ou conexões não confiáveis.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Perfeito Para:</h3>
      <ul>
        <li>
          <strong>Equipes remotas em diferentes países</strong><br>
          Sarah em Nova York precisa agendar uma reunião de equipe com colegas em Londres, Tóquio e Sydney. Ela arrasta para selecionar 14h-16h no seu fuso horário e vê instantaneamente que são 19h-21h em Londres, 4h-6h do dia seguinte em Tóquio e 6h-8h do dia seguinte em Sydney.
        </li>
        <li>
          <strong>Reuniões com clientes e parceiros internacionais</strong><br>
          Uma agência de marketing em Berlim precisa apresentar para um cliente em São Francisco. Eles selecionam 15h-16h, horário de Berlim, e veem que são 6h-7h em São Francisco - muito cedo. Eles ajustam para 17h-18h, horário de Berlim, para um horário melhor de 8h-9h em São Francisco.
        </li>
        <li>
          <strong>Agendamento de webinars para públicos globais</strong><br>
          Uma empresa de tecnologia quer hospedar um webinar para usuários em todo o mundo. Eles selecionam 14h-15h EST e veem imediatamente que funciona para a Europa (19h-20h) e Ásia (3h-4h do dia seguinte). Eles criam convites de calendário para todos os fusos horários com um clique.
        </li>
        <li>
          <strong>Planejamento de viagens pessoais</strong><br>
          Mike está viajando de Chicago para Paris a negócios. Ele precisa ligar para sua família em casa durante a viagem. Ele seleciona 19h-20h, horário de Paris, e vê que são 13h-14h em Chicago - perfeito para uma ligação na hora do almoço.
        </li>
        <li>
          <strong>Chamadas familiares em fusos horários diferentes</strong><br>
          Uma família tem membros em Los Angeles, Nova York e Londres. Eles querem encontrar um horário que funcione para todos. Eles experimentam diferentes horários e descobrem que 10h em LA funciona para 13h em Nova York и 18h em Londres - todos podem participar.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Ajustar Intervalo de Tempo</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Início</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Carregando...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Carregando...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Fim</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Carregando...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Carregando...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Duração</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Carregando...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Adicionar ao Calendário</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Calendar
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Calendar
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

<script src="/assets/js/world-time-planner-pt.js?v=11"></script>
