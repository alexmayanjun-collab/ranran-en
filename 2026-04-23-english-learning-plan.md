# 家庭英语启蒙 - 每日情景对话实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 创建一个网页版小黑板风格的每日英语学习展示页面，方便妈妈执行和查看

**Architecture:** 纯前端HTML单文件 + CSV数据分离，实现小黑板视觉效果和每日打卡功能

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript（无依赖）

---

## 文件结构

```
english-learning/
├── index.html      # 主页面（小红板展示）
├── data.js         # 每日对话内容（数据分离，方便更新）
├── README.md       # 使用说明
└── PLAN.md         # 内容规划（本文档）
```

---

## 任务清单

### Task 1: 创建数据文件 data.js

**Files:**
- Create: `english-learning/data.js`

- [ ] **Step 1: 编写数据文件**

```javascript
// 每日对话内容数据
// 可按周更新内容，妈妈只需修改 currentDay 指向的日期

const englishData = {
  // 第一周内容（4月20日-4月26日）
  "2026-04-20": {
    date: "2026年4月20日",
    weekday: "周一",
    scene: "早上见面",
    dialogs: [
      { english: "Good morning!", chinese: "早上好！" },
      { english: "Good morning, Lily!", chinese: "早上好，莉莉！" }
    ],
    tip: "1. 站直身体，微笑\n2. 大声说，声音洪亮\n3. 说三遍",
    resources: [
      { type: "song", name: "Good Morning Song", url: "https://www.youtube.com/watch?v=4G0K2dsM4fM" },
      { type: "video", name: "Peppa Pig - Good Morning", url: "" }
    ]
  },
  "2026-04-21": {
    date: "2026年4月21日",
    weekday: "周二",
    scene: "出门",
    dialogs: [
      { english: "Let's go!", chinese: "我们走吧！" },
      { english: "OK, let's go!", chinese: "好的，我们走吧！" }
    ],
    tip: "1. 背上小书包\n2. 挥挥手说Bye-bye\n3. 走到门口说",
    resources: [
      { type: "song", name: "Let's Go", url: "" }
    ]
  },
  "2026-04-22": {
    date: "2026年4月22日",
    weekday: "周三",
    scene: "吃饭",
    dialogs: [
      { english: "Let's eat!", chinese: "我们吃饭吧！" },
      { english: "Yummy! / Delicious!", chinese: "好吃！" }
    ],
    tip: "1. 坐好等一等\n2. 双手合十说\n3. 吃完夸妈妈",
    resources: [
      { type: "song", name: "Two Little Hands", url: "" }
    ]
  },
  "2026-04-23": {
    date: "2026年4月23日",
    weekday: "周四",
    scene: "谢谢",
    dialogs: [
      { english: "Thank you!", chinese: "谢谢！" },
      { english: "You're welcome!", chinese: "不客气！" }
    ],
    tip: "1. 双手接过东西\n2. 鞠躬说Thank you\n3. 妈妈说不客气",
    resources: [
      { type: "song", name: "Thank You Song", url: "" }
    ]
  },
  "2026-04-24": {
    date: "2026年4月24日",
    weekday: "周五",
    scene: "道歉",
    dialogs: [
      { english: "Sorry!", chinese: "对不起！" },
      { english: "It's OK!", chinese: "没关系！" }
    ],
    tip: "1. 轻轻拉对方手\n2. 低头说Sorry\n3. 拥抱一下",
    resources: [
      { type: "video", name: "Peppa Pig - Saying Sorry", url: "" }
    ]
  },
  "2026-04-25": {
    date: "2026年4月25日",
    weekday: "周六",
    scene: "赞美",
    dialogs: [
      { english: "Good job!", chinese: "做得好！" },
      { english: "Thank you!", chinese: "谢谢！" }
    ],
    tip: "1. 完成后鼓掌\n2. 竖起大拇指\n3. 抱一抱",
    resources: [
      { type: "song", name: "Good Job Song", url: "" }
    ]
  },
  "2026-04-26": {
    date: "2026年4月26日",
    weekday: "周日",
    scene: "晚安",
    dialogs: [
      { english: "Good night!", chinese: "晚安！" },
      { english: "Good night, sweet dreams!", chinese: "晚安，好梦！" }
    ],
    tip: "1. 躺好盖被子\n2. 亲亲小脸蛋\n3. 轻轻说晚安",
    resources: [
      { type: "song", name: "Twinkle Twinkle Little Star", url: "" }
    ]
  }
};

// 当前显示的日期（妈妈可以手动修改这里）
const currentDate = "2026-04-23";
```

- [ ] **Step 2: Commit**

```bash
git add english-learning/data.js
git commit -m "feat: 添加每日对话内容数据"
```

---

### Task 2: 创建主页面 index.html

**Files:**
- Create: `english-learning/index.html`

