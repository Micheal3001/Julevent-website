'use strict';
// IMPORTANT: Enter the business WhatsApp number (international digits only, without +).
// Example format: 972501234567. Until configured, the form will show instructions.
const WHATSAPP_NUMBER = '972507901222';

const translations = {
  en: {
    navHome: 'Home', navAbout: 'About', navExperiences: 'Experiences', navGallery: 'Gallery', navBook: 'Book an Event', heroEyebrow: 'THE ART OF CELEBRATING', heroTitle: 'Little moments.<br>Beautiful memories.', heroDescription: 'Dreamy beach picnics, romantic surprises, and joyful family celebrations — styled with love, just for you.', heroCta: 'Plan Your Moment', heroSecondary: 'Explore Our Gallery', aboutEyebrow: '', aboutTitle: 'Every celebration deserves a little magic.', aboutBody: 'At JulEvents, we believe the most meaningful memories are made when people come together. We create charming outdoor experiences for couples and families, bringing thoughtful details, beautiful styling, and a personal touch to every occasion.', aboutBody2: 'From sunset dates on the beach to cozy celebrations in the park, we help turn your ideas into moments worth remembering.', aboutLink: "Let's make something beautiful →", experienceEyebrow: 'MADE FOR YOUR MOMENTS', experienceTitle: 'Choose your kind of magic', experienceSubtitle: 'Personalized setups designed for the people and moments you love.', card1Title: 'Romantic Dates', card1Body: 'Intimate sunset setups and unforgettable moments for two.', card2Title: 'Family Picnics', card2Body: 'Relaxed, playful outdoor gatherings made for togetherness.', card3Title: 'Special Occasions', card3Body: 'Proposals, birthdays, anniversaries, and sweet surprises.', cardCta: 'Plan this experience →', galleryEyebrow: 'Our Work', galleryTitle: 'Details That Make Memories', gallerySubtitle: "Touches of creativity and real moments we've turned into unforgettable memories.", bookingEyebrow: "LET'S CELEBRATE", bookingTitle: 'Tell us about your dream event.', bookingBody: "Share a few details and we'll help bring your vision to life. Your request will open in WhatsApp so you can send it directly to JulEvents.", bookingNote: 'Every celebration is unique. Dates and details are confirmed personally after we receive your request.', fieldName: 'Your name', fieldPhone: 'Phone number', fieldEvent: 'Event type', fieldGuests: 'Number of guests', fieldDate: 'Preferred date', fieldLocation: 'Preferred location', fieldNotes: 'Tell us more (optional)', namePlaceholder: 'Your full name', phonePlaceholder: 'Your phone number', guestsPlaceholder: 'e.g. 2', notesPlaceholder: 'Your ideas, occasion, preferred time...', eventPlaceholder: 'Choose an experience', eventRomantic: 'Romantic date', eventFamily: 'Family picnic', eventSpecial: 'Special occasion', eventOther: 'Something else', locationPlaceholder: 'Choose a location', locationBeach: 'Beach', locationPark: 'Park', locationFlexible: 'Open to suggestions', submitBooking: 'Send Request via WhatsApp ❤️', formHelp: 'Submitting opens WhatsApp with a prepared message. You must press Send there to deliver your request.', footerTagline: 'Thoughtful moments, beautifully made.', missingNumber: 'The site owner must add the WhatsApp business number in js/main.js before bookings can be sent.', popupBlocked: 'If WhatsApp did not open, please allow pop-ups and try again.', requestHeader: 'New JulEvents booking request', requestName: 'Name', requestPhone: 'Phone', requestEvent: 'Event', requestGuests: 'Guests', requestDate: 'Date', requestLocation: 'Location', requestNotes: 'Notes', none: 'None'
  },
  ar: {
    navHome: 'الرئيسية', navAbout: 'من نحن', navExperiences: 'تجاربنا', navGallery: 'معرض الصور', navBook: 'احجز مناسبتك', heroEyebrow: 'فنّ صناعة اللحظات', heroTitle: 'لحظات صغيرة.<br>ذكريات جميلة.', heroDescription: 'جلسات رومانسية على الشاطئ، مفاجآت مميزة واحتفالات عائلية مليئة بالفرح، بتفاصيل مصممة بحب خصيصًا لكم.', heroCta: 'خطط للحظتك', heroSecondary: 'شاهد معرض الصور', aboutEyebrow: '', aboutTitle: 'كل مناسبة تستحق لمسة من السحر.', aboutBody: 'في JulEvents نؤمن أن أجمل الذكريات تولد عندما نجتمع مع من نحب. نصمم تجارب خارجية مميزة للأزواج والعائلات مع الاهتمام بكل تفصيل ولمسة شخصية.', aboutBody2: 'من موعد رومانسي وقت الغروب على البحر إلى احتفال دافئ في الحديقة، نحول أفكاركم إلى ذكريات لا تُنسى.', aboutLink: 'خلّينا نصنع لحظة جميلة ←', experienceEyebrow: 'لحظات صُممت لأجلكم', experienceTitle: 'اختاروا تجربتكم المميزة', experienceSubtitle: 'جلسات وديكورات مخصصة لأجمل اللحظات مع أحبابكم.', card1Title: 'مواعيد رومانسية', card1Body: 'جلسات غروب حميمة ولحظات استثنائية لشخصين.', card2Title: 'نزهات عائلية', card2Body: 'لقاءات مريحة وممتعة في الهواء الطلق لكل العائلة.', card3Title: 'مناسبات خاصة', card3Body: 'طلبات زواج، أعياد ميلاد، ذكرى سنوية ومفاجآت.', cardCta: 'احجز هذه التجربة ←', galleryEyebrow: 'معرض أعمالنا', galleryTitle: 'تفاصيل تصنع الذكريات', gallerySubtitle: 'لمسات من إبداعنا، ولحظات حقيقية حوّلناها إلى ذكريات لا تُنسى.', bookingEyebrow: 'خلّينا نحتفل', bookingTitle: 'احكوا لنا عن مناسبتكم.', bookingBody: 'شاركونا بعض التفاصيل وسنساعدكم في تحويل فكرتكم إلى واقع. سيفتح طلبكم في واتساب لإرساله مباشرة إلى JulEvents.', bookingNote: 'كل مناسبة فريدة من نوعها. يتم تأكيد الموعد والتفاصيل بشكل شخصي بعد استلام الطلب.', fieldName: 'الاسم', fieldPhone: 'رقم الهاتف', fieldEvent: 'نوع المناسبة', fieldGuests: 'عدد الضيوف', fieldDate: 'التاريخ المفضل', fieldLocation: 'المكان المفضل', fieldNotes: 'تفاصيل إضافية (اختياري)', namePlaceholder: 'الاسم الكامل', phonePlaceholder: 'رقم هاتفك', guestsPlaceholder: 'مثلًا 2', notesPlaceholder: 'أفكاركم، المناسبة، الوقت المفضل...', eventPlaceholder: 'اختاروا التجربة', eventRomantic: 'موعد رومانسي', eventFamily: 'نزهة عائلية', eventSpecial: 'مناسبة خاصة', eventOther: 'شيء آخر', locationPlaceholder: 'اختاروا المكان', locationBeach: 'شاطئ البحر', locationPark: 'حديقة', locationFlexible: 'نرحب بالاقتراحات', submitBooking: 'إرسال الطلب عبر WhatsApp ❤️', formHelp: 'سيُفتح واتساب مع رسالة جاهزة. يجب الضغط على إرسال داخل واتساب لإتمام الطلب.', footerTagline: 'لحظات مميزة صُنعت بحب.', missingNumber: 'يجب على مالك الموقع إضافة رقم واتساب العمل في ملف js/main.js قبل إرسال الحجوزات.', popupBlocked: 'إذا لم يفتح واتساب، اسمح بالنوافذ المنبثقة وحاول مرة أخرى.', requestHeader: 'طلب حجز جديد من JulEvents', requestName: 'الاسم', requestPhone: 'الهاتف', requestEvent: 'المناسبة', requestGuests: 'الضيوف', requestDate: 'التاريخ', requestLocation: 'المكان', requestNotes: 'ملاحظات', none: 'لا يوجد'
  },
  he: {
    navHome: 'בית', navAbout: 'קצת עלינו', navExperiences: 'החוויות שלנו', navGallery: 'גלריה', navBook: 'הזמנת אירוע', heroEyebrow: 'אמנות הרגעים היפים', heroTitle: 'רגעים קטנים.<br>זיכרונות יפים.', heroDescription: 'פיקניקים קסומים בחוף, הפתעות רומנטיות וחגיגות משפחתיות משמחות — מעוצבים באהבה במיוחד בשבילכם.', heroCta: 'בואו נתכנן רגע', heroSecondary: 'לגלריה שלנו', aboutEyebrow: '', aboutTitle: 'לכל חגיגה מגיע קצת קסם.', aboutBody: 'ב-JulEvents אנחנו מאמינים שהזיכרונות הכי יפים נוצרים כשאנחנו יחד. אנחנו יוצרים חוויות מעוצבות בחוץ לזוגות ולמשפחות, עם תשומת לב לפרטים ונגיעה אישית.', aboutBody2: 'מדייט שקיעה בחוף ועד חגיגה נעימה בפארק, נהפוך את הרעיונות שלכם לרגעים שלא שוכחים.', aboutLink: 'בואו ניצור משהו יפה ←', experienceEyebrow: 'רגעים במיוחד בשבילכם', experienceTitle: 'בחרו את הקסם שלכם', experienceSubtitle: 'עיצובים וחוויות אישיות לאנשים ולרגעים שאתם אוהבים.', card1Title: 'דייטים רומנטיים', card1Body: 'עיצובי שקיעה אינטימיים ורגעים בלתי נשכחים לשניים.', card2Title: 'פיקניקים משפחתיים', card2Body: 'מפגשים נעימים ומהנים בחוץ לכל המשפחה.', card3Title: 'אירועים מיוחדים', card3Body: 'הצעות נישואין, ימי הולדת, ימי נישואין והפתעות.', cardCta: 'לתכנון החוויה ←', galleryEyebrow: 'העבודות שלנו', galleryTitle: 'פרטים שיוצרים זיכרונות', gallerySubtitle: 'נגיעות של יצירתיות ורגעים אמיתיים שהפכנו לזיכרונות בלתי נשכחים.', bookingEyebrow: 'בואו נחגוג', bookingTitle: 'ספרו לנו על האירוע שלכם.', bookingBody: 'שתפו אותנו בכמה פרטים ונעזור להגשים את החלום. הבקשה תיפתח ב-WhatsApp לשליחה ישירה ל-JulEvents.', bookingNote: 'כל אירוע הוא ייחודי. התאריך והפרטים יאושרו באופן אישי לאחר קבלת הבקשה.', fieldName: 'שם מלא', fieldPhone: 'מספר טלפון', fieldEvent: 'סוג האירוע', fieldGuests: 'מספר משתתפים', fieldDate: 'תאריך מועדף', fieldLocation: 'מיקום מועדף', fieldNotes: 'פרטים נוספים (לא חובה)', namePlaceholder: 'השם המלא שלכם', phonePlaceholder: 'מספר הטלפון שלכם', guestsPlaceholder: 'למשל 2', notesPlaceholder: 'רעיונות, סיבה לחגיגה, שעה מועדפת...', eventPlaceholder: 'בחרו חוויה', eventRomantic: 'דייט רומנטי', eventFamily: 'פיקניק משפחתי', eventSpecial: 'אירוע מיוחד', eventOther: 'משהו אחר', locationPlaceholder: 'בחרו מיקום', locationBeach: 'חוף הים', locationPark: 'פארק', locationFlexible: 'פתוחים להצעות', submitBooking: 'שליחת בקשה ב-WhatsApp ❤️', formHelp: 'WhatsApp ייפתח עם הודעה מוכנה. יש ללחוץ על שליחה ב-WhatsApp כדי להעביר את הבקשה.', footerTagline: 'רגעים מיוחדים שנוצרו באהבה.', missingNumber: 'בעלת האתר צריכה להוסיף מספר WhatsApp עסקי בקובץ js/main.js לפני שניתן לשלוח הזמנות.', popupBlocked: 'אם WhatsApp לא נפתח, אפשרו חלונות קופצים ונסו שוב.', requestHeader: 'בקשת הזמנה חדשה ל-JulEvents', requestName: 'שם', requestPhone: 'טלפון', requestEvent: 'אירוע', requestGuests: 'משתתפים', requestDate: 'תאריך', requestLocation: 'מיקום', requestNotes: 'הערות', none: 'אין'
  }
};

