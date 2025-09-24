---
layout: page
title: "AI聊天機器人中心：快速訪問ChatGPT、Gemini、Grok等"
description: "快速訪問流行的AI聊天機器人，包括ChatGPT、Gemini、Claude、DeepSeek等。添加自定義AI工具以提高生產力。一鍵訪問您最喜愛的AI助理。"
date: 2025-09-19 10:00:00 +0800
last_modified_at: "2025-09-23 10:00:00 +0800"
categories: tool
permalink: /zh-tw/tool/ai-chatbot-hub
lang: zh-TW
mysetting:
  nowrapper: true
  # display: fullscreen
---

<link rel="stylesheet" href="/assets/css/ai-chatbot-hub.css?v=1">

<div class="ai-chatbot-hub">
  <div class="hero-section">
    <p class="subtitle">添加您自己的自定義AI工具 • 一鍵訪問所有流行的聊天機器人</p>
  </div>

  <div class="chatbot-grid">
    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/chatgpt.svg" alt="ChatGPT" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>ChatGPT</h3>
      <p>OpenAI</p>
      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 ChatGPT
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/gemini.svg" alt="Gemini" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Gemini</h3>
      <p>Google</p>
      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Gemini
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/grok.svg" alt="Grok" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Grok</h3>
      <p>X (Twitter)</p>
      <a href="https://grok.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Grok
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/deepseek-color.svg" alt="DeepSeek" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>DeepSeek</h3>
      <p>DeepSeek</p>
      <a href="https://chat.deepseek.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 DeepSeek
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/perplexity-official.svg" alt="Perplexity" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Perplexity</h3>
      <p>Perplexity AI</p>
      <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Perplexity
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/claude-correct.svg" alt="Claude" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Claude</h3>
      <p>Anthropic</p>
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Claude
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/copilot-color.svg" alt="Copilot" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Copilot</h3>
      <p>Microsoft</p>
      <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Copilot
      </a>
    </div>

    <div class="chatbot-card" data-category="coding">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/cursor.svg" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Cursor</h3>
      <p>Cursor</p>
      <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打開 Cursor
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
      <h3>添加自定義</h3>
      <p>添加您自己的AI工具</p>
      <button class="btn-primary" type="button">
        添加新工具
      </button>
    </div>

  </div>

  <div class="features-section">
    <h2>為什麼使用AI聊天機器人中心？</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <h3>快速訪問</h3>
        <p>不再需要在搜索引擎中搜索。直接訪問所有流行的AI聊天機器人。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>井井有條</h3>
        <p>所有聊天機器人都經過精心組織和分類，便於導航。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <h3>始終更新</h3>
        <p>我們會定期更新列表，加入新的和流行的AI聊天機器人。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💡</div>
        <h3>提高生產力</h3>
        <p>通過即時訪問AI工具節省時間並提高您的生產力。</p>
      </div>
    </div>
  </div>

</div>

<!-- Add Custom Tool Modal -->
<div id="addModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>添加自定義AI工具</h2>
      <span class="close" onclick="closeAddModal()">&times;</span>
    </div>
    <div class="modal-body">
      <form id="addToolForm">
        <div class="form-group">
          <label for="toolName">工具名稱 *</label>
          <input type="text" id="toolName" name="toolName" required placeholder="例如，我的自定義AI">
        </div>
        <div class="form-group">
          <label for="toolDescription">工具描述 *</label>
          <input type="text" id="toolDescription" name="toolDescription" required placeholder="例如，我的自定義AI助理">
        </div>
        <div class="form-group">
          <label for="toolUrl">工具URL *</label>
          <input type="url" id="toolUrl" name="toolUrl" required placeholder="https://example.com">
        </div>
        <div class="form-group">
          <label for="toolCategory">類別</label>
          <select id="toolCategory" name="toolCategory">
            <option value="general">通用</option>
            <option value="coding">編碼</option>
            <option value="writing">寫作</option>
            <option value="design">設計</option>
            <option value="other">其他</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeAddModal()">取消</button>
          <button type="submit" class="btn-primary">添加工具</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script src="/assets/js/ai-chatbot-hub-zh-tw.js?v=1"></script>