/* ==========================================================================
   3Week Calendar - Core Logic & Application Controller
   ========================================================================== */

// ==========================================================================
// i18n Translation Dictionaries
// ==========================================================================

const i18n = {
  en: {
    // Header & Navigation
    goToToday: 'Go to Today',
    settings: 'Settings',
    loadingRange: 'Loading range...',
    swipeHint: 'Swipe Left/Right to slide weeks',
    selectDate: 'Select a date',
    today: 'Today',
    addEvent: 'Add Event',

    // Weekday names
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    // Category names
    catPersonal: 'Personal',
    catSchool: 'Study',
    catWork: 'Work',
    catHealth: 'Fitness',

    // Event Form
    createEvent: 'Create New Event',
    editEvent: 'Edit Event',
    eventTitle: 'Event Title',
    eventTitlePlaceholder: 'e.g. MATH101 Midterm, Gym Workout',
    titleRequired: 'Title is required.',
    date: 'Date',
    time: 'Time',
    allDayEvent: 'All-Day Event',
    category: 'Category',
    notesOptional: 'Notes (Optional)',
    notesPlaceholder: 'Add room number, zoom links, details...',
    deleteEvent: 'Delete Event',
    saveEvent: 'Save Event',

    // Event Detail
    notes: 'Notes',
    noNotes: 'No extra notes.',
    noNotesAdded: 'No extra notes added.',
    edit: 'Edit',
    delete: 'Delete',
    allDay: 'All Day',
    fullDay: 'Full Day',
    timeLabel: 'Time',
    noExtraNotes: 'No extra notes',

    // Selected day events
    noEventsTitle: 'No events scheduled',
    noEventsDesc: 'Tap the floating "+" button to add an event for this day.',
    moreEvents: 'more',

    // Settings
    language: 'Language',
    languageDesc: 'Select display language',
    theme: 'Theme',
    themeDesc: 'Toggle light or dark interface',
    startOfWeek: 'Start of Week',
    startOfWeekDesc: 'Select starting weekday',
    sunday: 'Sunday',
    monday: 'Monday',
    categoryColors: 'Category Colors',
    categoryColorsDesc: 'Customize event category highlights',
    dataManagement: 'Data Management',
    backupRestore: 'Backup & Restore',
    backupRestoreDesc: 'Export or import event database',
    export: 'Export',
    import: 'Import',
    resetDemo: 'Reset Demo Data',
    resetDemoDesc: 'Reload initial test events',
    reloadDemo: 'Reload Demo',
    dangerZone: 'Danger Zone',
    dangerZoneDesc: 'Irreversibly delete all application data',
    deleteAll: 'Delete All',
    appInfo: '3Week Calendar v1.0.0 • Runs locally and offline.',

    // Confirm / Alert messages
    confirmDelete: 'Are you sure you want to delete this event?',
    confirmClearAll: 'CAUTION: This will delete ALL events permanently! Are you sure?',
    alertCleared: 'Database cleared.',
    confirmImport: (count) => `Do you want to import ${count} events? This will merge with existing events.`,
    alertImportSuccess: 'Events imported successfully.',
    alertNoValidEvents: 'No valid events found in file.',
    alertInvalidFormat: 'Invalid backup file format. Expected a JSON array of events.',
    alertParseError: (msg) => `Error parsing JSON backup file: ${msg}`,
    confirmLoadDemo: 'Load demo events? This will merge them with your current calendar.',
    alertDemoLoaded: 'Demo data loaded successfully!',

    // Date formatting helpers
    dateLocale: 'en-US',
    dateAtTime: (dateStr, timeStr) => `${dateStr} at ${timeStr}`,

    // Mock data
    mockEvents: (today, addDaysFn, formatDateFn) => [
      {
        id: 'mock-1',
        title: '🏋️ Fitness: Gym Workout',
        date: formatDateFn(today),
        time: '18:00',
        allDay: false,
        category: 'health',
        notes: 'Focus: Leg day routine and 20 mins HIIT cardio.'
      },
      {
        id: 'mock-2',
        title: '📅 Work: Team Weekly Sync',
        date: formatDateFn(addDaysFn(today, 1)),
        time: '10:00',
        allDay: false,
        category: 'work',
        notes: 'Bring status reports on the project roadmap milestones.'
      },
      {
        id: 'mock-3',
        title: '🏃 Fitness: Morning Run',
        date: formatDateFn(addDaysFn(today, -1)),
        time: '07:00',
        allDay: false,
        category: 'health',
        notes: 'Run route in central park. Remember to drink water.'
      },
      {
        id: 'mock-4',
        title: '📝 Study: Web Assignment Due',
        date: formatDateFn(addDaysFn(today, 3)),
        time: '23:59',
        allDay: false,
        category: 'school',
        notes: 'Submit final repository zip file and write-up details.'
      },
      {
        id: 'mock-5',
        title: "🎂 Personal: Chloe's Birthday Party",
        date: formatDateFn(addDaysFn(today, 5)),
        time: '',
        allDay: true,
        category: 'personal',
        notes: 'Buy gift card or perfume. Dinner is at 7pm in Olive Garden.'
      },
      {
        id: 'mock-6',
        title: '💼 Work: Client Pitch Presentation',
        date: formatDateFn(addDaysFn(today, 8)),
        time: '15:00',
        allDay: false,
        category: 'work',
        notes: 'Deliver pitch slides to the marketing team for feedback first.'
      },
      {
        id: 'mock-7',
        title: '🏃 Fitness: 5K Morning Run',
        date: formatDateFn(addDaysFn(today, 12)),
        time: '07:00',
        allDay: false,
        category: 'health',
        notes: 'Run route in central park. Remember to drink water.'
      }
    ]
  },

  ko: {
    // Header & Navigation
    goToToday: '오늘로 이동',
    settings: '설정',
    loadingRange: '로딩 중...',
    swipeHint: '좌우로 스와이프하여 주를 이동하세요',
    selectDate: '날짜를 선택하세요',
    today: '오늘',
    addEvent: '일정 추가',

    // Weekday names
    weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
    weekdaysLong: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],

    // Category names
    catPersonal: '개인',
    catSchool: '학업',
    catWork: '업무',
    catHealth: '운동',

    // Event Form
    createEvent: '새 일정 만들기',
    editEvent: '일정 수정',
    eventTitle: '일정 제목',
    eventTitlePlaceholder: '예: 수학 중간고사, 헬스장 운동',
    titleRequired: '제목을 입력해주세요.',
    date: '날짜',
    time: '시간',
    allDayEvent: '종일 일정',
    category: '카테고리',
    notesOptional: '메모 (선택사항)',
    notesPlaceholder: '강의실 번호, Zoom 링크, 세부사항 등...',
    deleteEvent: '일정 삭제',
    saveEvent: '일정 저장',

    // Event Detail
    notes: '메모',
    noNotes: '추가 메모 없음.',
    noNotesAdded: '추가 메모가 없습니다.',
    edit: '수정',
    delete: '삭제',
    allDay: '종일',
    fullDay: '종일',
    timeLabel: '시간',
    noExtraNotes: '추가 메모 없음',

    // Selected day events
    noEventsTitle: '예정된 일정이 없습니다',
    noEventsDesc: '"+" 버튼을 눌러 이 날의 일정을 추가하세요.',
    moreEvents: '개 더보기',

    // Settings
    language: '언어',
    languageDesc: '표시 언어 선택',
    theme: '테마',
    themeDesc: '밝은/어두운 화면 전환',
    startOfWeek: '주 시작 요일',
    startOfWeekDesc: '시작 요일을 선택하세요',
    sunday: '일요일',
    monday: '월요일',
    categoryColors: '카테고리 색상',
    categoryColorsDesc: '일정 카테고리 색상 설정',
    dataManagement: '데이터 관리',
    backupRestore: '백업 및 복원',
    backupRestoreDesc: '일정 데이터 내보내기 또는 가져오기',
    export: '내보내기',
    import: '가져오기',
    resetDemo: '데모 데이터 초기화',
    resetDemoDesc: '초기 테스트 일정 다시 불러오기',
    reloadDemo: '데모 불러오기',
    dangerZone: '위험 구역',
    dangerZoneDesc: '모든 앱 데이터를 영구적으로 삭제합니다',
    deleteAll: '전체 삭제',
    appInfo: '3Week Calendar v1.0.0 • 로컬에서 오프라인으로 실행됩니다.',

    // Confirm / Alert messages
    confirmDelete: '이 일정을 삭제하시겠습니까?',
    confirmClearAll: '주의: 모든 일정이 영구적으로 삭제됩니다! 계속하시겠습니까?',
    alertCleared: '데이터가 초기화되었습니다.',
    confirmImport: (count) => `${count}개의 일정을 가져오시겠습니까? 기존 일정과 병합됩니다.`,
    alertImportSuccess: '일정을 성공적으로 가져왔습니다.',
    alertNoValidEvents: '유효한 일정이 파일에 없습니다.',
    alertInvalidFormat: '잘못된 백업 파일 형식입니다. JSON 배열이 필요합니다.',
    alertParseError: (msg) => `JSON 백업 파일 파싱 오류: ${msg}`,
    confirmLoadDemo: '데모 일정을 불러오시겠습니까? 현재 캘린더에 병합됩니다.',
    alertDemoLoaded: '데모 데이터가 성공적으로 로드되었습니다!',

    // Date formatting helpers
    dateLocale: 'ko-KR',
    dateAtTime: (dateStr, timeStr) => `${dateStr} ${timeStr}`,

    // Mock data
    mockEvents: (today, addDaysFn, formatDateFn) => [
      {
        id: 'mock-1',
        title: '🏋️ 운동: 헬스장 운동',
        date: formatDateFn(today),
        time: '18:00',
        allDay: false,
        category: 'health',
        notes: '하체 루틴 집중, 20분 HIIT 유산소 포함.'
      },
      {
        id: 'mock-2',
        title: '📅 업무: 주간 팀 미팅',
        date: formatDateFn(addDaysFn(today, 1)),
        time: '10:00',
        allDay: false,
        category: 'work',
        notes: '프로젝트 로드맵 진행 상황 보고서 가져갈 것.'
      },
      {
        id: 'mock-3',
        title: '🏃 운동: 아침 조깅',
        date: formatDateFn(addDaysFn(today, -1)),
        time: '07:00',
        allDay: false,
        category: 'health',
        notes: '공원 달리기 코스. 수분 보충 잊지 않기.'
      },
      {
        id: 'mock-4',
        title: '📝 학업: 웹 과제 마감',
        date: formatDateFn(addDaysFn(today, 3)),
        time: '23:59',
        allDay: false,
        category: 'school',
        notes: '최종 레포지토리 zip 파일과 보고서 제출.'
      },
      {
        id: 'mock-5',
        title: '🎂 개인: 친구 생일 파티',
        date: formatDateFn(addDaysFn(today, 5)),
        time: '',
        allDay: true,
        category: 'personal',
        notes: '선물 준비하기. 저녁 7시 레스토랑에서 식사.'
      },
      {
        id: 'mock-6',
        title: '💼 업무: 고객 프레젠테이션',
        date: formatDateFn(addDaysFn(today, 8)),
        time: '15:00',
        allDay: false,
        category: 'work',
        notes: '마케팅 팀에 발표 슬라이드 피드백 먼저 받기.'
      },
      {
        id: 'mock-7',
        title: '🏃 운동: 5K 아침 달리기',
        date: formatDateFn(addDaysFn(today, 12)),
        time: '07:00',
        allDay: false,
        category: 'health',
        notes: '공원 달리기. 수분 보충 잊지 않기.'
      }
    ]
  }
};

