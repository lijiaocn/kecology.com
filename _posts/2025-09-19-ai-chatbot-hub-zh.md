---
layout: page
title: "AI聊天机器人中心：快速访问ChatGPT、Gemini、Grok等"
description: "快速访问流行的AI聊天机器人，包括ChatGPT、Gemini、Claude、DeepSeek等。添加自定义AI工具以提高生产力。一键访问您最喜爱的AI助手。"
date: 2025-09-19 10:00:00 +0800
last_modified_at: "2025-09-23 10:00:00 +0800"
categories: tool
permalink: /zh/tool/ai-chatbot-hub
lang: zh-CN
mysetting:
  nowrapper: true
  # display: fullscreen
---

<link rel="stylesheet" href="/assets/css/ai-chatbot-hub.css?v=1">

<div class="ai-chatbot-hub">
  <div class="hero-section">
    <p class="subtitle">添加您自己的自定义AI工具 • 一键访问所有流行的聊天机器人</p>
  </div>

  <div class="chatbot-grid">
    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/chatgpt.svg" alt="ChatGPT" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>ChatGPT</h3>
      <p>OpenAI</p>
      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 ChatGPT
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/gemini.svg" alt="Gemini" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Gemini</h3>
      <p>Google</p>
      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Gemini
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/grok.svg" alt="Grok" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Grok</h3>
      <p>X (Twitter)</p>
      <a href="https://grok.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Grok
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/deepseek-color.svg" alt="DeepSeek" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>DeepSeek</h3>
      <p>DeepSeek</p>
      <a href="https://chat.deepseek.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 DeepSeek
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/perplexity-official.svg" alt="Perplexity" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Perplexity</h3>
      <p>Perplexity AI</p>
      <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Perplexity
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/claude-correct.svg" alt="Claude" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Claude</h3>
      <p>Anthropic</p>
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Claude
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/copilot-color.svg" alt="Copilot" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Copilot</h3>
      <p>Microsoft</p>
      <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Copilot
      </a>
    </div>

    <div class="chatbot-card" data-category="coding">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/cursor.svg" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Cursor</h3>
      <p>Cursor</p>
      <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="btn-primary">
        打开 Cursor
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
      <h3>添加自定义</h3>
      <p>添加您自己的AI工具</p>
      <button class="btn-primary" type="button">
        添加新工具
      </button>
    </div>

  </div>

  <div class="features-section">
    <h2>为什么使用AI聊天机器人中心？</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <h3>快速访问</h3>
        <p>不再需要在搜索引擎中搜索。直接访问所有流行的AI聊天机器人。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>井井有条</h3>
        <p>所有聊天机器人都经过精心组织和分类，便于导航。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <h3>始终更新</h3>
        <p>我们会定期更新列表，加入新的和流行的AI聊天机器人。</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💡</div>
        <h3>提高生产力</h3>
        <p>通过即时访问AI工具节省时间并提高您的生产力。</p>
      </div>
    </div>
  </div>

</div>

<!-- Add Custom Tool Modal -->
<div id="addModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>添加自定义AI工具</h2>
      <span class="close" onclick="closeAddModal()">&times;</span>
    </div>
    <div class="modal-body">
      <form id="addToolForm">
        <div class="form-group">
          <label for="toolName">工具名称 *</label>
          <input type="text" id="toolName" name="toolName" required placeholder="例如，我的自定义AI">
        </div>
        <div class="form-group">
          <label for="toolDescription">工具描述 *</label>
          <input type="text" id="toolDescription" name="toolDescription" required placeholder="例如，我的自定义AI助手">
        </div>
        <div class="form-group">
          <label for="toolUrl">工具URL *</label>
          <input type="url" id="toolUrl" name="toolUrl" required placeholder="https://example.com">
        </div>
        <div class="form-group">
          <label for="toolCategory">类别</label>
          <select id="toolCategory" name="toolCategory">
            <option value="general">通用</option>
            <option value="coding">编码</option>
            <option value="writing">写作</option>
            <option value="design">设计</option>
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

<script src="/assets/js/ai-chatbot-hub-zh.js?v=1"></script>