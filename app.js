// ===== Scene config =====
const sceneConfig = {
  "早上见面": { icon: "☀️", desc: "和家人打招呼，开启美好的一天" },
  "出门":     { icon: "👟", desc: "背上小书包，出发去探索世界" },
  "吃饭":     { icon: "🍚", desc: "和家人一起享用美味的饭菜" },
  "谢谢":     { icon: "💜", desc: "学会感恩，表达心中的谢意" },
  "道歉":     { icon: "🌈", desc: "勇敢说对不起，和好如初" },
  "赞美":     { icon: "⭐", desc: "发现别人的闪光点，给予鼓励" },
  "晚安":     { icon: "🌙", desc: "温柔的晚安，做个甜甜的梦" }
};

// ===== All dates in data sorted =====
const allDates = Object.keys(englishData).sort();

// ===== Streak calculation =====
function calcStreak() {
  let streak = 0;
  const today = new Date(currentDate);
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const saved = localStorage.getItem('english-check-' + key);
    if (saved) {
      const s = JSON.parse(saved);
      if (s.every(v => v)) { streak++; }
      else if (i === 0) { continue; } // today can be incomplete
      else { break; }
    } else {
      if (i === 0) continue;
      break;
    }
  }
  return streak;
}

// ===== Render sidebar day list =====
function renderSidebar() {
  const nav = document.getElementById('dayNav');
  nav.innerHTML = '';

  allDates.forEach(dateKey => {
    const d = englishData[dateKey];
    const cfg = sceneConfig[d.scene] || { icon: "📝" };
    const isActive = dateKey === currentDate;
    const saved = localStorage.getItem('english-check-' + dateKey);
    const isCompleted = saved ? JSON.parse(saved).every(v => v) : false;

    const item = document.createElement('div');
    item.className = 'day-item' + (isActive ? ' active' : '') + (isCompleted ? ' completed' : '');
    item.onclick = () => switchDate(dateKey);

    item.innerHTML = `
      <div class="day-dot">${cfg.icon}</div>
      <div class="day-info">
        <div class="day-name">${d.weekday} · ${d.scene}</div>
        <div class="day-scene">${dateKey}</div>
      </div>
      <div class="day-check">${isCompleted ? '✅' : ''}</div>
    `;
    nav.appendChild(item);
  });

  // Streak
  const streak = calcStreak();
  document.getElementById('streakCount').textContent = streak;
}

// ===== Render mobile date picker =====
function renderMobileDatePicker() {
  const dropdown = document.getElementById('datePickerDropdown');
  const label = document.getElementById('datePickerLabel');
  const trigger = document.getElementById('datePickerTrigger');

  // Update trigger label
  const currentData = englishData[currentDate];
  if (currentData) {
    label.textContent = `${currentData.weekday} · ${currentData.date}`;
  }

  // Render dropdown items
  dropdown.innerHTML = allDates.map(dateKey => {
    const d = englishData[dateKey];
    const cfg = sceneConfig[d.scene] || { icon: "📝" };
    const isActive = dateKey === currentDate;
    const saved = localStorage.getItem('english-check-' + dateKey);
    const isCompleted = saved ? JSON.parse(saved).every(v => v) : false;
    const classes = ['dp-item'];
    if (isActive) classes.push('active');
    if (isCompleted) classes.push('completed');

    return `
      <button class="${classes.join(' ')}" onclick="switchDate('${dateKey}'); closeDatePicker();">
        <div class="dp-dot">${cfg.icon}</div>
        <div class="dp-info">
          <div class="dp-name">${d.weekday} · ${d.scene}</div>
          <div class="dp-scene">${dateKey}</div>
        </div>
        <div class="dp-check">${isCompleted ? '✅' : ''}</div>
      </button>
    `;
  }).join('');
}

// ===== Toggle date picker dropdown =====
function toggleDatePicker() {
  const dropdown = document.getElementById('datePickerDropdown');
  const trigger = document.getElementById('datePickerTrigger');
  const isVisible = dropdown.classList.contains('visible');
  if (isVisible) {
    closeDatePicker();
  } else {
    dropdown.classList.add('visible');
    trigger.classList.add('open');
  }
}

function closeDatePicker() {
  const dropdown = document.getElementById('datePickerDropdown');
  const trigger = document.getElementById('datePickerTrigger');
  if (dropdown) dropdown.classList.remove('visible');
  if (trigger) trigger.classList.remove('open');
}

// Close dropdown when clicking outside (registered on DOMContentLoaded)
function initDatePickerOutsideClick() {
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('datePickerDropdown');
    const trigger = document.getElementById('datePickerTrigger');
    if (dropdown && dropdown.classList.contains('visible') && !dropdown.contains(e.target) && !trigger.contains(e.target)) {
      closeDatePicker();
    }
  });
}

