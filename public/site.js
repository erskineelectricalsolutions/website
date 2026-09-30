const viewer = document.querySelector('#lightbox');
let previousFocus;
if (viewer && typeof viewer.showModal === 'function') {
  document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      previousFocus = link;
      viewer.querySelector('img').src = link.href;
      viewer.querySelector('img').alt = link.querySelector('img').alt;
      viewer.querySelector('p').textContent = link.querySelector('img').alt;
      viewer.showModal();
    });
  });
  viewer.querySelector('button').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => previousFocus?.focus());
}
