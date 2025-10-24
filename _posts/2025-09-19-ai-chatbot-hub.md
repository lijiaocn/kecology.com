---
layout: page
title: "AI Chatbot Hub: Quick Access to ChatGPT, Gemini, Grok, and More"
date: 2025-09-19 10:00:00 +0800
last_modified_at: "2025-09-23 10:00:00 +0800"
categories: tool
permalink: /tool/ai-chatbot-hub
mysetting:
  # display: fullscreen
  nowrapper: true 
description: "Quick access to popular AI chatbots including ChatGPT, Gemini, Claude, DeepSeek, and more. Add custom AI tools for enhanced productivity. One-click access to your favorite AI assistants."
---

<link rel="stylesheet" href="/assets/css/ai-chatbot-hub.css?v=1">

<div class="ai-chatbot-hub">
  <div class="hero-section">
    <p class="subtitle">Add your own custom AI tools • One-click access to all popular chatbots</p>
  </div>

  <div class="chatbot-grid">
    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/chatgpt.svg" alt="ChatGPT" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>ChatGPT</h3>
      <p>OpenAI</p>
      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open ChatGPT
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/gemini.svg" alt="Gemini" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Gemini</h3>
      <p>Google</p>
      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open Gemini
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/grok.svg" alt="Grok" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Grok</h3>
      <p>X (Twitter)</p>
      <a href="https://grok.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open Grok
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/deepseek-color.svg" alt="DeepSeek" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>DeepSeek</h3>
      <p>DeepSeek</p>
      <a href="https://chat.deepseek.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open DeepSeek
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/perplexity-official.svg" alt="Perplexity" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Perplexity</h3>
      <p>Perplexity AI</p>
      <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open Perplexity
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/claude-correct.svg" alt="Claude" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Claude</h3>
      <p>Anthropic</p>
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open Claude
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/copilot-color.svg" alt="Copilot" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Copilot</h3>
      <p>Microsoft</p>
      <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Open Copilot
      </a>
    </div>

    <div class="chatbot-card" data-category="coding">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/cursor.svg" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Cursor</h3>
      <p>Cursor</p>
      <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="btn-primary">
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
      <h3>Add Custom</h3>
      <p>Add your own AI tools</p>
      <button class="btn-primary" type="button">
        Add New Tool
      </button>
    </div>

  </div>

  <div class="features-section">
    <h2>Why Use AI Chatbot Hub?</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <h3>Quick Access</h3>
        <p>No more searching through search engines. Direct access to all popular AI chatbots.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>Organized</h3>
        <p>All chatbots are neatly organized and categorized for easy navigation.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <h3>Always Updated</h3>
        <p>We regularly update the list with new and popular AI chatbots.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💡</div>
        <h3>Productivity Boost</h3>
        <p>Save time and increase your productivity with instant access to AI tools.</p>
      </div>
    </div>
  </div>

</div>

<!-- Add Custom Tool Modal -->
<div id="addModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>Add Custom AI Tool</h2>
      <span class="close" onclick="closeAddModal()">&times;</span>
    </div>
    <div class="modal-body">
      <form id="addToolForm">
        <div class="form-group">
          <label for="toolName">Tool Name *</label>
          <input type="text" id="toolName" name="toolName" required placeholder="e.g., My Custom AI">
        </div>
        <div class="form-group">
          <label for="toolDescription">Tool Description *</label>
          <input type="text" id="toolDescription" name="toolDescription" required placeholder="e.g., My custom AI assistant">
        </div>
        <div class="form-group">
          <label for="toolUrl">Tool URL *</label>
          <input type="url" id="toolUrl" name="toolUrl" required placeholder="https://example.com">
        </div>
        <div class="form-group">
          <label for="toolCategory">Category</label>
          <select id="toolCategory" name="toolCategory">
            <option value="general">General</option>
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeAddModal()">Cancel</button>
          <button type="submit" class="btn-primary">Add Tool</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Hidden text elements for internationalization -->
<div id="text-templates" style="display: none;">
    <span id="text-open-tool">Open {name}</span>
    <span id="text-delete-confirm">Are you sure you want to delete this custom tool?</span>
</div>

<script src="/assets/js/ai-chatbot-hub.js?v=1"></script>
