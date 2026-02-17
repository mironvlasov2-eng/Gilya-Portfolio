// Base path for assets (works for /, /Gilya/, or file://)
const base = (function () {
  const path = location.pathname.replace(/\/[^/]*$/, '') || '/';
  return path.endsWith('/') ? path : path + '/';
})();

// Set image sources so they load from the correct path
document.querySelectorAll('img[data-src]').forEach((img) => {
  img.src = base + 'images/' + img.getAttribute('data-src');
});
