// 3个月（90天）学习计划生成器
const startDate = "2026-05-07"; // 设置起始日期

function generateLearningPlan() {
  const plan = {};
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  
  for (let i = 0; i < 90; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    const dateKey = d.toISOString().slice(0, 10);
    
    // 循环复用课程库
    const curriculumItem = curriculumLibrary[i % curriculumLibrary.length];
    
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