// Helper: get translation string by key
function t(key) {
  const lang = state.settings.language || 'en';
  return i18n[lang][key] !== undefined ? i18n[lang][key] : (i18n['en'][key] || key);
}

// Helper: get the category display name for a category value
function categoryName(catValue) {
  const map = { personal: 'catPersonal', school: 'catSchool', work: 'catWork', health: 'catHealth' };
  return t(map[catValue] || catValue);
}

// --- Application State ---
const state = {
  pivotDate: null,
  selectedDate: null,
  events: [],
  settings: {
    theme: 'light',
    startOfWeek: 0,
    language: 'auto', // 'auto', 'en', or 'ko'
    colors: {
      personal: '#FF6B6B',
      school: '#2EC4B6',
      work: '#4361EE',
      health: '#F77F00'
    }
  },
  isTransitioning: false
};

// Resolve the effective language from the setting (handles 'auto')
function getEffectiveLanguage() {
  const lang = state.settings.language;
  if (lang === 'auto' || !lang) {
    // Auto-detect from browser/device language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('ko')) {
      return 'ko';
    }
    return 'en';
  }
  return lang;
}

// Apply language to state object (resolving 'auto') for use by t()
function resolveLanguage() {
  const effective = getEffectiveLanguage();
  // We store the effective language in the state for t() to use,
  // but settings.language retains the user's choice (which might be 'auto').
  // To make t() work, we temporarily override:
  state._effectiveLang = effective;
}

