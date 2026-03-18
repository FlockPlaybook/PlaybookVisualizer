const BTN_ID = 'flock-collapse-all-btn';

function injectCollapseButton() {
  // Already injected
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
    const expanded = document.querySelectorAll(
      '.menu__list-item:not(.menu__list-item--collapsed) > .menu__link--sublist-caret'
    );
    expanded.forEach(link => link.click());
  });

  // Insert at the very top of the nav, before the ul
  const firstUl = nav.querySelector('ul');
  if (firstUl) {
    nav.insertBefore(btn, firstUl);
  } else {
    nav.appendChild(btn);
  }
}

// Docusaurus lifecycle: called after every SPA route change
export function onRouteDidUpdate() {
  // Small delay to let Docusaurus render the sidebar
  setTimeout(injectCollapseButton, 50);
}