// Keep the Hebrew hero copy escaped so editors with a non-UTF-8 default
// encoding do not replace its characters with �.
translations.he.heroEyebrow = '\u05d0\u05de\u05e0\u05d5\u05ea \u05d4\u05e8\u05d2\u05e2\u05d9\u05dd \u05d4\u05d9\u05e4\u05d9\u05dd';
translations.he.heroTitle = '\u05e8\u05d2\u05e2\u05d9\u05dd \u05e7\u05d8\u05e0\u05d9\u05dd.<br>\u05d6\u05d9\u05db\u05e8\u05d5\u05e0\u05d5\u05ea \u05d9\u05e4\u05d9\u05dd.';
translations.he.heroDescription = '\u05e4\u05d9\u05e7\u05e0\u05d9\u05e7\u05d9\u05dd \u05e7\u05e1\u05d5\u05de\u05d9\u05dd \u05d1\u05d7\u05d5\u05e3, \u05d4\u05e4\u05ea\u05e2\u05d5\u05ea \u05e8\u05d5\u05de\u05e0\u05d8\u05d9\u05d5\u05ea \u05d5\u05d7\u05d2\u05d9\u05d2\u05d5\u05ea \u05de\u05e9\u05e4\u05d7\u05ea\u05d9\u05d5\u05ea \u05de\u05e9\u05de\u05d7\u05d5\u05ea \u2014 \u05de\u05e2\u05d5\u05e6\u05d1\u05d9\u05dd \u05d1\u05d0\u05d4\u05d1\u05d4 \u05d1\u05de\u05d9\u05d5\u05d7\u05d3 \u05d1\u05e9\u05d1\u05d9\u05dc\u05db\u05dd.';
translations.he.heroCta = '\u05d1\u05d5\u05d0\u05d5 \u05e0\u05ea\u05db\u05e0\u05df \u05e8\u05d2\u05e2';
translations.he.heroSecondary = '\u05dc\u05d2\u05dc\u05e8\u05d9\u05d4 \u05e9\u05dc\u05e0\u05d5';