// Override t() to use resolved language
function t(key) {
  const lang = state._effectiveLang || getEffectiveLanguage();
  return i18n[lang][key] !== undefined ? i18n[lang][key] : (i18n['en'][key] || key);
}

// --- DOM Elements ---
const DOM = {
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  startDaySelect: document.getElementById('start-day-select'),
  languageSelect: document.getElementById('language-select'),
  prevWeekBtn: document.getElementById('prev-week-btn'),
  nextWeekBtn: document.getElementById('next-week-btn'),
  todayBtn: document.getElementById('today-btn'),
  settingsBtn: document.getElementById('settings-btn'),
  addEventBtn: document.getElementById('add-event-btn'),
  
  dateRangeDisplay: document.getElementById('date-range-display'),
  weekdaysBar: document.getElementById('weekdays-bar'),
  calendarViewport: document.getElementById('calendar-viewport-area'),
  activeGrid: document.getElementById('active-grid'),
  incomingGrid: document.getElementById('incoming-grid'),
  swipeOverlay: document.getElementById('swipe-overlay'),
  
  selectedDayTitle: document.getElementById('selected-day-title'),
  selectedDayBadge: document.getElementById('selected-day-badge'),
  selectedEventsList: document.getElementById('selected-events-list'),
  
  modalBackdrop: document.getElementById('modal-backdrop'),
  
  eventFormSheet: document.getElementById('event-form-sheet'),
  eventForm: document.getElementById('event-form'),
  formTitle: document.getElementById('form-title'),
  eventIdField: document.getElementById('event-id-field'),
  eventTitleField: document.getElementById('event-title-field'),
  eventDateField: document.getElementById('event-date-field'),
  eventTimeField: document.getElementById('event-time-field'),
  eventAlldayField: document.getElementById('event-allday-field'),
  eventNotesField: document.getElementById('event-notes-field'),
  titleError: document.getElementById('title-error'),
  closeFormBtn: document.getElementById('close-form-btn'),
  deleteFormBtn: document.getElementById('delete-event-form-btn'),
  
  eventDetailModal: document.getElementById('event-detail-modal'),
  detailCategoryBadge: document.getElementById('detail-category-badge'),
  detailTitle: document.getElementById('detail-title'),
  detailDatetimeText: document.getElementById('detail-datetime-text'),
  detailNotesText: document.getElementById('detail-notes-text'),
  closeDetailBtn: document.getElementById('close-detail-btn'),
  editDetailBtn: document.getElementById('edit-detail-btn'),
  deleteDetailBtn: document.getElementById('delete-detail-btn'),
  
  settingsSheet: document.getElementById('settings-sheet'),
  closeSettingsBtn: document.getElementById('close-settings-btn'),
  preloadDemoBtn: document.getElementById('preload-demo-btn'),
  clearDatabaseBtn: document.getElementById('clear-database-btn'),
  exportDataBtn: document.getElementById('export-data-btn'),
  importDataBtn: document.getElementById('import-data-btn'),
  importFileInput: document.getElementById('import-file-input'),
  
  colorInputs: {
    personal: document.getElementById('color-input-personal'),
    school: document.getElementById('color-input-school'),
    work: document.getElementById('color-input-work'),
    health: document.getElementById('color-input-health')
  },
  colorDots: {
    personal: document.getElementById('color-dot-personal'),
    school: document.getElementById('color-dot-school'),
    work: document.getElementById('color-dot-work'),
    health: document.getElementById('color-dot-health')
  }
};

