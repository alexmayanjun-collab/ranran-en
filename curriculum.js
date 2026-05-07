// 固定词汇学习路径 (Master Vocabulary List)
const MASTER_SCHEDULE = [
  // 阶段 1: 晨起与基础交互 (Day 1-10)
  { scene: "早上见面", vocab: ["Good morning", "Wake up"], dialogs: [{ english: "Good morning!", chinese: "早上好！" }, { english: "Wake up, baby!", chinese: "起床啦！" }], tip: "拥抱宝宝", resources: [] },
  { scene: "打招呼", vocab: ["Hi", "Hello"], dialogs: [{ english: "Hi, mommy!", chinese: "嗨，妈妈！" }, { english: "Hello, baby!", chinese: "你好，宝贝！" }], tip: "挥手示意", resources: [] },
  { scene: "看绘本", vocab: ["Look", "Book"], dialogs: [{ english: "Look!", chinese: "看！" }, { english: "A nice book.", chinese: "好书。" }], tip: "指着书面", resources: [] },
  // ... (简化展示，后续填满30天)
  
  // 阶段 2: 饮食与如厕 (Day 11-20)
  { scene: "吃饭", vocab: ["Eat", "Yummy"], dialogs: [{ english: "Let's eat!", chinese: "吃饭吧！" }, { english: "Yummy!", chinese: "好吃！" }], tip: "坐好", resources: [] },
  { scene: "喝水", vocab: ["Water", "Drink"], dialogs: [{ english: "Time for water!", chinese: "喝水啦！" }, { english: "Drink it.", chinese: "喝掉它。" }], tip: "递水杯", resources: [] },
  
  // 阶段 3: 洗漱与晚安 (Day 21-30)
  { scene: "洗澡", vocab: ["Bath", "Clean"], dialogs: [{ english: "Bath time!", chinese: "洗澡！" }, { english: "It's clean.", chinese: "洗干净了。" }], tip: "搓泡泡", resources: [] },
  { scene: "晚安", vocab: ["Good night", "Sleep"], dialogs: [{ english: "Good night!", chinese: "晚安！" }, { english: "Time to sleep.", chinese: "睡觉时间到。" }], tip: "亲亲额头", resources: [] }
];

// 为了完成 30 天，我们可以通过循环和扩展 MASTER_SCHEDULE 来生成
const curriculumLibrary = MASTER_SCHEDULE;