// ===== Render main content =====
function renderContent() {
  const data = englishData[currentDate];
  if (!data) {
    document.getElementById('emptyState').style.display = 'flex';
    document.querySelector('.app-layout').style.display = 'none';
    return;
  }

  const cfg = sceneConfig[data.scene] || { icon: "📝", desc: "" };

  // Top bar
  document.getElementById('dateText').textContent = `${data.date} ${data.weekday}`;
  document.getElementById('sceneIcon').textContent = cfg.icon;
  document.getElementById('sceneText').textContent = `今日场景：${data.scene}`;

  // Hero
  document.getElementById('heroIcon').textContent = cfg.icon;
  document.getElementById('heroTitle').textContent = data.scene;
  document.getElementById('heroDesc').textContent = cfg.desc;

  // Dialogs
  const dialogsEl = document.getElementById('dialogsList');
  dialogsEl.innerHTML = data.dialogs.map((d, i) => {
    const isParent = i % 2 === 0;
    return `
      <div class="dialog-bubble" style="animation-delay: ${0.3 + i * 0.15}s">
        <div class="bubble-avatar ${isParent ? 'parent-av' : 'child-av'}">
          ${isParent ? '👩' : '👧'}
        </div>
        <div class="bubble-content">
          <div class="bubble-role">${isParent ? '妈妈' : '宝宝'}</div>
          <div class="bubble-english">${d.english}</div>
          <div class="bubble-chinese">${d.chinese}</div>
        </div>
      </div>
    `;
  }).join('');

  // Tips
  const tipsEl = document.getElementById('tipsContent');
  if (data.tip) {
    const steps = data.tip.split('\n').filter(s => s.trim());
    tipsEl.innerHTML = steps.map((s, i) => {
      const text = s.replace(/^\d+\.\s*/, '');
      return `
        <div class="tip-step">
          <div class="tip-num">${i + 1}</div>
          <div class="tip-text">${text}</div>
        </div>
      `;
    }).join('');
  }

  // Resources
  const resEl = document.getElementById('resourcesList');
  if (data.resources && data.resources.length) {
    resEl.innerHTML = data.resources.map(r => {
      const isSong = r.type === 'song';
      const href = r.url || '#';
      const target = r.url ? ' target="_blank"' : '';
      const onclick = !r.url ? ' onclick="event.preventDefault()"' : '';
      return `
        <a class="resource-link" href="${href}"${target}${onclick}>
          <div class="resource-icon-wrap ${isSong ? 'song' : 'video'}">
            ${isSong ? '🎵' : '🎬'}
          </div>
          <span class="resource-name">${r.name}</span>
          <span class="resource-arrow">→</span>
        </a>
      `;
    }).join('');
  }

  // Load check status
  loadCheckStatus();
}

// ===== Check-in logic =====
function toggleCheck(type) {
  const item = document.getElementById('check-' + type);
  item.classList.toggle('checked');
  const cb = document.getElementById('checkbox-' + type);
  cb.textContent = item.classList.contains('checked') ? '✓' : '';
  saveCheckStatus();
  updateProgress();
  renderSidebar(); // refresh sidebar completion state
}

function saveCheckStatus() {
  const readChecked = document.getElementById('check-read').classList.contains('checked');
  const applyChecked = document.getElementById('check-apply').classList.contains('checked');
  localStorage.setItem('english-check-' + currentDate, JSON.stringify([readChecked, applyChecked]));
}

function loadCheckStatus() {
  const saved = localStorage.getItem('english-check-' + currentDate);
  if (saved) {
    const [r, a] = JSON.parse(saved);
    if (r) {
      document.getElementById('check-read').classList.add('checked');
      document.getElementById('checkbox-read').textContent = '✓';
    }
    if (a) {
      document.getElementById('check-apply').classList.add('checked');
      document.getElementById('checkbox-apply').textContent = '✓';
    }
  } else {
    document.getElementById('check-read').classList.remove('checked');
    document.getElementById('checkbox-read').textContent = '';
    document.getElementById('check-apply').classList.remove('checked');
    document.getElementById('checkbox-apply').textContent = '';
  }
  updateProgress();
}

function updateProgress() {
  const r = document.getElementById('check-read').classList.contains('checked') ? 1 : 0;
  const a = document.getElementById('check-apply').classList.contains('checked') ? 1 : 0;
  const total = r + a;
  document.getElementById('progressFill').style.width = (total / 2 * 100) + '%';
  document.getElementById('progressText').textContent = `${total} / 2`;
}

// ===== Switch date =====
function switchDate(dateKey) {
  currentDate = dateKey;
  window.location.hash = dateKey;
  // Reset check UI
  document.getElementById('check-read').classList.remove('checked');
  document.getElementById('checkbox-read').textContent = '';
  document.getElementById('check-apply').classList.remove('checked');
  document.getElementById('checkbox-apply').textContent = '';
  renderSidebar();
  renderContent();
  renderMobileDatePicker();
  // Re-trigger card animations
  document.querySelectorAll('.glass-card').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Check hash for date override
  if (window.location.hash) {
    const hashDate = window.location.hash.slice(1);
    if (englishData[hashDate]) {
      currentDate = hashDate;
    }
  }

  renderSidebar();
  renderMobileDatePicker();
  renderContent();
  initDatePickerOutsideClick();
});
