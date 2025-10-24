// 本地存储键名
const STORAGE_KEY = 'ai-chatbot-hub-custom-tools';

// 页面加载时从本地存储加载自定义工具
document.addEventListener('DOMContentLoaded', function() {
  loadCustomTools();
});

// 打开添加模态框
function openAddModal() {
  document.getElementById('addModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// 关闭添加模态框
function closeAddModal() {
  document.getElementById('addModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  document.getElementById('addToolForm').reset();
}

// 点击模态框外部关闭
window.onclick = function(event) {
  const modal = document.getElementById('addModal');
  if (event.target === modal) {
    closeAddModal();
  }
}

// 处理表单提交
document.getElementById('addToolForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const toolData = {
    id: Date.now().toString(),
    name: formData.get('toolName'),
    description: formData.get('toolDescription'),
    url: formData.get('toolUrl'),
    category: formData.get('toolCategory')
  };
  
  // 保存到本地存储
  saveCustomTool(toolData);
  
  // 添加到页面
  addCustomToolCard(toolData);
  
  // 关闭模态框
  closeAddModal();
});

// 保存自定义工具到本地存储
function saveCustomTool(toolData) {
  let customTools = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  customTools.push(toolData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customTools));
}

// 从本地存储加载自定义工具
function loadCustomTools() {
  const customTools = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  customTools.forEach(tool => {
    addCustomToolCard(tool);
  });
}

// 添加自定义工具卡片到页面
function addCustomToolCard(toolData) {
  const chatbotGrid = document.querySelector('.chatbot-grid');
  const addCard = document.getElementById('add-card');
  
  const customCard = document.createElement('div');
  customCard.className = 'chatbot-card custom-card';
  customCard.setAttribute('data-category', toolData.category);
  
  const openToolTemplate = document.getElementById('text-open-tool').textContent;
  customCard.innerHTML = `
    <div class="chatbot-icon">
      <img src="/assets/img/ai-chatbot-hub/custom-ai-logo.svg" alt="Custom AI Tool" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
    <h3>${toolData.name}</h3>
    <p>${toolData.description}</p>
    <a href="${toolData.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">
      ${openToolTemplate.replace('{name}', toolData.name)}
    </a>
    <button class="delete-btn" onclick="deleteCustomTool('${toolData.id}', this)" title="Delete Tool">×</button>
  `;
  
  // 在添加卡片之前插入自定义卡片
  chatbotGrid.insertBefore(customCard, addCard);
}

// Delete custom tool
function deleteCustomTool(toolId, buttonElement) {
  const deleteConfirmText = document.getElementById('text-delete-confirm').textContent;
  if (confirm(deleteConfirmText)) {
    // Remove from local storage
    let customTools = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    customTools = customTools.filter(tool => tool.id !== toolId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customTools));
    
    // Remove from page
    buttonElement.closest('.custom-card').remove();
  }
}

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAddModal();
  }
});
