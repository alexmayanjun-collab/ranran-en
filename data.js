// 90天学习计划生成器
const FALLBACK_START = "2026-05-07";

function generateLearningPlan(planStart) {
  const plan = {};
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  
  for (let i = 0; i < 90; i++) {
    const d = new Date(planStart);
    d.setDate(d.getDate() + i);
    const dateKey = d.toISOString().slice(0, 10);
    
    // 逻辑：前30天按顺序学习 MASTER_SCHEDULE，后续天数开始循环复习
    const curriculumItem = MASTER_SCHEDULE[i % MASTER_SCHEDULE.length];
    
    plan[dateKey] = {
      date: `${d.getMonth() + 1}月${d.getDate()}日`,
      weekday: weekdayNames[d.getDay()],
      ...curriculumItem
    };
  }
  return plan;
}

// 生成计划时用写死的起始日（curriculum.js 加载后 MASTER_SCHEDULE 已知）
const englishData = generateLearningPlan(FALLBACK_START);

// currentDate 动态解析：优先 localStorage > 今天 > 兜底第一个可用日期
const saved = localStorage.getItem('english-current-date');
if (saved && englishData[saved]) {
  var currentDate = saved;
} else {
  const today = new Date().toISOString().slice(0, 10);
  currentDate = englishData[today] ? today : Object.keys(englishData)[0];
}
