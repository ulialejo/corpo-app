'use strict';

const CATEGORIES = window.CORPO_DATA?.categories || [];
const GLOSSARY = window.CORPO_DATA?.glossary || [];

const STORAGE_KEY = 'corpo-lessons-seen-v1';
const lessonKey = (category, topic, index) => `${category.id}/${topic.id}/${index}`;
const validKeys = new Set(CATEGORIES.flatMap(category => category.topics.flatMap(topic =>
  topic.lessons.map((lesson, index) => lessonKey(category, topic, index))
)));
let seen = new Set();
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (Array.isArray(saved)) seen = new Set(saved.filter(key => validKeys.has(key)));
} catch (_) {
  // El progreso sigue disponible en memoria si el almacenamiento no responde.
}

const element = id => document.getElementById(id);
const views = ['view-categories', 'view-topics', 'view-lesson', 'view-glossary'];
let learningView = 'view-categories';
let currentCategory = null;
let currentTopic = null;
let currentLesson = 0;
let toastTimer;

function create(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function showView(id) {
  if (id !== 'view-glossary') learningView = id;
  const glossary = id === 'view-glossary';
  element('tab-learn').setAttribute('aria-selected', String(!glossary));
  element('tab-glossary').setAttribute('aria-selected', String(glossary));
  views.forEach(viewId => {
    element(viewId).classList.toggle('active', viewId === id);
    element(viewId).classList.toggle('hidden', viewId !== id);
  });
}

function doneInTopic(category, topic) {
  return topic.lessons.filter((lesson, index) => seen.has(lessonKey(category, topic, index))).length;
}

function updateProgress() {
  element('total-progress').textContent = `${(validKeys.size ? Math.round(seen.size / validKeys.size * 100) : 0)}%`;
  element('lessons-done').textContent = String(seen.size);
  element('progress-summary').classList.toggle('hidden', !validKeys.size);
  renderCategories();
}

function renderCategories() {
  const grid = element('categories-grid');
  grid.replaceChildren();
  if (!CATEGORIES.length) grid.append(create('p', 'empty-state', 'Todavía no hay contenido para aprender. Cuando se carguen los archivos de datos, las categorías aparecerán acá.'));
  CATEGORIES.forEach(category => {
    const total = category.topics.reduce((sum, topic) => sum + topic.lessons.length, 0);
    const done = category.topics.reduce((sum, topic) => sum + doneInTopic(category, topic), 0);
    const card = create('button', 'cat-card');
    card.type = 'button';
    card.append(create('span', 'cat-name', category.title));
    card.append(create('span', `cat-progress${done === total ? ' complete' : ''}`, `${done} de ${total} lecciones vistas`));
    card.addEventListener('click', () => {
      currentCategory = category;
      renderTopics();
      showView('view-topics');
    });
    grid.append(card);
  });
}

function renderTopics() {
  element('cat-title').textContent = currentCategory.title;
  element('cat-desc').textContent = currentCategory.desc;
  const list = element('topics-list');
  list.replaceChildren();
  currentCategory.topics.forEach(topic => {
    const done = doneInTopic(currentCategory, topic);
    const complete = done === topic.lessons.length;
    const button = create('button', `topic-item${complete ? ' done' : ''}`);
    button.type = 'button';
    button.disabled = !topic.lessons.length;
    const info = create('span', 'topic-info');
    info.append(create('span', 'topic-name', topic.title));
    info.append(create('span', 'topic-meta', `${done} de ${topic.lessons.length} lecciones vistas`));
    button.append(info);
    if (complete) button.append(create('span', 'topic-check', '✓'));
    button.addEventListener('click', () => {
      currentTopic = topic;
      currentLesson = 0;
      renderLesson();
      showView('view-lesson');
    });
    list.append(button);
  });
}

function renderLesson() {
  const lesson = currentTopic.lessons[currentLesson];
  element('lesson-breadcrumb').textContent = `${currentCategory.title} › ${currentTopic.title}`;
  const content = element('lesson-content');
  content.replaceChildren(
    create('h2', 'lesson-title', lesson.title),
    create('span', 'badge level-badge', lesson.level),
    create('p', 'lesson-subtitle', `Lección ${currentLesson + 1} de ${currentTopic.lessons.length}`)
  );
  (lesson.sections || []).forEach(item => {
    const section = create('section', 'lesson-section');
    section.append(create('h3', '', item.h));
    if (item.p) section.append(create('p', '', item.p));
    if (item.list?.length) {
      const list = create(item.h === 'Paso a paso' ? 'ol' : 'ul');
      item.list.forEach(text => list.append(create('li', '', text)));
      section.append(list);
    }
    content.append(section);
  });
  appendReferences(content, lesson.refs);
  element('prev-lesson').classList.toggle('hidden', currentLesson === 0);
  element('next-lesson').classList.toggle('hidden', currentLesson === currentTopic.lessons.length - 1);
  const done = seen.has(lessonKey(currentCategory, currentTopic, currentLesson));
  element('mark-done').textContent = done ? 'Vista ✓' : 'Marcar como vista ✓';
  element('mark-done').disabled = done;
}

function appendReferences(parent, refs) {
  if (!refs?.length) return;
  const section = create('section', 'references');
  section.append(create('h3', '', 'Referencias'));
  const list = create('ul');
  refs.forEach(ref => {
    const item = create('li', '', ref.name);
    if (ref.verify) item.append(create('small', 'verify-note', 'pendiente de verificar'));
    list.append(item);
  });
  section.append(list);
  parent.append(section);
}

const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const areaNames = { negocios: 'Negocios', hoteleria: 'Hotelería', mineria: 'Minería' };
let selectedArea = 'all';
let searchTimer;
const glossaryEntries = GLOSSARY.map((entry, index) => ({ entry, index }));

function relevance(entry, query) {
  const term = normalize(entry.term);
  if (term === query) return 0;
  if (term.startsWith(query)) return 1;
  if (term.includes(query)) return 2;
  if ((entry.aka || []).some(alias => normalize(alias).includes(query))) return 3;
  if ([entry.meaning, entry.application].some(value => normalize(value).includes(query))) return 4;
  return 5;
}

function setArea(area) {
  selectedArea = area;
  document.querySelectorAll('[data-area]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.area === area));
  });
}