// ==========================================================================
// Apply Language to the entire UI
// ==========================================================================

function applyLanguage() {
  resolveLanguage();
  const lang = state._effectiveLang;

  // Update <html> lang attribute
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Sync language select dropdown
  if (DOM.languageSelect) {
    DOM.languageSelect.value = state.settings.language === 'auto' ? getEffectiveLanguage() : state.settings.language;
  }

  // Update all elements with data-i18n attribute (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });

  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (typeof val === 'string') {
      el.placeholder = val;
    }
  });

  // Update all elements with data-i18n-aria attribute
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = t(key);
    if (typeof val === 'string') {
      el.setAttribute('aria-label', val);
    }
  });
}

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSettings();
  initDatabase();
  initCalendarState();
  applyLanguage();
  renderWeekdays();
  renderCalendar(DOM.activeGrid, state.pivotDate);
  renderSelectedDayEvents();
  setupEventListeners();
  setupSwipeGestures();
  
  // Register Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
      });
    });
  }
  
  // Show swipe tour once
  if (!localStorage.getItem('three_week_swipe_tour_completed')) {
    DOM.swipeOverlay.classList.add('visible');
  }
});

// ==========================================================================
// Date Helper Functions
// ==========================================================================

function normalizeToMidnight(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateString(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatHumanDate(date) {
  const locale = t('dateLocale');
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString(locale, options);
}

function getStartOfWeek(date, startOfWeekIndex) {
  const d = new Date(date);
  const day = d.getDay();
  let diff = day - startOfWeekIndex;
  if (diff < 0) {
    diff += 7;
  }
  d.setDate(d.getDate() - diff);
  return normalizeToMidnight(d);
}

function generate21Days(startDate) {
  const days = [];
  const base = new Date(startDate);
  for (let i = 0; i < 21; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    days.push(normalizeToMidnight(d));
  }
  return days;
}

function addDays(date, daysCount) {
  const d = new Date(date);
  d.setDate(d.getDate() + daysCount);
  return normalizeToMidnight(d);
}

function isSameDay(date1, date2) {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

// ==========================================================================
// Settings & Database Persistence
// ==========================================================================

function initSettings() {
  const savedSettings = localStorage.getItem('three_week_cal_settings');
  if (savedSettings) {
    try {
      state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
    } catch (e) {
      console.error('Error parsing settings, resetting...', e);
    }
  }
  
  // If language was never set, auto-detect
  if (!state.settings.language) {
    state.settings.language = 'auto';
  }
  
  resolveLanguage();
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', state.settings.theme);
  
  // Apply Start of Week
  DOM.startDaySelect.value = state.settings.startOfWeek;
  
  // Apply Language select
  if (DOM.languageSelect) {
    DOM.languageSelect.value = state.settings.language === 'auto' ? getEffectiveLanguage() : state.settings.language;
  }
  
  // Apply colors
  Object.keys(state.settings.colors).forEach(cat => {
    document.documentElement.style.setProperty(`--${cat}-color`, state.settings.colors[cat]);
    if (DOM.colorInputs[cat]) {
      DOM.colorInputs[cat].value = state.settings.colors[cat];
    }
    if (DOM.colorDots[cat]) {
      DOM.colorDots[cat].style.backgroundColor = state.settings.colors[cat];
    }
  });
}

function saveSettings() {
  localStorage.setItem('three_week_cal_settings', JSON.stringify(state.settings));
}

function initDatabase() {
  const savedEvents = localStorage.getItem('three_week_cal_events');
  if (savedEvents) {
    try {
      state.events = JSON.parse(savedEvents);
    } catch (e) {
      console.error('Error parsing database events, resetting...', e);
      state.events = [];
    }
  } else {
    preloadMockData();
  }
}

function saveDatabase() {
  localStorage.setItem('three_week_cal_events', JSON.stringify(state.events));
}

function preloadMockData() {
  const today = normalizeToMidnight(new Date());
  const lang = state._effectiveLang || getEffectiveLanguage();
  const mockFn = i18n[lang].mockEvents;
  state.events = mockFn(today, addDays, formatDateString);
  saveDatabase();
}

function initCalendarState() {
  const today = normalizeToMidnight(new Date());
  state.selectedDate = today;
  state.pivotDate = getStartOfWeek(today, state.settings.startOfWeek);
}

// ==========================================================================
// UI Rendering
// ==========================================================================

function renderWeekdays() {
  const weekdaysShort = t('weekdaysShort');
  const weekdaysLong = t('weekdaysLong');
  
  DOM.weekdaysBar.innerHTML = '';
  
  for (let i = 0; i < 7; i++) {
    const idx = (i + state.settings.startOfWeek) % 7;
    const label = document.createElement('span');
    label.className = 'weekday-label';
    if (idx === 0 || idx === 6) {
      label.classList.add('weekend');
    }
    label.textContent = weekdaysShort[idx];
    label.title = weekdaysLong[idx];
    DOM.weekdaysBar.appendChild(label);
  }
}

function renderCalendar(gridElement, pivot) {
  gridElement.innerHTML = '';
  
  const days = generate21Days(pivot);
  const today = normalizeToMidnight(new Date());
  const locale = t('dateLocale');
  
  // Format Date Range header text
  const startDay = days[0];
  const endDay = days[20];
  
  let rangeText = '';
  const optMonth = { month: 'short' };
  const optYear = { year: 'numeric' };
  
  const startMonthStr = startDay.toLocaleDateString(locale, optMonth);
  const endMonthStr = endDay.toLocaleDateString(locale, optMonth);
  const startYearStr = startDay.toLocaleDateString(locale, optYear);
  const endYearStr = endDay.toLocaleDateString(locale, optYear);
  
  if (startYearStr !== endYearStr) {
    rangeText = `${startMonthStr} ${startDay.getDate()}, ${startYearStr} – ${endMonthStr} ${endDay.getDate()}, ${endYearStr}`;
  } else if (startMonthStr !== endMonthStr) {
    rangeText = `${startMonthStr} ${startDay.getDate()} – ${endMonthStr} ${endDay.getDate()}, ${startYearStr}`;
  } else {
    rangeText = `${startMonthStr} ${startDay.getDate()} – ${endDay.getDate()}, ${startYearStr}`;
  }
  
  DOM.dateRangeDisplay.textContent = rangeText;

  days.forEach((day, idx) => {
    const dateStr = formatDateString(day);
    const cell = document.createElement('div');
    cell.className = 'date-card';
    cell.setAttribute('data-date', dateStr);
    
    if (day.getMonth() !== pivot.getMonth()) {
      cell.classList.add('different-month');
    }
    
    if (isSameDay(day, today)) {
      cell.classList.add('today');
    }
    
    if (isSameDay(day, state.selectedDate)) {
      cell.classList.add('selected');
    }
    
    // Header row
    const header = document.createElement('div');
    header.className = 'date-card-header';
    
    const numEl = document.createElement('span');
    numEl.className = 'date-number';
    numEl.textContent = day.getDate();
    header.appendChild(numEl);
    
    // Month label on boundaries
    let showMonthLabel = false;
    if (idx === 0) {
      showMonthLabel = true;
    } else {
      const prevDay = days[idx - 1];
      if (day.getMonth() !== prevDay.getMonth()) {
        showMonthLabel = true;
      }
    }
    
    if (showMonthLabel) {
      const monthEl = document.createElement('span');
      monthEl.className = 'month-badge';
      monthEl.textContent = day.toLocaleDateString(locale, { month: 'short' });
      header.appendChild(monthEl);
    }
    
    cell.appendChild(header);
    
    // Events
    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'date-card-events';
    
    const dayEvents = getEventsForDate(dateStr);
    const maxVisible = 2;
    
    dayEvents.slice(0, maxVisible).forEach(evt => {
      const pill = document.createElement('div');
      pill.className = 'cell-event-pill';
      pill.style.backgroundColor = state.settings.colors[evt.category] || `var(--${evt.category}-color)`;
      pill.textContent = evt.title.replace(/^[^\p{L}\p{N}]+/u, '').trim();
      pill.title = `${evt.title} (${evt.time || t('allDay')})`;
      eventsContainer.appendChild(pill);
    });
    
    if (dayEvents.length > maxVisible) {
      const moreIndicator = document.createElement('div');
      moreIndicator.className = 'cell-more-indicator';
      moreIndicator.textContent = `+${dayEvents.length - maxVisible} ${t('moreEvents')}`;
      eventsContainer.appendChild(moreIndicator);
    }
    
    cell.appendChild(eventsContainer);
    
    cell.addEventListener('click', () => {
      selectDate(day);
    });
    
    cell.addEventListener('dblclick', () => {
      openAddEventForm(day);
    });
    
    gridElement.appendChild(cell);
  });
}

function getEventsForDate(dateStr) {
  return state.events
    .filter(evt => evt.date === dateStr)
    .sort((a, b) => {
      if (a.allDay && !b.allDay) return -1;
      if (!a.allDay && b.allDay) return 1;
      return a.time.localeCompare(b.time);
    });
}

function selectDate(date) {
  const oldSelected = state.selectedDate;
  state.selectedDate = date;
  
  const cards = DOM.activeGrid.querySelectorAll('.date-card');
  const oldStr = formatDateString(oldSelected);
  const newStr = formatDateString(date);
  
  cards.forEach(card => {
    const cardDate = card.getAttribute('data-date');
    if (cardDate === oldStr) {
      card.classList.remove('selected');
    }
    if (cardDate === newStr) {
      card.classList.add('selected');
    }
  });
  
  renderSelectedDayEvents();
}

function renderSelectedDayEvents() {
  const dateStr = formatDateString(state.selectedDate);
  const humanDate = formatHumanDate(state.selectedDate);
  
  DOM.selectedDayTitle.textContent = humanDate;
  
  const today = normalizeToMidnight(new Date());
  if (isSameDay(state.selectedDate, today)) {
    DOM.selectedDayBadge.textContent = t('today');
    DOM.selectedDayBadge.classList.remove('hidden');
  } else {
    DOM.selectedDayBadge.classList.add('hidden');
  }
  
  DOM.selectedEventsList.innerHTML = '';
  const dayEvents = getEventsForDate(dateStr);
  
  if (dayEvents.length === 0) {
    DOM.selectedEventsList.innerHTML = `
      <div class="empty-events-placeholder">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h4>${t('noEventsTitle')}</h4>
        <p>${t('noEventsDesc')}</p>
      </div>
    `;
    return;
  }
  
  dayEvents.forEach(evt => {
    const card = document.createElement('div');
    card.className = `event-item-card cat-${evt.category}`;
    card.style.borderLeftColor = state.settings.colors[evt.category] || `var(--${evt.category}-color)`;
    
    const timeContainer = document.createElement('div');
    timeContainer.className = 'event-item-time';
    
    const timeStart = document.createElement('span');
    timeStart.className = 'time-start';
    
    const timeType = document.createElement('span');
    timeType.className = 'time-type';
    
    if (evt.allDay) {
      timeStart.textContent = t('allDay');
      timeType.textContent = t('fullDay');
    } else {
      timeStart.textContent = format12HourTime(evt.time);
      timeType.textContent = t('timeLabel');
    }
    
    timeContainer.appendChild(timeStart);
    timeContainer.appendChild(timeType);
    card.appendChild(timeContainer);
    
    const infoContainer = document.createElement('div');
    infoContainer.className = 'event-item-info';
    
    const titleEl = document.createElement('span');
    titleEl.className = 'event-item-title';
    titleEl.textContent = evt.title;
    
    const notesEl = document.createElement('span');
    notesEl.className = 'event-item-notes';
    notesEl.textContent = evt.notes || t('noExtraNotes');
    if (!evt.notes) {
      notesEl.style.opacity = '0.5';
    }
    
    infoContainer.appendChild(titleEl);
    infoContainer.appendChild(notesEl);
    card.appendChild(infoContainer);
    
    card.addEventListener('click', () => {
      openEventDetails(evt);
    });
    
    DOM.selectedEventsList.appendChild(card);
  });
}

function format12HourTime(timeStr) {
  if (!timeStr) return '';
  const lang = state._effectiveLang || getEffectiveLanguage();
  const [hourStr, minStr] = timeStr.split(':');
  const hours = parseInt(hourStr, 10);
  
  if (lang === 'ko') {
    const period = hours >= 12 ? '오후' : '오전';
    const displayHours = hours % 12 || 12;
    return `${period} ${displayHours}:${minStr}`;
  }
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minStr} ${ampm}`;
}

// ==========================================================================
// Horizontal Swipe & Grid Transition Animation
// ==========================================================================

function shiftWeeks(weeksOffset) {
  if (state.isTransitioning) return;
  state.isTransitioning = true;
  
  const direction = weeksOffset > 0 ? 'left' : 'right';
  
  const nextPivot = addDays(state.pivotDate, weeksOffset * 7);
  renderCalendar(DOM.incomingGrid, nextPivot);
  
  DOM.incomingGrid.style.transition = 'none';
  if (direction === 'left') {
    DOM.incomingGrid.style.transform = 'translateX(100%)';
  } else {
    DOM.incomingGrid.style.transform = 'translateX(-100%)';
  }
  DOM.incomingGrid.style.opacity = '0';
  
  DOM.incomingGrid.offsetHeight;
  
  DOM.activeGrid.classList.add('transitioning');
  DOM.incomingGrid.classList.add('transitioning');
  DOM.incomingGrid.style.transition = '';
  
  if (direction === 'left') {
    DOM.activeGrid.classList.add('slide-left-out');
    DOM.incomingGrid.style.transform = 'translateX(0)';
    DOM.incomingGrid.style.opacity = '1';
  } else {
    DOM.activeGrid.classList.add('slide-right-out');
    DOM.incomingGrid.style.transform = 'translateX(0)';
    DOM.incomingGrid.style.opacity = '1';
  }
  
  state.pivotDate = nextPivot;
  
  setTimeout(() => {
    DOM.activeGrid.innerHTML = DOM.incomingGrid.innerHTML;
    
    DOM.activeGrid.classList.remove('transitioning', 'slide-left-out', 'slide-right-out');
    DOM.incomingGrid.classList.remove('transitioning');
    
    DOM.activeGrid.style.transform = 'translateX(0)';
    DOM.activeGrid.style.opacity = '1';
    DOM.incomingGrid.style.transform = 'translateX(100%)';
    DOM.incomingGrid.style.opacity = '0';
    
    renderCalendar(DOM.activeGrid, state.pivotDate);
    
    state.isTransitioning = false;
  }, 300);
}

// ==========================================================================
// Gesture Detection (Swiping)
// ==========================================================================

function setupSwipeGestures() {
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let threshold = 55;
  
  const onStart = (e) => {
    if (state.isTransitioning) return;
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
  };
  
  const onMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const currentY = e.clientY || e.touches[0].clientY;
    
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (e.cancelable) e.preventDefault();
    }
  };
  
  const onEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;
    
    const endX = e.clientX || (e.changedTouches ? e.changedTouches[0].clientX : null);
    const endY = e.clientY || (e.changedTouches ? e.changedTouches[0].clientY : null);
    
    if (endX === null) return;
    
    const diffX = endX - startX;
    const diffY = endY - startY;
    
    if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
      dismissSwipeTour();
      if (diffX < 0) {
        shiftWeeks(1);
      } else {
        shiftWeeks(-1);
      }
    }
  };
  
  const area = DOM.calendarViewport;
  area.addEventListener('touchstart', onStart, { passive: true });
  area.addEventListener('touchmove', onMove, { passive: false });
  area.addEventListener('touchend', onEnd, { passive: true });
  
  area.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
}

function dismissSwipeTour() {
  if (DOM.swipeOverlay.classList.contains('visible')) {
    DOM.swipeOverlay.classList.remove('visible');
    localStorage.setItem('three_week_swipe_tour_completed', 'true');
  }
}

// ==========================================================================
// Event Modals and Forms Operations
// ==========================================================================

function openBackdrop() {
  DOM.modalBackdrop.classList.add('active');
}

function closeBackdrop() {
  DOM.modalBackdrop.classList.remove('active');
}

function closeAllModals() {
  closeBackdrop();
  DOM.eventFormSheet.classList.remove('open');
  DOM.eventDetailModal.classList.remove('open');
  DOM.settingsSheet.classList.remove('open');
  
  // Reset any browser auto-scrolling caused by inputs or focus
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  const screen = document.querySelector('.device-screen');
  if (screen) screen.scrollTop = 0;
}

function openAddEventForm(date) {
  closeAllModals();
  
  const targetDate = date || state.selectedDate;
  
  DOM.eventIdField.value = '';
  DOM.eventTitleField.value = '';
  DOM.eventDateField.value = formatDateString(targetDate);
  DOM.eventTimeField.value = '12:00';
  DOM.eventAlldayField.checked = false;
  DOM.eventTimeField.disabled = false;
  DOM.eventNotesField.value = '';
  
  DOM.formTitle.textContent = t('createEvent');
  DOM.deleteFormBtn.classList.add('hidden');
  DOM.titleError.style.display = 'none';
  DOM.eventTitleField.classList.remove('invalid');
  
  const defaultRadio = DOM.eventForm.querySelector('input[name="category"][value="personal"]');
  if (defaultRadio) defaultRadio.checked = true;
  
  openBackdrop();
  DOM.eventFormSheet.classList.add('open');
  DOM.eventTitleField.focus({ preventScroll: true });
}

function openEditEventForm(evt) {
  closeAllModals();
  
  DOM.eventIdField.value = evt.id;
  DOM.eventTitleField.value = evt.title;
  DOM.eventDateField.value = evt.date;
  DOM.eventTimeField.value = evt.time || '';
  DOM.eventAlldayField.checked = evt.allDay || false;
  DOM.eventTimeField.disabled = evt.allDay || false;
  DOM.eventNotesField.value = evt.notes || '';
  
  DOM.formTitle.textContent = t('editEvent');
  DOM.deleteFormBtn.classList.remove('hidden');
  DOM.titleError.style.display = 'none';
  DOM.eventTitleField.classList.remove('invalid');
  
  const catRadio = DOM.eventForm.querySelector(`input[name="category"][value="${evt.category}"]`);
  if (catRadio) catRadio.checked = true;
  
  openBackdrop();
  DOM.eventFormSheet.classList.add('open');
}

function openEventDetails(evt) {
  closeAllModals();
  
  DOM.detailCategoryBadge.className = `badge ${evt.category}`;
  DOM.detailCategoryBadge.textContent = categoryName(evt.category);
  DOM.detailCategoryBadge.style.backgroundColor = state.settings.colors[evt.category] || `var(--${evt.category}-color)`;
  DOM.detailTitle.textContent = evt.title;
  
  const dateObj = new Date(evt.date);
  const timeText = evt.allDay ? t('allDay') : format12HourTime(evt.time);
  const dateAtTime = t('dateAtTime');
  DOM.detailDatetimeText.textContent = dateAtTime(formatHumanDate(dateObj), timeText);
  
  DOM.detailNotesText.textContent = evt.notes || t('noNotesAdded');
  
  DOM.editDetailBtn.onclick = () => openEditEventForm(evt);
  DOM.deleteDetailBtn.onclick = () => deleteEvent(evt.id);
  
  openBackdrop();
  DOM.eventDetailModal.classList.add('open');
}

function openSettings() {
  closeAllModals();
  openBackdrop();
  
  DOM.startDaySelect.value = state.settings.startOfWeek;
  if (DOM.languageSelect) {
    DOM.languageSelect.value = state.settings.language === 'auto' ? getEffectiveLanguage() : state.settings.language;
  }
  
  DOM.settingsSheet.classList.add('open');
  
  // Reset any scroll offsets
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  const screen = document.querySelector('.device-screen');
  if (screen) screen.scrollTop = 0;
}

// ==========================================================================
// CRUD operations
// ==========================================================================

function saveEventForm(e) {
  e.preventDefault();
  
  const title = DOM.eventTitleField.value.trim();
  const date = DOM.eventDateField.value;
  const allDay = DOM.eventAlldayField.checked;
  const time = allDay ? '' : DOM.eventTimeField.value;
  const category = DOM.eventForm.querySelector('input[name="category"]:checked').value;
  const notes = DOM.eventNotesField.value.trim();
  const id = DOM.eventIdField.value;
  
  if (!title) {
    DOM.eventTitleField.classList.add('invalid');
    DOM.titleError.style.display = 'block';
    return;
  }
  
  if (id) {
    const idx = state.events.findIndex(x => x.id === id);
    if (idx !== -1) {
      state.events[idx] = { id, title, date, time, allDay, category, notes };
    }
  } else {
    const newId = 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    state.events.push({ id: newId, title, date, time, allDay, category, notes });
  }
  
  saveDatabase();
  closeAllModals();
  
  const savedDate = new Date(date);
  state.selectedDate = savedDate;
  
  renderCalendar(DOM.activeGrid, state.pivotDate);
  renderSelectedDayEvents();
}

function deleteEvent(id) {
  if (confirm(t('confirmDelete'))) {
    state.events = state.events.filter(evt => evt.id !== id);
    saveDatabase();
    closeAllModals();
    renderCalendar(DOM.activeGrid, state.pivotDate);
    renderSelectedDayEvents();
  }
}

// ==========================================================================
// Database Utilities
// ==========================================================================

function clearDatabase() {
  if (confirm(t('confirmClearAll'))) {
    state.events = [];
    saveDatabase();
    closeAllModals();
    renderCalendar(DOM.activeGrid, state.pivotDate);
    renderSelectedDayEvents();
    alert(t('alertCleared'));
  }
}

function handleExportData() {
  const jsonStr = JSON.stringify(state.events, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `3week_calendar_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function handleImportClick() {
  DOM.importFileInput.click();
}

function handleImportFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (Array.isArray(data)) {
        const validated = data.filter(evt => evt.title && evt.date && evt.category);
        if (validated.length > 0) {
          const confirmMsg = t('confirmImport');
          if (confirm(confirmMsg(validated.length))) {
            const existingIds = new Set(state.events.map(x => x.id));
            validated.forEach(evt => {
              if (!evt.id) {
                evt.id = 'imported_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
              }
              if (!existingIds.has(evt.id)) {
                state.events.push(evt);
              }
            });
            saveDatabase();
            renderCalendar(DOM.activeGrid, state.pivotDate);
            renderSelectedDayEvents();
            alert(t('alertImportSuccess'));
            closeAllModals();
          }
        } else {
          alert(t('alertNoValidEvents'));
        }
      } else {
        alert(t('alertInvalidFormat'));
      }
    } catch (err) {
      const parseErrorMsg = t('alertParseError');
      alert(parseErrorMsg(err.message));
    }
    DOM.importFileInput.value = '';
  };
  reader.readAsText(file);
}

