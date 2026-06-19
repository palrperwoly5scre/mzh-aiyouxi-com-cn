// public/site-helper.js - 页面提示卡片、关键词徽章和访问说明
(function() {
  'use strict';

  // 配置数据
  const config = {
    siteUrl: 'https://mzh-aiyouxi.com.cn',
    keyword: '爱游戏',
    badgeColors: ['#4a90d9', '#e67e22', '#27ae60', '#8e44ad', '#e74c3c']
  };

  // 提示卡片数据
  const tips = [
    { title: '快速开始', content: '浏览我们的游戏分类，找到您喜欢的类型。' },
    { title: '新手指南', content: '访问 ' + config.siteUrl + ' 了解更多入门信息。' },
    { title: '热门推荐', content: '探索与 "' + config.keyword + '" 相关的精选内容。' }
  ];

  // 创建样式
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .sh-tip-card {
        background: #f9f9fb;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        padding: 16px 20px;
        margin: 16px 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        transition: box-shadow 0.2s;
      }
      .sh-tip-card:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.12);
      }
      .sh-tip-card h4 {
        margin: 0 0 8px 0;
        font-size: 1.1em;
        color: #333;
      }
      .sh-tip-card p {
        margin: 0;
        color: #555;
        line-height: 1.5;
      }
      .sh-badge {
        display: inline-block;
        padding: 4px 12px;
        margin: 4px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: 500;
        color: #fff;
      }
      .sh-access-box {
        background: #f0f4ff;
        border-left: 4px solid #4a90d9;
        padding: 12px 16px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
        font-size: 0.95em;
        color: #2c3e50;
      }
      .sh-access-box a {
        color: #2980b9;
        text-decoration: none;
        font-weight: 500;
      }
      .sh-access-box a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  }

  // 创建提示卡片
  function createTipCards(container) {
    tips.forEach(function(tip) {
      const card = document.createElement('div');
      card.className = 'sh-tip-card';
      card.innerHTML = '<h4>' + tip.title + '</h4><p>' + tip.content + '</p>';
      container.appendChild(card);
    });
  }

  // 创建关键词徽章
  function createBadges(container) {
    const badges = [config.keyword, '游戏', '攻略', '评测', '社区'];
    badges.forEach(function(text, index) {
      const badge = document.createElement('span');
      badge.className = 'sh-badge';
      badge.textContent = text;
      badge.style.backgroundColor = config.badgeColors[index % config.badgeColors.length];
      container.appendChild(badge);
    });
  }

  // 创建访问说明
  function createAccessInfo(container) {
    const box = document.createElement('div');
    box.className = 'sh-access-box';
    box.innerHTML = '更多内容请访问 <a href="' + config.siteUrl + '" target="_blank" rel="noopener noreferrer">' + config.siteUrl + '</a>，探索无限' + config.keyword + '乐趣。';
    container.appendChild(box);
  }

  // 主初始化函数
  function init() {
    injectStyles();

    // 查找或创建容器
    let mainContainer = document.querySelector('.site-helper-container');
    if (!mainContainer) {
      mainContainer = document.createElement('div');
      mainContainer.className = 'site-helper-container';
      mainContainer.style.maxWidth = '800px';
      mainContainer.style.margin = '24px auto';
      mainContainer.style.padding = '0 16px';

      // 插入到页面主要内容区域
      const main = document.querySelector('main') || document.querySelector('.content') || document.body;
      main.appendChild(mainContainer);
    }

    // 创建分区
    const tipsSection = document.createElement('div');
    tipsSection.id = 'sh-tips';
    const badgesSection = document.createElement('div');
    badgesSection.id = 'sh-badges';
    const accessSection = document.createElement('div');
    accessSection.id = 'sh-access';

    mainContainer.appendChild(tipsSection);
    mainContainer.appendChild(badgesSection);
    mainContainer.appendChild(accessSection);

    createTipCards(tipsSection);
    createBadges(badgesSection);
    createAccessInfo(accessSection);
  }

  // 在 DOM 准备就绪后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();