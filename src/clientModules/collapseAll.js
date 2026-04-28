// onClientEntry only runs in the browser (not during SSR build)
export function onClientEntry() {
  window.__flockCollapseAll = function () {
    const items = document.querySelectorAll(
      '.menu__list-item:not(.menu__list-item--collapsed)'
    );

    items.forEach(item => {
      // Try caret button first (exists when category has a link)
      const caret = item.querySelector('.menu__caret');
      if (caret) { caret.click(); return; }

      // Fallback: click the sublist label itself (toggles when no link)
      const label = item.querySelector('.menu__link--sublist');
      if (label) { label.click(); }
    });
  };
}

// Auto-collapse all categories on first page load
let isFirstLoad = true;
export function onRouteDidUpdate() {
  if (!isFirstLoad) return;
  isFirstLoad = false;

  // Small delay so the DOM is fully rendered before collapsing
  setTimeout(() => {
    if (window.__flockCollapseAll) {
      window.__flockCollapseAll();
    }
  }, 100);
}