function openRelated(name) {
  clearTimeout(searchTimer);
  const query = normalize(name);
  const target = glossaryEntries.find(({ entry }) => normalize(entry.term) === query)
    || glossaryEntries.find(({ entry }) => (entry.aka || []).some(alias => normalize(alias) === query));
  if (target) {
    if (selectedArea !== 'all' && selectedArea !== target.entry.area) setArea('all');
    element('glossary-search').value = target.entry.term;
    renderGlossary(target.index);
    const button = element(`term-toggle-${target.index}`);
    button.focus();
    button.scrollIntoView({ block: 'nearest', behavior: 'auto' });
  } else {
    setArea('all');
    element('glossary-search').value = name;
    renderGlossary();
    element('glossary-search').focus();
  }
}

function renderGlossary(expandedIndex) {
  const query = normalize(element('glossary-search').value.trim());
  const matches = glossaryEntries.filter(({ entry }) =>
    (selectedArea === 'all' || selectedArea === entry.area) && (!query || relevance(entry, query) < 5)
  ).sort((a, b) => (query ? relevance(a.entry, query) - relevance(b.entry, query) : 0)
    || a.entry.term.localeCompare(b.entry.term, 'es'));
  element('glossary-count').textContent = `${matches.length} términos`;
  const list = element('glossary-list');
  list.replaceChildren();
  if (!matches.length) list.append(create('p', 'empty-state', GLOSSARY.length
    ? 'No encontramos términos. Probá otra palabra o elegí Todas las áreas.'
    : 'Todavía no hay términos disponibles. Aparecerán cuando se carguen los archivos de datos.'));
  matches.forEach(({ entry, index }) => {
    const card = create('article', 'term-card');
    const heading = create('h2');
    const toggle = create('button', 'term-toggle');
    toggle.type = 'button';
    toggle.id = `term-toggle-${index}`;
    toggle.setAttribute('aria-expanded', String(index === expandedIndex));
    toggle.setAttribute('aria-controls', `term-detail-${index}`);
    toggle.append(create('span', 'term-name', entry.term));
    const area = Object.hasOwn(areaNames, entry.area) ? entry.area : 'unknown';
    toggle.append(create('span', `badge area-${area}`, areaNames[area] || entry.area));
    const detail = create('div', 'term-detail');
    detail.id = `term-detail-${index}`;
    detail.hidden = index !== expandedIndex;
    toggle.addEventListener('click', () => {
      detail.hidden = !detail.hidden;
      toggle.setAttribute('aria-expanded', String(!detail.hidden));
    });
    [['Qué significa', entry.meaning], ['Cómo se aplica', entry.application], ['Ejemplo', entry.example]].forEach(([label, value]) => {
      const block = create('section', 'term-block');
      block.append(create('h3', '', label), create('p', '', value));
      detail.append(block);
    });
    if (entry.aka?.length) detail.append(create('p', 'term-aka', `También: ${entry.aka.join(', ')}`));
    if (entry.related?.length) {
      const related = create('div', 'related-terms');
      related.append(create('h3', '', 'Términos relacionados'));
      entry.related.forEach(name => {
        const chip = create('button', 'chip', name);
        chip.type = 'button';
        chip.addEventListener('click', () => openRelated(name));
        related.append(chip);
      });
      detail.append(related);
    }
    appendReferences(detail, entry.refs);
    heading.append(toggle);
    card.append(heading, detail);
    list.append(card);
  });
}