- [ ] **Step 1: 编写HTML页面**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>英语启蒙 - 每日情景对话</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
      background: #2d3436;
      min-height: 100vh;
      padding: 20px;
    }
    
    .blackboard {
      max-width: 600px;
      margin: 0 auto;
      background: #1a472a;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 
        inset 0 0 50px rgba(0,0,0,0.3),
        0 10px 30px rgba(0,0,0,0.5);
      border: 15px solid #8b4513;
      position: relative;
    }
    
    .blackboard::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 3px solid rgba(255,255,255,0.1);
      border-radius: 15px;
      pointer-events: none;
    }
    
    .header {
      text-align: center;
      color: #fff;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 2px dashed rgba(255,255,255,0.3);
    }
    
    .date {
      font-size: 18px;
      color: #a8e6cf;
      margin-bottom: 8px;
    }
    
    .scene {
      font-size: 28px;
      color: #fff;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .scene-icon {
      font-size: 32px;
      margin-right: 10px;
    }
    
    .dialogs {
      margin: 25px 0;
    }
    
    .dialog-item {
      background: rgba(255,255,255,0.08);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 15px;
      border: 2px solid rgba(255,255,255,0.15);
    }
    
    .english {
      font-size: 24px;
      color: #fff;
      margin-bottom: 8px;
      font-weight: 500;
      letter-spacing: 1px;
    }
    
    .chinese {
      font-size: 18px;
      color: #a8e6cf;
    }
    
    .tip {
      background: rgba(0,0,0,0.2);
      border-radius: 12px;
      padding: 15px;
      margin: 20px 0;
    }
    
    .tip-title {
      color: #ffd93d;
      font-size: 16px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .tip-content {
      color: #e8e8e8;
      font-size: 14px;
      line-height: 1.8;
      white-space: pre-line;
    }
    
    .resources {
      margin: 20px 0;
    }
    
    .resources-title {
      color: #74b9ff;
      font-size: 16px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .resource-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 15px;
      background: rgba(255,255,255,0.08);
      border-radius: 10px;
      margin-bottom: 8px;
      cursor: pointer;
      transition: all 0.3s;
      color: #fff;
      text-decoration: none;
    }
    
    .resource-item:hover {
      background: rgba(255,255,255,0.15);
      transform: translateX(5px);
    }
    
    .resource-icon {
      font-size: 20px;
    }
    
    .resource-name {
      flex: 1;
    }
    
    .checklist {
      margin-top: 25px;
      padding-top: 20px;
      border-top: 2px dashed rgba(255,255,255,0.3);
    }
    
    .checklist-title {
      color: #fff;
      font-size: 18px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .check-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 15px;
      background: rgba(255,255,255,0.08);
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.3s;
      color: #aaa;
    }
    
    .check-item.checked {
      background: rgba(46, 213, 115, 0.2);
      color: #2ed573;
    }
    
    .check-item.checked .checkbox {
      background: #2ed573;
      border-color: #2ed573;
    }
    
    .check-item.checked .checkbox::after {
      content: '✓';
      color: #fff;
      font-size: 14px;
      display: block;
      text-align: center;
      line-height: 20px;
    }
    
    .checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid #666;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }
    
    .check-text {
      font-size: 16px;
    }
    
    .footer {
      text-align: center;
      margin-top: 25px;
      color: rgba(255,255,255,0.5);
      font-size: 14px;
    }
    
    .edit-hint {
      background: rgba(255, 217, 61, 0.15);
      border: 1px solid #ffd93d;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 20px;
      color: #ffd93d;
      font-size: 13px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="blackboard">
    <div class="edit-hint">
      💡 修改 data.js 中的 currentDate 可切换不同日期的内容
    </div>
    
    <div class="header">
      <div class="date" id="date">📅 2026年4月23日 周四</div>
      <div class="scene">
        <span class="scene-icon">🌤️</span>
        <span id="scene">今日场景：早上见面</span>
      </div>
    </div>
    
    <div class="dialogs" id="dialogs">
      <!-- 对话内容 -->
    </div>
    
    <div class="tip">
      <div class="tip-title">💡 练习提示</div>
      <div class="tip-content" id="tip">1. 站直身体，微笑\n2. 大声说，声音洪亮\n3. 说三遍</div>
    </div>
    
    <div class="resources">
      <div class="resources-title">📚 配套资源</div>
      <div id="resources">
        <!-- 资源列表 -->
      </div>
    </div>
    
    <div class="checklist">
      <div class="checklist-title">✅ 今日打卡</div>
      <div class="check-item" onclick="toggleCheck(this)">
        <div class="checkbox"></div>
        <span class="check-text">跟读完成</span>
      </div>
      <div class="check-item" onclick="toggleCheck(this)">
        <div class="checkbox"></div>
        <span class="check-text">场景应用</span>
      </div>
    </div>
    
    <div class="footer">
      🌱 英语启蒙 · 每日情景对话
    </div>
  </div>
  
  <script src="data.js"></script>
  <script>
    // 场景图标映射
    const sceneIcons = {
      "早上见面": "🌤️",
      "出门": "🚪",
      "吃饭": "🍚",
      "谢谢": "🙏",
      "道歉": "😢",
      "赞美": "👏",
      "晚安": "🌙"
    };
    
    // 加载当日数据
    function loadData() {
      const data = englishData[currentDate];
      if (!data) {
        document.body.innerHTML = '<div style="color:#fff;text-align:center;padding:50px;">暂无数据，请检查 data.js 中的 currentDate 设置</div>';
        return;
      }
      
      // 更新日期和场景
      document.getElementById('date').textContent = `📅 ${data.date} ${data.weekday}`;
      const icon = sceneIcons[data.scene] || "📝";
      document.getElementById('scene').innerHTML = `<span class="scene-icon">${icon}</span>今日场景：${data.scene}`;
      
      // 更新对话
      const dialogsHtml = data.dialogs.map(d => `
        <div class="dialog-item">
          <div class="english">${d.english}</div>
          <div class="chinese">${d.chinese}</div>
        </div>
      `).join('');
      document.getElementById('dialogs').innerHTML = dialogsHtml;
      
      // 更新提示
      document.getElementById('tip').textContent = data.tip;
      
      // 更新资源
      const resourcesHtml = data.resources.map(r => `
        <a class="resource-item" href="${r.url || '#'}" ${!r.url ? 'onclick="alert(\\'即将推出\\')"' : 'target="_blank"'}>
          <span class="resource-icon">${r.type === 'song' ? '🎵' : '🎬'}</span>
          <span class="resource-name">${r.name}</span>
        </a>
      `).join('');
      document.getElementById('resources').innerHTML = resourcesHtml;
    }
    
    // 打卡切换
    function toggleCheck(el) {
      el.classList.toggle('checked');
      // 保存状态到 localStorage
      saveCheckStatus();
    }
    
    function saveCheckStatus() {
      const checks = document.querySelectorAll('.check-item');
      const status = Array.from(checks).map(c => c.classList.contains('checked'));
      localStorage.setItem('english-check-' + currentDate, JSON.stringify(status));
    }
    
    function loadCheckStatus() {
      const saved = localStorage.getItem('english-check-' + currentDate);
      if (saved) {
        const status = JSON.parse(saved);
        const checks = document.querySelectorAll('.check-item');
        checks.forEach((c, i) => {
          if (status[i]) c.classList.add('checked');
        });
      }
    }
    
    // 初始化
    loadData();
    loadCheckStatus();
  </script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add english-learning/index.html
git commit -m "feat: 添加英语启蒙HTML小黑板页面"
```

---

### Task 3: 创建 README 使用说明

**Files:**
- Create: `english-learning/README.md`

- [ ] **Step 1: 编写说明文档**

```markdown
# 英语启蒙 - 每日情景对话

一个家庭英语启蒙的小黑板应用，帮助3.5岁孩子进行口语表达训练。

## 如何使用

### 1. 打开页面
直接在浏览器中打开 `index.html` 文件即可。

### 2. 每日学习流程
1. 打开页面，看到今日场景和对话
2. 妈妈先读一遍给孩子听
3. 带孩子跟读2-3遍
4. 在生活中应用（遇到对应场景时说出来）
5. 打卡打钩 ✓

### 3. 切换日期
修改 `data.js` 文件中的 `currentDate` 变量，例如：
```javascript
const currentDate = "2026-04-24";  // 周五内容
```

## 打卡状态
- 打卡状态会自动保存在浏览器中
- 刷新页面后仍会保留

## 内容更新
每周更新一次 `data.js` 中的内容即可。

## 配套资源
页面中的 🎵 儿歌和 🎬 动画链接可以自行添加或修改。

## 技术说明
- 纯前端实现，无需服务器
- 响应式设计，手机和电脑都能用
- 小黑板风格，孩子感兴趣

---

**设计**: Claude Code
**日期**: 2026-04-23
```

- [ ] **Step 2: Commit**

```bash
git add english-learning/README.md
git commit -m "docs: 添加英语启蒙使用说明"
```

---

## 实施检查

- [ ] Task 1: 创建 data.js - 数据文件
- [ ] Task 2: 创建 index.html - 主页面
- [ ] Task 3: 创建 README.md - 使用说明

---

## 验收标准

### 功能验收
- [ ] 页面能正常打开显示
- [ ] 显示当日日期和场景
- [ ] 显示对话内容（中英文）
- [ ] 练习提示显示正确
- [ ] 打卡功能可用
- [ ] 打卡状态能保存

### 视觉验收
- [ ] 小黑板风格（深绿色背景）
- [ ] 字体清晰易读
- [ ] 移动端适配

### 使用体验
- [ ] 妈妈能轻松理解如何使用
- [ ] 孩子能看到有趣的界面
```

