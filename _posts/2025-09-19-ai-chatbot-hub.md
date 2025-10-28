---
layout: page
date: 2025-09-19 10:00:00 +0800
categories: tool
permalink: /tool/ai-chatbot-hub
i18n: true
mysetting:
  header: hidden
  nowrapper: true 
title: "AI Chatbot Hub: Quick Access to ChatGPT, Gemini, Grok, and More"
description: "Quick access to popular AI chatbots including ChatGPT, Gemini, Claude, DeepSeek, and more. Add custom AI tools for enhanced productivity. One-click access to your favorite AI assistants."
---

{% assign i18n_data = site.data.i18n['ai-chatbot-hub'][page.lang] %}
{% if i18n_data == nil %}
  {% assign i18n_data = site.data.i18n['ai-chatbot-hub']['en'] %}
{% endif %}

<link rel="stylesheet" href="/assets/css/ai-chatbot-hub.css?v=1">

<div class="ai-chatbot-hub">
  <div class="hero-section">
    <p class="subtitle">{{ i18n_data.subtitle }}</p>
  </div>

  <div class="chatbot-grid">
    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/chatgpt.svg" alt="ChatGPT" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>ChatGPT</h3>
      <p>OpenAI</p>
      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open ChatGPT
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/gemini.svg" alt="Gemini" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Gemini</h3>
      <p>Google</p>
      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Gemini
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/grok.svg" alt="Grok" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Grok</h3>
      <p>X (Twitter)</p>
      <a href="https://grok.com" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Grok
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/deepseek-color.svg" alt="DeepSeek" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>DeepSeek</h3>
      <p>DeepSeek</p>
      <a href="https://chat.deepseek.com/" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open DeepSeek
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/perplexity-official.svg" alt="Perplexity" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Perplexity</h3>
      <p>Perplexity AI</p>
      <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Perplexity
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/claude-correct.svg" alt="Claude" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Claude</h3>
      <p>Anthropic</p>
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Claude
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/copilot-color.svg" alt="Copilot" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Copilot</h3>
      <p>Microsoft</p>
      <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Copilot
      </a>
    </div>

    <div class="chatbot-card" data-category="coding">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/cursor.svg" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Cursor</h3>
      <p>Cursor</p>
      <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="btn-primary" data-i18n-template="{{ i18n_data.button_open }}">
        Open Cursor
      </a>
    </div>

    <!-- Add Custom Card -->
    <div class="chatbot-card add-card" id="add-card" onclick="openAddModal()">
      <div class="chatbot-icon add-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>{{ i18n_data.button_add_custom }}</h3>
      <p>{{ i18n_data.button_add_custom_title }}</p>
      <button class="btn-primary" type="button">
        {{ i18n_data.button_add_new_tool }}
      </button>
    </div>

  </div>

  <div class="features-section">
    <h2>{{ i18n_data.why_title }}</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <h3>{{ i18n_data.feature_quick_access_title }}</h3>
        <p>{{ i18n_data.feature_quick_access_desc }}</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>{{ i18n_data.feature_organized_title }}</h3>
        <p>{{ i18n_data.feature_organized_desc }}</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <h3>{{ i18n_data.feature_updated_title }}</h3>
        <p>{{ i18n_data.feature_updated_desc }}</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💡</div>
        <h3>{{ i18n_data.feature_productivity_title }}</h3>
        <p>{{ i18n_data.feature_productivity_desc }}</p>
      </div>
    </div>
  </div>

</div>

<!-- Add Custom Tool Modal -->
<div id="addModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>{{ i18n_data.modal_title }}</h2>
      <span class="close" onclick="closeAddModal()">&times;</span>
    </div>
    <div class="modal-body">
      <form id="addToolForm">
        <div class="form-group">
          <label for="toolName">{{ i18n_data.label_tool_name }}</label>
          <input type="text" id="toolName" name="toolName" required placeholder="{{ i18n_data.placeholder_tool_name }}">
        </div>
        <div class="form-group">
          <label for="toolDescription">{{ i18n_data.label_tool_description }}</label>
          <input type="text" id="toolDescription" name="toolDescription" required placeholder="{{ i18n_data.placeholder_tool_description }}">
        </div>
        <div class="form-group">
          <label for="toolUrl">{{ i18n_data.label_tool_url }}</label>
          <input type="url" id="toolUrl" name="toolUrl" required placeholder="{{ i18n_data.placeholder_tool_url }}">
        </div>
        <div class="form-group">
          <label for="toolCategory">{{ i18n_data.label_tool_category }}</label>
          <select id="toolCategory" name="toolCategory">
            <option value="general">{{ i18n_data.option_category_general }}</option>
            <option value="coding">{{ i18n_data.option_category_coding }}</option>
            <option value="writing">{{ i18n_data.option_category_writing }}</option>
            <option value="design">{{ i18n_data.option_category_design }}</option>
            <option value="other">{{ i18n_data.option_category_other }}</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeAddModal()">{{ i18n_data.button_cancel }}</button>
          <button type="submit" class="btn-primary">{{ i18n_data.button_add_tool }}</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Hidden text elements for internationalization -->
<div id="text-templates" style="display: none;">
    <span id="text-open-tool" data-i18n-template="{{ i18n_data.text_open_tool }}">{{ i18n_data.text_open_tool }}</span>
    <span id="text-delete-confirm">{{ i18n_data.text_delete_confirm }}</span>
</div>

<script src="/assets/js/ai-chatbot-hub.js?v=1"></script>
