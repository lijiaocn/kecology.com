document.addEventListener('DOMContentLoaded', function() {
  loadCustomTools();
});

function openAddModal() {
  document.getElementById('addModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeAddModal() {
  document.getElementById('addModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  document.getElementById('addToolForm').reset();
}

window.onclick = function(event) {
  const modal = document.getElementById('addModal');
  if (event.target === modal) {
    closeAddModal();
  }
}

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
  
  saveCustomTool(toolData);
  addCustomToolCard(toolData);
  closeAddModal();
});

function saveCustomTool(toolData) {
  let customTools = JSON.parse(localStorage.getItem('ai-chatbot-hub-custom-tools') || '[]');
  customTools.push(toolData);
  localStorage.setItem('ai-chatbot-hub-custom-tools', JSON.stringify(customTools));
}

function loadCustomTools() {
  const customTools = JSON.parse(localStorage.getItem('ai-chatbot-hub-custom-tools') || '[]');
  customTools.forEach(tool => {
    addCustomToolCard(tool);
  });
}

function addCustomToolCard(toolData) {
  const chatbotGrid = document.querySelector('.chatbot-grid');
  const addCard = document.getElementById('add-card');
  
  const customCard = document.createElement('div');
  customCard.className = 'chatbot-card custom-card';
  customCard.setAttribute('data-category', toolData.category);
  
  customCard.innerHTML = `
    <div class="chatbot-icon">
      <img src="/assets/img/ai-chatbot-hub/custom-ai-logo.svg" alt="Custom AI Tool" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
    <h3>${toolData.name}</h3>
    <p>${toolData.description}</p>
    <a href="${toolData.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">
      Apri ${toolData.name}
    </a>
    <button class="delete-btn" onclick="deleteCustomTool('${toolData.id}', this)" title="Elimina strumento">×</button>
  `;
  
  chatbotGrid.insertBefore(customCard, addCard);
}

function deleteCustomTool(toolId, buttonElement) {
  if (confirm('Sei sicuro di voler eliminare questo strumento personalizzato?')) {
    let customTools = JSON.parse(localStorage.getItem('ai-chatbot-hub-custom-tools') || '[]');
    customTools = customTools.filter(tool => tool.id !== toolId);
    localStorage.setItem('ai-chatbot-hub-custom-tools', JSON.stringify(customTools));
    
    buttonElement.closest('.custom-card').remove();
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAddModal();
  }
});