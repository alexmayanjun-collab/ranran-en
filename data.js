// 90天学习计划生成器 (固定路径模式)
const startDate = "2026-05-07";

function generateLearningPlan() {
  const plan = {};
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  
  for (let i = 0; i < 90; i++) {
    const d = new Date(startDate);
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

const englishData = generateLearningPlan();
var currentDate = startDate;
