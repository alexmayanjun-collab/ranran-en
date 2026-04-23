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
var currentDate = "2026-04-23";
