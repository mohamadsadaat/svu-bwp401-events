'use strict';

// بيانات تجريبية موحدة لجميع الصفحات؛ التوقيت المحلي للفعاليات هو توقيت دمشق.
const EVENTS = [
  {id:'tech',imageAlt:'فريق يعمل على حواسيب محمولة حول طاولة، صورة توضيحية لملتقى الابتكار والذكاء الاصطناعي',title:'ملتقى الابتكار والذكاء الاصطناعي',category:'تكنولوجيا',date:'2026-10-15',start:'10:00',end:'14:00',place:'دمشق · قاعة الابتكار',image:'photo-1519389950473-47ba0277781c',summary:'من الفكرة إلى النموذج الأولي: يوم يجمع العقول الفضولية وصنّاع المستقبل.',description:'انضم إلى تجربة تجمع الطلبة والمهتمين بالتقنية لاستكشاف تطبيقات الذكاء الاصطناعي في التعلم والعمل. نتعرف إلى أسس بناء حلول مسؤولة، ثم ننتقل إلى مجموعات صغيرة لتطوير أفكار قابلة للتطبيق وعرضها للنقاش. لا تحتاج إلى خبرة برمجية متقدمة؛ أحضر حاسوبك وفضولك واستعدادك للتعاون.',agenda:[['10:00','استقبال المشاركين والتعارف'],['10:30','جلسة: الذكاء الاصطناعي في حياتنا الجامعية'],['11:30','ورشة تصميم نموذج أولي ضمن فرق'],['13:00','عرض الأفكار ونقاش مفتوح'],['14:00','ختام الملتقى']],tags:['innovation','learning']},
  {id:'culture',imageAlt:'رفوف مكتبة مليئة بالكتب، صورة توضيحية للقاء نادي القراءة',title:'بين السطور: لقاء نادي القراءة',category:'ثقافة',date:'2026-10-14',start:'16:00',end:'18:00',place:'دمشق · المكتبة الثقافية',image:'photo-1507842217343-583bb7270b66',summary:'كتاب واحد، ووجهات نظر كثيرة. مساحة للحوار وتبادل القصص والأفكار.',description:'لقاء مفتوح لمحبي القراءة لمناقشة أثر الأدب في فهم المجتمع والذات. يشارك كل طالب فقرة ألهمته من كتاب يختاره، ثم ندير حواراً تفاعلياً حول اختلاف القراءات. نختتم اللقاء بتبادل ترشيحات الكتب وتشكيل مجموعات قراءة صغيرة. المشاركة متاحة للجميع ولا تشترط قراءة كتاب محدد مسبقاً.',agenda:[['16:00','ترحيب وتعريف بنادي القراءة'],['16:20','قراءات قصيرة من اختيارات المشاركين'],['17:00','حوار حول الأدب والمجتمع'],['17:40','تبادل الكتب والترشيحات'],['18:00','ختام اللقاء']],tags:['arts','community']},
  {id:'sport',imageAlt:'كرة قدم على عشب الملعب، صورة توضيحية لبطولة الجامعة',title:'بطولة الجامعة لكرة القدم',category:'رياضة',date:'2026-10-16',start:'09:00',end:'13:00',place:'دمشق · الملعب الرياضي',image:'photo-1574629810360-7efbbe195018',summary:'روح الفريق أولاً. شجّع أصدقاءك وشارك يوماً مليئاً بالحماس واللعب النظيف.',description:'يوم رياضي طلابي يعزز التعاون واللياقة والروح الرياضية. تبدأ الفرق بإحماء جماعي وتعريف بقواعد اللعب العادل، ثم تتنافس في مباريات قصيرة وصولاً إلى النهائي. يمكن حضور الفعالية للتشجيع أيضاً. يُرجى ارتداء ملابس رياضية مناسبة وإحضار الماء؛ التسجيل في الفريق يُنسّق مع المنظم يوم الفعالية.',agenda:[['09:00','تسجيل الفرق والإحماء'],['09:30','مباريات المجموعات'],['11:00','استراحة ومسابقة مهارات'],['11:45','المباراة النهائية'],['12:45','تكريم الفرق'],['13:00','نهاية اليوم الرياضي']],tags:['community','outdoor']},
  {id:'music',imageAlt:'ميكروفون على المسرح، صورة توضيحية لأمسية المواهب الموسيقية',title:'أمسية نغم: مواهب على المسرح',category:'موسيقى',date:'2026-10-17',start:'18:00',end:'20:00',place:'دمشق · المسرح الثقافي',image:'photo-1516280440614-37939bbacd81',summary:'نلتقي على إيقاع الإبداع، مع عروض حية تقدمها المواهب الطلابية.',description:'أمسية تحتفي بالإبداع الموسيقي الطلابي من خلال فقرات فردية وجماعية متنوعة. نستمع إلى تجارب أصحاب المواهب، ونتعرف إلى رحلتهم في التعلم والتدريب. يلتزم الحضور باحترام المؤدين وحقوق الأعمال، ويُطلب الاستئذان قبل تصوير المشاركين. تُخصص نهاية الأمسية لحوار مع العازفين.',agenda:[['18:00','فتح الأبواب واستقبال الجمهور'],['18:15','فقرات العزف الفردي'],['19:00','العرض الجماعي'],['19:40','حوار مع أصحاب المواهب'],['20:00','ختام الأمسية']],tags:['arts','community']},
  {id:'family',imageAlt:'عائلة تجتمع في أجواء ودية، صورة توضيحية ليوم العائلة الجامعية',title:'يوم العائلة الجامعية',category:'عائلي',date:'2026-10-18',start:'11:00',end:'15:00',place:'دمشق · الحديقة التعليمية',image:'photo-1511632765486-a01980e01a18',summary:'وقت أجمل معاً: أنشطة إبداعية وألعاب تعاونية للطلاب وعائلاتهم.',description:'لقاء اجتماعي يتيح للطلاب مشاركة أجواء المجتمع الجامعي مع عائلاتهم. يضم اليوم زوايا للرسم وألعاباً جماعية ومساحة للتعارف. الأنشطة مصممة لتشجيع التعاون بين الأعمار المختلفة، ويجب أن يكون الأطفال برفقة شخص بالغ مسؤول عنهم طوال الوقت. أحضر وجبتك الخفيفة وشاركنا يوماً ودياً في الهواء الطلق.',agenda:[['11:00','الاستقبال وجولة تعريفية'],['11:30','ورش الرسم والأعمال اليدوية'],['12:30','ألعاب الفرق والعائلة'],['13:30','استراحة ونشاط تعارف'],['14:15','معرض إبداعات المشاركين'],['15:00','الختام']],tags:['community','outdoor']},
  {id:'academic',imageAlt:'أوراق ومراجع بحثية على مكتب، صورة توضيحية لورشة البحث العلمي',title:'من السؤال إلى البحث العلمي',category:'أكاديمي',date:'2026-10-20',start:'15:00',end:'18:00',place:'عبر الإنترنت · قاعة التعلم الافتراضي',image:'photo-1456324504439-367cee3b3c32',summary:'خطوتك الأولى لبحث متين: صياغة السؤال، اختيار المصادر، والتوثيق الصحيح.',description:'ورشة عملية تساعد الطلاب على تحويل اهتماماتهم إلى أسئلة بحثية واضحة. نناقش تقييم المصادر وتنظيم المراجع وأساسيات الأمانة العلمية، ثم نطبق ذلك على مثال بحثي صغير. الفعالية افتراضية ويُرسل رابط الحضور في النسخة التشغيلية من المنصة فقط؛ نموذج المشروع لا يرسل رسائل فعلية.',agenda:[['15:00','مقدمة عن خطوات البحث العلمي'],['15:30','صياغة سؤال البحث واختيار المنهج'],['16:15','تقييم المصادر وتوثيق المراجع'],['17:00','تطبيق عملي وأسئلة المشاركين'],['18:00','ختام الورشة']],tags:['learning','innovation']}
];
const CATEGORY_CLASSES = {'ثقافة':'cat-culture','ورش عمل':'cat-workshop','تكنولوجيا':'cat-tech','موسيقى':'cat-music','رياضة':'cat-sport','عائلي':'cat-family','أكاديمي':'cat-academic'};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// قراءة التخزين بأمان عند تعطيله أو احتوائه على بيانات تالفة.
function readStorage(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
// حفظ التفضيلات دون تعطيل الموقع في وضع التصفح المقيد.
function saveStorage(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* يستمر الموقع دون حفظ التفضيلات عند حظر التخزين. */ } }
// ترميز النصوص قبل إدراجها في قوالب HTML.
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
// إنشاء رابط صورة Unsplash بمقاس ملائم.
function photoUrl(photo, width = 900) { return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`; }
// تنسيق التاريخ بالعربية دون تغيير اليوم حسب المنطقة الزمنية.
function formatDate(date) { return new Intl.DateTimeFormat('ar-SY', {day:'numeric',month:'long',year:'numeric'}).format(new Date(`${date}T12:00:00+03:00`)); }
// توحيد النص العربي لتحسين البحث مع تجاهل التشكيل واختلاف الألف.
function normalizeText(text) { return text.trim().toLowerCase().replace(/[\u064B-\u065F\u0670ـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي'); }
// إعداد الوضع الليلي واسترجاع الخيار المحفوظ أو تفضيل نظام التشغيل.
function initTheme() {
  const button = document.getElementById('theme-toggle');
  let dark = readStorage('svu-theme', null);
  if (typeof dark !== 'boolean') dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // تطبيق ألوان الصفحة وحالة الزر الدلالية معاً.
  function applyTheme(value) {
    document.body.classList.toggle('dark-theme', value);
    document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light');
    button.setAttribute('aria-pressed', String(value));
    button.setAttribute('aria-label', value ? 'تفعيل الوضع النهاري' : 'تفعيل الوضع الليلي');
    button.innerHTML = value ? '☀ <span>الوضع النهاري</span>' : '☾ <span>الوضع الليلي</span>';
  }
  applyTheme(dark);
  button.addEventListener('click', () => { dark = !dark; applyTheme(dark); saveStorage('svu-theme',dark); });
}
// إنشاء بطاقة واحدة قابلة لإعادة الاستخدام في صفحات الدليل.
function eventCard(event, columns = 'col-md-6 col-lg-4') {
  return `<div class="${columns}"><article class="event-card"><div class="card-image"><img decoding="async" src="${photoUrl(event.image,700)}" alt="${escapeHTML(event.imageAlt)}" width="700" height="420" loading="lazy"><time class="date-chip" datetime="${event.date}"><strong>${event.date.slice(8)}</strong>أكتوبر</time></div><div class="event-body"><span class="category-badge ${CATEGORY_CLASSES[event.category] || ''}">${event.category}</span><h3><a href="event.html?id=${event.id}">${event.title}</a></h3><div class="event-meta">◷ ${formatDate(event.date)} · ${event.start}</div><div class="event-meta">⌖ ${event.place}</div><p>${event.summary}</p><a class="event-link" href="event.html?id=${event.id}" aria-label="تفاصيل ${event.title}">اكتشف الفعالية <span aria-hidden="true">←</span></a></div></article></div>`;
}
// عرض سلايدر الرئيسية وأحدث أربع فعاليات.
function initHome() {
  const slides = document.getElementById('hero-slides');
  if (!slides) return;
  slides.innerHTML = [EVENTS[0],EVENTS[2],EVENTS[3]].map((event,index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}"><article class="hero-slide"><img decoding="async" src="${photoUrl(event.image,1600)}" alt="${escapeHTML(event.imageAlt)}" width="1600" height="700" ${index ? 'loading="lazy"' : 'loading="eager" fetchpriority="high"'}><div class="hero-copy"><span class="category-badge ${CATEGORY_CLASSES[event.category] || ''}">${event.category}</span><h3>${event.title}</h3><p>${formatDate(event.date)} &nbsp; / &nbsp; ${event.place}</p><a href="event.html?id=${event.id}" class="btn">اكتشف التفاصيل ↖</a></div></article></div>`).join('');
  document.getElementById('latest-events').innerHTML = [...EVENTS].sort((a,b) => b.date.localeCompare(a.date)).slice(0,4).map(event => eventCard(event,'col-md-6 col-xl-3')).join('');
}
// فلترة البيانات باستخدام تقاطع الاسم والتصنيف والتاريخ.
function filterEvents(filters) {
  return EVENTS.filter(event => normalizeText(event.title).includes(normalizeText(filters.search || '')) && (!filters.category || event.category === filters.category) && (!filters.date || event.date === filters.date));
}
// ربط حقول البحث بالنتائج فورياً وحفظ الفلاتر، مع أولوية روابط التصنيفات المباشرة.
function initFilters() {
  const form = document.getElementById('filter-form');
  if (!form) return;
  const search = document.getElementById('search'), category = document.getElementById('category'), date = document.getElementById('date');
  const saved = readStorage('svu-filters', {});
  const params = new URLSearchParams(location.search);
  if (params.has('category')) category.value = params.get('category');
  else if (saved && typeof saved === 'object') {
    search.value = typeof saved.search === 'string' ? saved.search.slice(0,100) : '';
    category.value = typeof saved.category === 'string' ? saved.category : '';
    date.value = typeof saved.date === 'string' ? saved.date : '';
  }
  // تحديث الشبكة والعداد وحالة عدم وجود نتائج بعد كل تغيير.
  function renderResults() {
    const filters = {search:search.value,category:category.value,date:date.value};
    const result = filterEvents(filters);
    document.getElementById('events-grid').innerHTML = result.map(event => eventCard(event)).join('');
    document.getElementById('result-count').textContent = `${result.length} من ${EVENTS.length} فعاليات`;
    document.getElementById('empty-state').hidden = result.length !== 0;
    saveStorage('svu-filters', filters);
  }
  // إعادة تعيين الحقول والرابط لمنع استعادة تصنيف قديم عند إعادة التحميل.
  function clearFilters() {
    search.value = ''; category.value = ''; date.value = '';
    const url = new URL(location.href); url.search = ''; history.replaceState(null,'',url);
    renderResults();
  }
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', renderResults);
  category.addEventListener('change', () => {
    const url = new URL(location.href);
    if (category.value) url.searchParams.set('category',category.value); else url.searchParams.delete('category');
    history.replaceState(null,'',url); renderResults();
  });
  date.addEventListener('change',renderResults);
  form.addEventListener('reset', event => { event.preventDefault(); clearFilters(); });
  document.getElementById('clear-filters').addEventListener('click',clearFilters);
  renderResults();
}
// عرض تنبيه Bootstrap بنص آمن يمكن لقارئات الشاشة الإعلان عنه.
function showAlert(target, message, type = 'success') {
  target.replaceChildren();
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`; alert.setAttribute('role',type === 'danger' ? 'alert' : 'status');
  alert.textContent = message; target.append(alert);
}
// فحص الاسم الثلاثي والبريد وإظهار حالة الخطأ على الحقل نفسه.
function validateIdentity(nameInput, emailInput) {
  const validName = nameInput.value.trim().split(/\s+/).length >= 3;
  const validEmail = EMAIL_PATTERN.test(emailInput.value.trim());
  nameInput.classList.toggle('is-invalid',!validName); emailInput.classList.toggle('is-invalid',!validEmail);
  nameInput.setAttribute('aria-invalid',String(!validName)); emailInput.setAttribute('aria-invalid',String(!validEmail));
  return validName && validEmail;
}
// التحقق من نموذج التواصل محلياً ومسح الحقول عند النجاح.
function initContact() {
  const form = document.getElementById('contact-form'); if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    let valid = validateIdentity(document.getElementById('contact-name'),document.getElementById('contact-email'));
    ['contact-category','contact-message'].forEach(id => {
      const field = document.getElementById(id), filled = Boolean(field.value.trim());
      field.classList.toggle('is-invalid',!filled); field.setAttribute('aria-invalid',String(!filled)); valid = valid && filled;
    });
    if (!valid) { showAlert(document.getElementById('contact-alert'),'يرجى إدخال الاسم الثلاثي وبريد إلكتروني صحيح وإكمال جميع الحقول.','danger'); form.querySelector('.is-invalid').focus(); return; }
    showAlert(document.getElementById('contact-alert'),'تم التحقق من رسالتك بنجاح. شكراً لتواصلك! هذه محاكاة تعليمية ولم تُرسل الرسالة فعلياً.');
    form.reset();
  });
}
// تحويل تاريخ الفعالية من توقيت دمشق إلى تنسيق UTC القياسي للتقويم.
function calendarTime(date, time) { return new Date(`${date}T${time}:00+03:00`).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z'); }
// حماية أحرف النص الخاصة في ملفات iCalendar.
function escapeICS(text) { return text.replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,'); }
// طي أسطر التقويم حسب حد 75 بايت مع الحفاظ على أحرف UTF-8 العربية.
function foldICS(line) {
  const encoder = new TextEncoder(); let output = '', size = 0;
  for (const character of line) { const length = encoder.encode(character).length; if (size + length > 75) { output += '\r\n '; size = 1; } output += character; size += length; }
  return output;
}
// إنشاء ملف تقويم حقيقي يحتوي على تذكير قبل بداية الفعالية بنصف ساعة.
function downloadCalendar(event) {
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//SVU Student Events//BWP401//AR','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${event.id}-2026@svu-student-guide.example`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')}`,`DTSTART:${calendarTime(event.date,event.start)}`,`DTEND:${calendarTime(event.date,event.end)}`,`SUMMARY:${escapeICS(event.title)}`,`LOCATION:${escapeICS(event.place)}`,`DESCRIPTION:${escapeICS(event.summary)}`,'BEGIN:VALARM','TRIGGER:-PT30M','ACTION:DISPLAY',`DESCRIPTION:${escapeICS(event.title)}`,'END:VALARM','END:VEVENT','END:VCALENDAR'];
  const blob = new Blob([lines.map(foldICS).join('\r\n') + '\r\n'],{type:'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob), anchor = document.createElement('a');
  anchor.href = url; anchor.download = `${event.id}.ics`; document.body.append(anchor); anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url),1000);
  showAlert(document.getElementById('event-alert'),'تم تجهيز ملف التقويم للتنزيل مع تذكير قبل الفعالية بنصف ساعة.');
}
// نسخ رابط الفعالية وإتاحة بديل يدوي إذا لم يسمح المتصفح بالحافظة.
async function shareEvent(event) {
  const url = new URL('event.html',location.href); url.searchParams.set('id',event.id);
  const target = document.getElementById('event-alert');
  try { await navigator.clipboard.writeText(url.href); showAlert(target,'تم نسخ رابط الفعالية إلى الحافظة. شاركه مع أصدقائك!'); }
  catch { showAlert(target,'تعذر النسخ التلقائي. انسخ الرابط من الحقل التالي:','warning'); const input = document.createElement('input'); input.className='form-control'; input.readOnly=true; input.dir='ltr'; input.value=url.href; input.setAttribute('aria-label','رابط الفعالية للمشاركة'); target.append(input); input.focus(); input.select(); }
}
// بناء التفاصيل والمعرض والجدول والموقع المقترح للفعالية المطلوبة.
function initEvent() {
  const target = document.getElementById('event-detail'); if (!target) return;
  const id = new URLSearchParams(location.search).get('id');
  const event = id === null ? EVENTS[0] : EVENTS.find(item => item.id === id);
  if (!event) { target.innerHTML='<div class="empty-state"><h1>الفعالية غير موجودة</h1><p>قد يكون الرابط غير صحيح. اختر فعالية من الدليل.</p><a class="btn btn-primary" href="events.html">العودة إلى الفعاليات</a></div>'; document.getElementById('related-events').closest('section').hidden=true; return; }
  document.title = `${event.title} | دليل فعاليات الجامعة الافتراضية`;
  document.querySelector('meta[name="description"]').content = `${event.summary} الموعد: ${formatDate(event.date)}. المكان: ${event.place}.`;
  const gallery = [{image:event.image,alt:event.imageAlt},{image:'photo-1523240795612-9a054b0db644',alt:'طلاب يتبادلون الأفكار حول طاولة في مساحة جامعية، صورة توضيحية للتعاون'},{image:'photo-1516321318423-f06f85e504b3',alt:'حواسيب وأدوات عمل في مساحة مشتركة، صورة توضيحية للتعلم'}];
  target.innerHTML=`<section><span class="category-badge ${CATEGORY_CLASSES[event.category] || ''}">${event.category}</span><h1 class="detail-title">${event.title}</h1><div class="detail-meta"><time datetime="${event.date}">◷ ${formatDate(event.date)}</time><span>${event.start} — ${event.end} (توقيت دمشق)</span><span>⌖ ${event.place}</span></div><img decoding="async" class="detail-cover" src="${photoUrl(event.image,1500)}" alt="${escapeHTML(event.imageAlt)}" width="1500" height="700" loading="eager" fetchpriority="high"></section><div class="row g-4"><div class="col-lg-8"><section class="mb-5"><span class="eyebrow">عن التجربة</span><h2>ما الذي ينتظرك؟</h2><p class="muted">${event.description}</p></section><section class="mb-5"><h2 class="h4 mb-3">لمحات من الأجواء</h2><div class="gallery">${gallery.map((photo) => `<img decoding="async" src="${photoUrl(photo.image,500)}" alt="${escapeHTML(photo.alt)}" width="500" height="350" loading="lazy">`).join('')}</div><p class="small muted mt-2">صور توضيحية من Unsplash، وليست توثيقاً لفعالية سابقة.</p></section><section class="mb-5"><h2 class="h4">جدول الأعمال</h2><ol class="agenda">${event.agenda.map(([time,title]) => `<li><time datetime="${event.date}T${time}:00+03:00">${time}</time><span>${title}</span></li>`).join('')}</ol></section><section><h2 class="h4 mb-3">مكان الفعالية</h2><div class="venue-map" role="img" aria-label="رسم توضيحي لمكان الفعالية، وليس خريطة ملاحة"><div class="map-pin"><span aria-hidden="true">⌖</span><strong>${event.place}</strong><small>${event.id === 'academic' ? 'حضور عبر الإنترنت · رابط افتراضي غير منشور' : 'موقع تجريبي · مخطط توضيحي غير مخصص للملاحة'}</small></div></div></section></div><aside class="col-lg-4"><div class="info-card booking-panel"><span class="eyebrow">مكانك بيننا</span><strong>المشاركة مجانية</strong><p class="mt-2">تجربة جديدة، ومعرفة تستحق المشاركة.</p><hr><p>◷ ${formatDate(event.date)}<br>⌖ ${event.place}</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#booking-modal">حجز مقعد ↖</button><button id="calendar-button" type="button" class="btn btn-outline-primary">＋ أضف للتقويم</button><button id="share-button" type="button" class="btn btn-outline-primary">↗ مشاركة الفعالية</button><p class="small mt-3 mb-0">هذه فعالية توضيحية ضمن مشروع جامعي؛ الحجز محاكاة فقط.</p></div></aside></div>`;
  const related = EVENTS.filter(item => item.id !== event.id).sort((a,b) => b.tags.filter(tag => event.tags.includes(tag)).length - a.tags.filter(tag => event.tags.includes(tag)).length).slice(0,3);
  document.getElementById('related-events').innerHTML = related.map(item => eventCard(item)).join('');
  document.getElementById('calendar-button').addEventListener('click',() => downloadCalendar(event));
  document.getElementById('share-button').addEventListener('click',() => shareEvent(event));
  initBooking(event);
}
// التحقق من الحجز التجريبي ثم إغلاق نافذة Bootstrap وإظهار رسالة النجاح.
function initBooking(event) {
  const form = document.getElementById('booking-form'), modal = document.getElementById('booking-modal');
  document.getElementById('booking-event-name').textContent = event.title;
  modal.addEventListener('shown.bs.modal',() => document.getElementById('booking-name').focus());
  form.addEventListener('submit', submission => {
    submission.preventDefault();
    if (!validateIdentity(document.getElementById('booking-name'),document.getElementById('booking-email'))) { showAlert(document.getElementById('booking-alert'),'أدخل الاسم الثلاثي وبريداً إلكترونياً صحيحاً لإكمال الحجز.','danger'); form.querySelector('.is-invalid').focus(); return; }
    const seats = document.getElementById('booking-seats').value;
    showAlert(document.getElementById('event-alert'),`تم تأكيد الحجز التجريبي بنجاح لفعالية «${event.title}»؛ عدد المقاعد: ${seats}. لا يوجد حجز فعلي أو رسالة بريد مرسلة.`);
    bootstrap.Modal.getOrCreateInstance(modal).hide(); form.reset(); document.getElementById('booking-alert').replaceChildren();
    modal.addEventListener('hidden.bs.modal',() => document.getElementById('event-alert').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'center'}),{once:true});
  });
}
// إظهار زر الصعود بعد التمرير مع احترام إعداد تقليل الحركة.
function initScrollTop() {
  const button = document.getElementById('scroll-top');
  // تحديث ظهور الزر بحسب موضع التمرير الحالي.
  function updateVisibility() { button.hidden = window.scrollY < 350; }
  window.addEventListener('scroll',updateVisibility,{passive:true}); updateVisibility();
  button.addEventListener('click',() => window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));
}
// تشغيل وظائف الصفحة المناسبة بعد تحميل الشيفرة المؤجلة.
function init() { initTheme(); initHome(); initFilters(); initEvent(); initContact(); initScrollTop(); document.getElementById('year').textContent = new Date().getFullYear(); }
init();
