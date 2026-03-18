const BTN_ID = 'flock-collapse-all-btn';

function injectCollapseButton() {
  if (document.getElementById(BTN_ID)) return;

  const nav = document.querySelector('nav.menu');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.id = BTN_ID;
  btn.innerHTML = `
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
      <rect x="1" y="1" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.3"/>
      <rect x="7" y="1" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.3"/>
      <rect x="1" y="7" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.3"/>
      <rect x="7" y="7" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.3"/>
    </svg>
    Colapsar todo
  `;

  btn.addEventListener('click', () => {
    // Target the caret toggle button inside every NON-collapsed category
    const carets = document.querySelectorAll(
      '.menu__list-item:not(.menu__list-item--collapsed) .menu__caret'
    );
    carets.forEach(caret => caret.click());
  });

  nav.insertBefore(btn, nav.firstChild);
}

export function onRouteDidUpdate() {
  setTimeout(injectCollapseButton, 80);
}