const heroBadgeCopy = {
  en: 'Made with love ♡',
  he: '\u05e0\u05d5\u05e6\u05e8 \u05d1\u05d0\u05d4\u05d1\u05d4 \u2661',
  ar: '\u0635\u0646\u0639 \u0628\u062d\u0628 \u2661'
};

const addonCopy = {
  en: {
    title: 'Make it extra special', description: 'Optional treats to add to your celebration:',
    cake: 'Celebration cake — ₪150',
    selected: 'Add-ons'
  },
  he: {
    title: 'מוסיפים משהו מיוחד', description: 'תוספות לבחירה לחגיגה שלכם:',
    cake: 'עוגת חגיגה — 150 ₪',
    selected: 'תוספות'
  },
  ar: {
    title: 'أضيفوا لمسة مميزة', description: 'إضافات اختيارية لاحتفالكم:',
    cake: 'كعكة احتفال — 150 ₪', 
    selected: 'الإضافات'
  }
};

function openWhatsApp() {
    const phoneNumber = "972507901222"; // Replace with your number

const message = `שלום \u2066JulEvents\u2069! 🌸
אני מעוניין/ת להזמין אירוע.
אשמח לקבל פרטים נוספים על החבילות שלכם ועל התאריכים הפנויים.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

const langSelect = document.getElementById('languageSelect');
const nav = document.getElementById('siteNav');
const toggle = document.getElementById('menuToggle');
let currentLanguage = 'en';
const dateInput = document.getElementById('date');
const calendar = document.getElementById('dateCalendar');
const calendarTitle = calendar.querySelector('.calendar-title');
const calendarWeekdays = calendar.querySelector('.calendar-weekdays');
const calendarDays = calendar.querySelector('.calendar-days');
const calendarLocales = { en: 'en-GB', he: 'he-IL', ar: 'ar' };
const today = new Date();
today.setHours(0, 0, 0, 0);
let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = null;

function renderCalendar() {
  const locale = calendarLocales[currentLanguage];
  const monthName = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  calendarTitle.textContent = monthName.format(visibleMonth);
  calendarWeekdays.replaceChildren();
  calendarDays.replaceChildren();
  // Intl.Locale uses Monday=1 through Sunday=7; Date.getDay uses Sunday=0.
  const firstWeekday = (new Intl.Locale(locale).weekInfo?.firstDay || 1) % 7;
  const weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' });
  for (let i = 0; i < 7; i++) {
    const weekday = document.createElement('span');
    weekday.textContent = weekdayFormat.format(new Date(Date.UTC(2024, 0, 7 + ((firstWeekday + i) % 7))));
    calendarWeekdays.appendChild(weekday);
  }

  const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const offset = (firstDay.getDay() - firstWeekday + 7) % 7;
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
  for (let i = 0; i < 42; i++) {
    const dayNumber = i - offset + 1;
    const cell = document.createElement(dayNumber > 0 && dayNumber <= daysInMonth ? 'button' : 'span');
    if (cell.tagName === 'BUTTON') {
      const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), dayNumber);
      cell.type = 'button';
      cell.textContent = new Intl.NumberFormat(locale).format(dayNumber);
      cell.disabled = date < today;
      cell.setAttribute('aria-pressed', String(Boolean(selectedDate && date.toDateString() === selectedDate.toDateString())));
      if (selectedDate && date.toDateString() === selectedDate.toDateString()) cell.classList.add('selected');
      cell.addEventListener('click', () => {
        selectedDate = date;
        dateInput.value = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
        calendar.hidden = true;
        dateInput.setAttribute('aria-expanded', 'false');
      });
    }
    calendarDays.appendChild(cell);
  }
}

function moveCalendarMonth(amount) {
  visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + amount, 1);
  renderCalendar();
}

calendar.querySelector('.calendar-prev').addEventListener('click', () => moveCalendarMonth(-1));
calendar.querySelector('.calendar-next').addEventListener('click', () => moveCalendarMonth(1));
dateInput.addEventListener('click', () => {
  renderCalendar();
  calendar.hidden = false;
  dateInput.setAttribute('aria-expanded', 'true');
});
document.addEventListener('click', event => {
  if (!event.target.closest('.date-picker')) {
    calendar.hidden = true;
    dateInput.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !calendar.hidden) {
    calendar.hidden = true;
    dateInput.setAttribute('aria-expanded', 'false');
    dateInput.focus();
  }
});

function changeLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLanguage = lang;
  const sourceTranslations = translations[lang];
  const t = lang === 'en' ? sourceTranslations : Object.fromEntries(
    Object.entries(sourceTranslations).map(([key, value]) => [
      key,
      typeof value === 'string' ? value.replaceAll('JulEvents', '\u2066JulEvents\u2069') : value
    ])
  );
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  dateInput.dir = lang === 'en' ? 'ltr' : 'rtl';
  if (selectedDate) dateInput.value = new Intl.DateTimeFormat(calendarLocales[lang], {
    day: '2-digit', month: '2-digit', year: 'numeric'
  }).format(selectedDate);
  calendar.dir = lang === 'en' ? 'ltr' : 'rtl';
  calendar.setAttribute('aria-label', ({ en: 'Choose a date', he: 'בחירת תאריך', ar: 'اختر تاريخًا' })[lang]);
  calendar.querySelector('.calendar-prev').setAttribute('aria-label', ({ en: 'Previous month', he: 'החודש הקודם', ar: 'الشهر السابق' })[lang]);
  calendar.querySelector('.calendar-next').setAttribute('aria-label', ({ en: 'Next month', he: 'החודש הבא', ar: 'الشهر التالي' })[lang]);
  document.title = `JulEvents | ${t.heroTitle.replace(/<br\s*\/?\s*>/g, ' ')}`;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(t, key)) {
      if (key === 'heroTitle') el.innerHTML = t[key];
      else el.textContent = t[key];
    }
  });
  const heroBadge = document.querySelector('[data-hero-badge]');
  heroBadge.textContent = heroBadgeCopy[lang];
  heroBadge.dir = lang === 'en' ? 'ltr' : 'rtl';
  document.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t[el.dataset.placeholder] || ''; });
  document.querySelectorAll('[data-addon-i18n]').forEach(el => {
    el.textContent = addonCopy[lang][el.dataset.addonI18n];
  });
  renderCalendar();
  langSelect.value = lang;
  try { localStorage.setItem('julevents-language', lang); } catch (_) { }
}
langSelect.addEventListener('change', e => changeLanguage(e.target.value));
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }));
document.querySelectorAll('[data-event]').forEach(a => a.addEventListener('click', () => { document.getElementById('eventType').value = a.dataset.event; }));
document.getElementById('year').textContent = new Date().getFullYear();
// Open the site in Hebrew each time; changeLanguage still remembers a choice
// during the current page session, but startup always uses Hebrew.
changeLanguage('he');

document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const t = translations[currentLanguage];
  const status = document.getElementById('formStatus');
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    status.textContent = t.missingNumber;
    status.style.color = '#b42355';
    return;
  }
  const get = id => document.getElementById(id).value.trim();
  const heart = '\u2661';
  const messageHeading = currentLanguage === 'en'
    ? `${heart} ${t.requestHeader}`
    : `${t.requestHeader} ${heart}`;
  const eventKey = { romantic: 'eventRomantic', family: 'eventFamily', special: 'eventSpecial', other: 'eventOther' }[get('eventType')];
  const locationKey = { beach: 'locationBeach', park: 'locationPark', flexible: 'locationFlexible' }[get('location')];
  const selectedAddons = [...form.querySelectorAll('[name="addons"]:checked')];
  const lines = [
    messageHeading,
    `${t.requestName}: ${get('name')}`,
    `${t.requestPhone}: ${get('phone')}`,
    `${t.requestEvent}: ${t[eventKey]}`,
    `${t.requestGuests}: ${get('guests')}`,
    `${t.requestDate}: ${get('date')}`,
    `${t.requestLocation}: ${t[locationKey]}`,
    `${addonCopy[currentLanguage].selected}: ${selectedAddons.length
      ? selectedAddons.map(item => addonCopy[currentLanguage][item.value]).join(', ')
      : t.none}`,
    `${t.requestNotes}: ${get('notes') || t.none}`
  ];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  // Direct navigation works better on mobile and avoids popup blockers.
  window.location.href = url;
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".gallery-slide");
    const prev = document.querySelector(".gallery-prev");
    const next = document.querySelector(".gallery-next");
    const dotsContainer = document.querySelector(".gallery-dots");

    if (!slides.length || !prev || !next || !dotsContainer) return;

    let currentSlide = 0;
    let interval;

    // Create navigation dots
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.classList.add("gallery-dot");
        dot.setAttribute("aria-label", `Go to image ${index + 1}`);

        dot.addEventListener("click", () => {
            showSlide(index);
            restartSlider();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".gallery-dot");

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentSlide);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    function startSlider() {
        interval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4500); // Change slide every 4.5 seconds
    }

    function restartSlider() {
        clearInterval(interval);
        startSlider();
    }

    prev.addEventListener("click", () => {
        // Dots are displayed right-to-left, so advancing the slide moves the
        // active dot physically to the left with the left arrow.
        showSlide(currentSlide + 1);
        restartSlider();
    });

    next.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        restartSlider();
    });

    showSlide(0);
    startSlider();
});



