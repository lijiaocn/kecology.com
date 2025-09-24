---
layout: page
title:  "Weltzeitplaner: Finden Sie direkt die perfekte Besprechungszeit für globale Teams"
description: "Ein einfaches Werkzeug, um die perfekte Besprechungszeit über verschiedene Zeitzonen hinweg zu finden. Wählen Sie Städte oder Zeitzonen aus und visualisieren Sie die Zeitüberschneidung."
date: "2025-09-15 18:08:24 +0800"
last_modified_at: "2025-09-23 15:35:24 +0800"
categories: "tools"
lang: de
permalink: /de/tool/world-time-planner
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
        <button id="wtp-scroll-left-btn" title="Nach links scrollen">&lt;</button>
        <button id="wtp-now-btn" title="Zur aktuellen Zeit gehen">Jetzt</button>
        <button id="wtp-scroll-right-btn" title="Nach rechts scrollen">&gt;</button>
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
        <button class="wtp-tab-btn active" data-tab="popular">Beliebte Städte</button>
        <button class="wtp-tab-btn" data-tab="country">Nach Land</button>
        <button class="wtp-tab-btn" data-tab="timezone">Nach Zeitzone</button>
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
    <h2>Weltzeitplaner</h2>
    <p class="wtp-features-intro">
      Planen Sie Besprechungen über Zeitzonen hinweg ohne Verwirrung. Dieses Tool hilft Ihnen, die besten Besprechungszeiten für globale Teams und Kunden zu finden.
    </p>
    
    <div class="wtp-features-grid">
      <div class="wtp-feature-item">
        <h3>Ihre Ortszeit zuerst</h3>
        <p>Sehen Sie Ihre Ortszeit automatisch ganz oben. Sie müssen nicht herausfinden, wie spät es bei Ihnen ist.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Einfaches Hinzufügen von Zeitzonen</h3>
        <p>Fügen Sie jede Stadt oder Zeitzone mit einem Klick hinzu. Vergleichen Sie die Zeiten auf der ganzen Welt sofort.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Visuelle Zeitplanung</h3>
        <p>Ziehen Sie, um Zeitbereiche auszuwählen und zu sehen, wie sie in verschiedenen Zeitzonen aussehen. Perfekt für die Planung von Besprechungen.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Direkte Kalenderintegration</h3>
        <p>Erstellen Sie Kalenderereignisse direkt in Google Kalender, Outlook oder Yahoo Kalender. Kein Kopieren und Einfügen erforderlich.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Keine Registrierung erforderlich</h3>
        <p>Beginnen Sie sofort mit der Planung. Keine Konten, keine Downloads, keine Einrichtung erforderlich.</p>
      </div>
      
      <div class="wtp-feature-item">
        <h3>Funktioniert offline</h3>
        <p>Einmal geladen, funktioniert es ohne Internet. Ideal für Reisen oder unzuverlässige Verbindungen.</p>
      </div>
    </div>
    
    <div class="wtp-use-cases">
      <h3>Perfekt für:</h3>
      <ul>
        <li>
          <strong>Remote-Teams in verschiedenen Ländern</strong><br>
          Sarah in New York muss ein Teammeeting mit Kollegen in London, Tokio und Sydney planen. Sie zieht, um 14-16 Uhr ihrer Zeit auszuwählen und sieht sofort, dass es 19-21 Uhr in London, 4-6 Uhr am nächsten Tag in Tokio und 6-8 Uhr am nächsten Tag in Sydney ist.
        </li>
        <li>
          <strong>Kundenmeetings mit internationalen Partnern</strong><br>
          Eine Marketingagentur in Berlin muss einem Kunden in San Francisco eine Präsentation halten. Sie wählen 15-16 Uhr Berliner Zeit und sehen, dass es 6-7 Uhr in San Francisco ist - zu früh. Sie passen auf 17-18 Uhr Berliner Zeit an, um einen besseren Slot von 8-9 Uhr in San Francisco zu erhalten.
        </li>
        <li>
          <strong>Webinar-Planung für ein globales Publikum</strong><br>
          Ein Technologieunternehmen möchte ein Webinar für Benutzer weltweit veranstalten. Sie wählen 14-15 Uhr EST und sehen sofort, dass es für Europa (19-20 Uhr) und Asien (3-4 Uhr am nächsten Tag) funktioniert. Sie erstellen mit einem Klick Kalendereinladungen für alle Zeitzonen.
        </li>
        <li>
          <strong>Persönliche Reiseplanung</strong><br>
          Mike reist geschäftlich von Chicago nach Paris. Er muss während seiner Reise seine Familie zu Hause anrufen. Er wählt 19-20 Uhr Pariser Zeit und sieht, dass es 13-14 Uhr in Chicago ist - perfekt für einen Anruf in der Mittagspause.
        </li>
        <li>
          <strong>Familienanrufe über Zeitzonen hinweg</strong><br>
          Eine Familie hat Mitglieder in Los Angeles, New York und London. Sie wollen eine Zeit finden, die für alle passt. Sie probieren verschiedene Zeitfenster aus und entdecken, dass 10 Uhr in LA für 13 Uhr in New York und 18 Uhr in London funktioniert - alle können teilnehmen.
        </li>
      </ul>
    </div>
  </div>

  <!-- Time Range Selection Dialog -->
  <div id="wtp-range-dialog" class="wtp-range-dialog">
    <div class="wtp-range-dialog-content">
      <div class="wtp-range-dialog-body">
        <div id="wtp-range-info">
          <h3>Zeitbereich verfeinern</h3>
          <div class="wtp-range-edit-container">
            <div class="wtp-range-edit-item">
              <label>Start</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-start-date-display">Wird geladen...</span>
                <span class="wtp-time-value" id="wtp-start-time-display">Wird geladen...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="start" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="start" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Ende</label>
              <div class="wtp-datetime-display">
                <span class="wtp-date-value" id="wtp-end-date-display">Wird geladen...</span>
                <span class="wtp-time-value" id="wtp-end-time-display">Wird geladen...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="end" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="end" data-direction="increase">+</button>
              </div>
            </div>
            <div class="wtp-range-edit-item">
              <label>Dauer</label>
              <div class="wtp-datetime-display">
                <span class="wtp-time-value" id="wtp-duration-display">Wird geladen...</span>
              </div>
              <div class="wtp-btn-group">
                <button class="wtp-time-btn wtp-time-decrease" data-target="duration" data-direction="decrease">-</button>
                <button class="wtp-time-btn wtp-time-increase" data-target="duration" data-direction="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wtp-meeting-links">
          <label class="wtp-meeting-label">Zum Kalender hinzufügen</label>
          <div class="wtp-meeting-buttons">
            <button class="wtp-meeting-btn" id="wtp-google-meeting-btn">
              Google Kalender
            </button>
            <button class="wtp-meeting-btn" id="wtp-outlook-meeting-btn">
              Outlook
            </button>
            <button class="wtp-meeting-btn" id="wtp-yahoo-meeting-btn">
              Yahoo Kalender
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

<script src="/assets/js/world-time-planner-de.js?v=11"></script>