// ==========================================================================
// Event Listeners Mapping
// ==========================================================================

function setupEventListeners() {
  // Arrow buttons
  DOM.prevWeekBtn.addEventListener('click', () => shiftWeeks(-1));
  DOM.nextWeekBtn.addEventListener('click', () => shiftWeeks(1));
  
  // Today button
  DOM.todayBtn.addEventListener('click', () => {
    const today = normalizeToMidnight(new Date());
    state.selectedDate = today;
    state.pivotDate = getStartOfWeek(today, state.settings.startOfWeek);
    renderCalendar(DOM.activeGrid, state.pivotDate);
    renderSelectedDayEvents();
  });
  
  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }
    if (e.key === 'ArrowLeft') {
      shiftWeeks(-1);
    } else if (e.key === 'ArrowRight') {
      shiftWeeks(1);
    } else if (e.key === 't' || e.key === 'T') {
      DOM.todayBtn.click();
    }
  });

  // Settings
  DOM.settingsBtn.addEventListener('click', openSettings);
  DOM.closeSettingsBtn.addEventListener('click', closeAllModals);
  
  // FAB
  DOM.addEventBtn.addEventListener('click', () => openAddEventForm(state.selectedDate));
  
  // Modals & Backdrops
  DOM.modalBackdrop.addEventListener('click', closeAllModals);
  DOM.closeFormBtn.addEventListener('click', closeAllModals);
  DOM.closeDetailBtn.addEventListener('click', closeAllModals);
  DOM.swipeOverlay.addEventListener('click', dismissSwipeTour);
  
  // Form submission
  DOM.eventForm.addEventListener('submit', saveEventForm);
  DOM.deleteFormBtn.addEventListener('click', () => {
    const id = DOM.eventIdField.value;
    if (id) deleteEvent(id);
  });
  
  // All day checkbox
  DOM.eventAlldayField.addEventListener('change', (e) => {
    DOM.eventTimeField.disabled = e.target.checked;
  });
  
  // Clear error on typing
  DOM.eventTitleField.addEventListener('input', () => {
    DOM.eventTitleField.classList.remove('invalid');
    DOM.titleError.style.display = 'none';
  });
  
  // Theme toggle
  DOM.themeToggleBtn.addEventListener('click', () => {
    const newTheme = state.settings.theme === 'light' ? 'dark' : 'light';
    state.settings.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    saveSettings();
  });
  
  // Language selector
  if (DOM.languageSelect) {
    DOM.languageSelect.addEventListener('change', (e) => {
      const newLang = e.target.value; // 'en' or 'ko'
      state.settings.language = newLang;
      saveSettings();
      
      // Re-apply language to entire UI
      applyLanguage();
      renderWeekdays();
      renderCalendar(DOM.activeGrid, state.pivotDate);
      renderSelectedDayEvents();
    });
  }
  
  // Start of week
  DOM.startDaySelect.addEventListener('change', (e) => {
    const startOfWeekVal = parseInt(e.target.value, 10);
    state.settings.startOfWeek = startOfWeekVal;
    saveSettings();
    
    state.pivotDate = getStartOfWeek(state.selectedDate, startOfWeekVal);
    renderWeekdays();
    renderCalendar(DOM.activeGrid, state.pivotDate);
  });
  
  // Category Color Pickers
  Object.keys(DOM.colorInputs).forEach(cat => {
    DOM.colorInputs[cat].addEventListener('input', (e) => {
      const newColor = e.target.value;
      state.settings.colors[cat] = newColor;
      
      document.documentElement.style.setProperty(`--${cat}-color`, newColor);
      DOM.colorDots[cat].style.backgroundColor = newColor;
    });
    
    DOM.colorInputs[cat].addEventListener('change', () => {
      saveSettings();
      renderCalendar(DOM.activeGrid, state.pivotDate);
      renderSelectedDayEvents();
    });
    
    DOM.colorDots[cat].addEventListener('click', () => {
      DOM.colorInputs[cat].click();
    });
  });
  
  // Data management
  DOM.preloadDemoBtn.addEventListener('click', () => {
    if (confirm(t('confirmLoadDemo'))) {
      preloadMockData();
      renderCalendar(DOM.activeGrid, state.pivotDate);
      renderSelectedDayEvents();
      closeAllModals();
      alert(t('alertDemoLoaded'));
    }
  });
  
  DOM.clearDatabaseBtn.addEventListener('click', clearDatabase);
  DOM.exportDataBtn.addEventListener('click', handleExportData);
  DOM.importDataBtn.addEventListener('click', handleImportClick);
  DOM.importFileInput.addEventListener('change', handleImportFile);
}