element('tab-learn').addEventListener('click', () => showView(learningView));
element('tab-glossary').addEventListener('click', () => showView('view-glossary'));
const tabs = [element('tab-learn'), element('tab-glossary')];
tabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index;
  tabs[next].focus();
  tabs[next].click();
}));
element('glossary-search').addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderGlossary, 150);
});
document.querySelectorAll('[data-area]').forEach(button => button.addEventListener('click', () => {
  clearTimeout(searchTimer);
  setArea(button.dataset.area);
  renderGlossary();
}));
renderGlossary();

function showToast(message) {
  const toast = element('toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show', 'success');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show', 'success');
    toast.classList.add('hidden');
  }, 3000);
}

element('back-to-cats').addEventListener('click', () => showView('view-categories'));
element('back-to-topics').addEventListener('click', () => {
  renderTopics();
  showView('view-topics');
});
element('prev-lesson').addEventListener('click', () => {
  if (currentLesson > 0) { currentLesson -= 1; renderLesson(); }
});
element('next-lesson').addEventListener('click', () => {
  if (currentLesson < currentTopic.lessons.length - 1) { currentLesson += 1; renderLesson(); }
});
element('mark-done').addEventListener('click', () => {
  seen.add(lessonKey(currentCategory, currentTopic, currentLesson));
  let saved = true;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]));
  } catch (_) {
    saved = false;
  }
  updateProgress();
  renderLesson();
  showToast(saved ? 'Lección marcada como vista ✓' : 'Lección vista ✓ · Progreso solo en esta sesión');
});

element('back-to-cats').setAttribute('aria-label', 'Volver a categorías');
element('back-to-topics').setAttribute('aria-label', 'Volver a temas');
element('lesson-breadcrumb').classList.add('lesson-breadcrumb');
element('toast').setAttribute('role', 'status');
element('toast').setAttribute('aria-live', 'polite');
updateProgress();
showView('view-categories');

try {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
} catch (_) {
  // Abrir desde file:// o sin soporte de registro no bloquea la aplicación.
}
