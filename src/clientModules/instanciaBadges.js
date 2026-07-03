// Sets a `data-level` attribute on the "Instancia N" section headings of the
// comparativa pages so the CSS badge (`content: attr(data-level)`) shows the
// instancia number. Headings that are not numbered instancia sections (e.g.
// "Descriptor") are left without the attribute, and the CSS hides their badge.
function applyInstanciaLevels() {
  document.querySelectorAll('.markdown > h2').forEach((h2) => {
    const match = h2.textContent.trim().match(/^Instancia\s+(\d+)/i);
    if (match) {
      h2.setAttribute('data-level', match[1]);
    } else {
      h2.removeAttribute('data-level');
    }
  });
}

export function onRouteDidUpdate() {
  if (typeof document === 'undefined') return;
  // Run after the markdown content of the new route has been painted.
  requestAnimationFrame(() => applyInstanciaLevels());
}
