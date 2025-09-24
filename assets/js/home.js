document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const postLists = document.querySelectorAll('.post-list');
  
  // 初始化：显示英文列表
  const englishList = document.querySelector('.post-list[data-lang="en"]');
  if (englishList) {
    englishList.classList.add('show');
  }
  
  // 切换标签页函数
  function switchTab(activeButton) {
    // 移除所有活动状态
    tabButtons.forEach(btn => btn.classList.remove('active'));
    postLists.forEach(list => list.classList.remove('show'));
    
    // 添加当前按钮的活动状态
    activeButton.classList.add('active');
    
    // 显示对应语言的文章列表
    const selectedLang = activeButton.getAttribute('data-lang');
    const targetList = document.querySelector(`.post-list[data-lang="${selectedLang}"]`);
    if (targetList) {
      targetList.classList.add('show');
    }
  }
  
  // 绑定点击事件
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      switchTab(this);
    });
  });
});
