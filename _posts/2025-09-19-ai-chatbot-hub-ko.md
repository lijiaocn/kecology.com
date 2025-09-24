---
layout: page
title: "AI 챗봇 허브: ChatGPT, Gemini, Grok 등에 빠르게 액세스"
description: "ChatGPT, Gemini, Claude, DeepSeek 등을 포함한 인기 있는 AI 챗봇에 빠르게 액세스할 수 있습니다. 생산성 향상을 위해 사용자 지정 AI 도구를 추가하세요. 즐겨찾는 AI 도우미에 원클릭으로 액세스할 수 있습니다."
date: 2025-09-19 10:00:00 +0800
last_modified_at: "2025-09-23 10:00:00 +0800"
categories: tool
permalink: /ko/tool/ai-chatbot-hub
lang: ko
mysetting:
  nowrapper: true
  # display: fullscreen
---

<link rel="stylesheet" href="/assets/css/ai-chatbot-hub.css?v=1">

<div class="ai-chatbot-hub">
  <div class="hero-section">
    <p class="subtitle">나만의 맞춤형 AI 도구 추가 • 모든 인기 챗봇에 원클릭으로 액세스</p>
  </div>

  <div class="chatbot-grid">
    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/chatgpt.svg" alt="ChatGPT" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>ChatGPT</h3>
      <p>OpenAI</p>
      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        ChatGPT 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon">
        <img src="/assets/img/ai-chatbot-hub/gemini.svg" alt="Gemini" style="width: 100%; height: 100%; object-fit: contain;">
      </div>
      <h3>Gemini</h3>
      <p>Google</p>
      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Gemini 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/grok.svg" alt="Grok" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Grok</h3>
      <p>X (Twitter)</p>
      <a href="https://grok.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Grok 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/deepseek-color.svg" alt="DeepSeek" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>DeepSeek</h3>
      <p>DeepSeek</p>
      <a href="https://chat.deepseek.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
        DeepSeek 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/perplexity-official.svg" alt="Perplexity" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Perplexity</h3>
      <p>Perplexity AI</p>
      <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Perplexity 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/claude-correct.svg" alt="Claude" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Claude</h3>
      <p>Anthropic</p>
      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Claude 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="general">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/copilot-color.svg" alt="Copilot" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Copilot</h3>
      <p>Microsoft</p>
      <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Copilot 열기
      </a>
    </div>

    <div class="chatbot-card" data-category="coding">
      <div class="chatbot-icon"><img src="/assets/img/ai-chatbot-hub/cursor.svg" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;"></div>
      <h3>Cursor</h3>
      <p>Cursor</p>
      <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="btn-primary">
        Cursor 열기
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
      <h3>사용자 지정 추가</h3>
      <p>나만의 AI 도구 추가</p>
      <button class="btn-primary" type="button">
        새 도구 추가
      </button>
    </div>

  </div>

  <div class="features-section">
    <h2>AI 챗봇 허브를 사용하는 이유</h2>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <h3>빠른 액세스</h3>
        <p>더 이상 검색 엔진에서 검색할 필요가 없습니다. 모든 인기 있는 AI 챗봇에 직접 액세스할 수 있습니다.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <h3>정리됨</h3>
        <p>모든 챗봇은 쉬운 탐색을 위해 깔끔하게 정리되고 분류되어 있습니다.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <h3>항상 업데이트됨</h3>
        <p>새롭고 인기 있는 AI 챗봇으로 목록을 정기적으로 업데이트합니다.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💡</div>
        <h3>생산성 향상</h3>
        <p>AI 도구에 즉시 액세스하여 시간을 절약하고 생산성을 높이십시오.</p>
      </div>
    </div>
  </div>

</div>

<!-- Add Custom Tool Modal -->
<div id="addModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>사용자 지정 AI 도구 추가</h2>
      <span class="close" onclick="closeAddModal()">&times;</span>
    </div>
    <div class="modal-body">
      <form id="addToolForm">
        <div class="form-group">
          <label for="toolName">도구 이름 *</label>
          <input type="text" id="toolName" name="toolName" required placeholder="예: 내 사용자 지정 AI">
        </div>
        <div class="form-group">
          <label for="toolDescription">도구 설명 *</label>
          <input type="text" id="toolDescription" name="toolDescription" required placeholder="예: 내 사용자 지정 AI 도우미">
        </div>
        <div class="form-group">
          <label for="toolUrl">도구 URL *</label>
          <input type="url" id="toolUrl" name="toolUrl" required placeholder="https://example.com">
        </div>
        <div class="form-group">
          <label for="toolCategory">카테고리</label>
          <select id="toolCategory" name="toolCategory">
            <option value="general">일반</option>
            <option value="coding">코딩</option>
            <option value="writing">글쓰기</option>
            <option value="design">디자인</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeAddModal()">취소</button>
          <button type="submit" class="btn-primary">도구 추가</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script src="/assets/js/ai-chatbot-hub-ko.js?v=1"></script>