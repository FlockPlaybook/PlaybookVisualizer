// Adds a per-dimension line icon to the Descriptor table so the four dimensions
// (Complejidad, Autonomía, Impacto de las decisiones, Alcance) are easier to
// scan. Icons use the amber accent. Runs on the descriptor pages after each
// navigation and leaves the Markdown source untouched.

const DIMENSIONS = [
  {
    key: 'complejidad',
    match: 'complejidad',
    // gauge
    icon: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  },
  {
    key: 'autonomia',
    match: 'autonom',
    // compass
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  },
  {
    key: 'impacto',
    match: 'impacto',
    // target
    icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  },
  {
    key: 'alcance',
    match: 'alcance',
    // maximize / scope
    icon: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  },
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function iconSvg(paths) {
  return (
    `<svg class="descriptor-dim-icon" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="1.75" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true">${paths}</svg>`
  );
}

function decorateDescriptorTable() {
  document.querySelectorAll('.markdown table tbody tr').forEach((row) => {
    const cell = row.querySelector('td:first-child');
    if (!cell || cell.querySelector('.descriptor-dim-icon')) return;

    const label = normalize(cell.textContent || '');
    const dim = DIMENSIONS.find((d) => label.includes(d.match));
    if (!dim) return;

    row.dataset.dim = dim.key;
    cell.insertAdjacentHTML('afterbegin', iconSvg(dim.icon));
  });
}

export function onRouteDidUpdate({location}) {
  if (typeof document === 'undefined') return;
  if (!location || !/\/instancia-\d+\/descriptor$/.test(location.pathname)) return;
  requestAnimationFrame(() => decorateDescriptorTable());
}
