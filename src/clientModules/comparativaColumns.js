// Progressive enhancement for the "comparativa" pages: groups each
// "Instancia N" section into a card and adds a layout toggle so the reader can
// switch between the default stacked view and a side-by-side columns view to
// compare how a responsibility evolves across instancias.
//
// It relies on the `data-level` attribute set by instanciaBadges.js and does
// not touch the Markdown source — the DOM is re-grouped after each navigation.

const STORAGE_KEY = 'comparativaLayout'; // 'stacked' | 'columns'

function readPreferredLayout() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'columns' ? 'columns' : 'stacked';
  } catch (e) {
    return 'stacked';
  }
}

function persistLayout(mode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch (e) {
    /* private mode / storage disabled — ignore */
  }
}

function buildToggle(container) {
  const toolbar = document.createElement('div');
  toolbar.className = 'comparativa-toolbar';
  toolbar.setAttribute('data-print-hide', '');

  const makeBtn = (mode, label, icon) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'comparativa-toggle';
    btn.dataset.mode = mode;
    btn.innerHTML = `<span aria-hidden="true">${icon}</span>${label}`;
    return btn;
  };

  const stackedBtn = makeBtn('stacked', 'Apilado', '&#9636;');
  const columnsBtn = makeBtn('columns', 'Columnas', '&#9637;');

  const apply = (mode) => {
    const columns = mode === 'columns';
    container.classList.toggle('is-columns', columns);
    stackedBtn.classList.toggle('is-active', !columns);
    columnsBtn.classList.toggle('is-active', columns);
    persistLayout(mode);
  };

  stackedBtn.addEventListener('click', () => apply('stacked'));
  columnsBtn.addEventListener('click', () => apply('columns'));

  toolbar.appendChild(stackedBtn);
  toolbar.appendChild(columnsBtn);

  apply(readPreferredLayout());
  return toolbar;
}

function enhanceComparativa() {
  const md = document.querySelector('.markdown');
  if (!md || md.dataset.comparativaEnhanced === '1') return;

  const children = Array.from(md.children);
  const firstIdx = children.findIndex(
    (el) => el.tagName === 'H2' && el.hasAttribute('data-level'),
  );
  if (firstIdx === -1) return; // not an instancia comparativa page

  // Group each "Instancia N" heading with the content nodes that follow it,
  // dropping the <hr> separators between sections.
  const groups = [];
  const separators = [];
  let current = null;
  for (let i = firstIdx; i < children.length; i++) {
    const el = children[i];
    if (el.tagName === 'H2' && el.hasAttribute('data-level')) {
      current = { heading: el, nodes: [] };
      groups.push(current);
    } else if (el.tagName === 'HR') {
      separators.push(el);
    } else if (current) {
      current.nodes.push(el);
    }
  }
  if (groups.length === 0) return;

  const container = document.createElement('div');
  container.className = 'comparativa-columns';
  md.insertBefore(container, children[firstIdx]);
  md.insertBefore(buildToggle(container), container);

  groups.forEach((group) => {
    const col = document.createElement('div');
    col.className = 'comparativa-col';
    col.appendChild(group.heading);
    group.nodes.forEach((node) => col.appendChild(node));
    container.appendChild(col);
  });

  separators.forEach((hr) => hr.remove());
  md.dataset.comparativaEnhanced = '1';
}

export function onRouteDidUpdate({ location }) {
  if (typeof document === 'undefined') return;
  if (!location || !location.pathname.includes('/comparativas/')) return;
  // Run after the Markdown of the new route has been painted.
  requestAnimationFrame(() => enhanceComparativa());
}
