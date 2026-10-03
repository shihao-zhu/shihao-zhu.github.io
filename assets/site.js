'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#site-search');
const results = document.querySelector('#search-results');
const status = document.querySelector('#search-status');
document.querySelector('.search-toggle').addEventListener('click', () => {
  closeMenu(); searchDialog.showModal(); searchInput.focus();
});
document.querySelector('.search-close').addEventListener('click', () => searchDialog.close());
searchDialog.addEventListener('click', event => { if (event.target === searchDialog) {
  const rect = searchDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) searchDialog.close();
}});
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  results.replaceChildren();
  if (!query) { status.textContent = 'Search the About Me, Research and Teaching pages.'; return; }
  const matches = window.siteSearchData.filter(item => query.split(/\s+/).every(term => item.text.toLowerCase().includes(term)));
  status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'}` : 'No results found.';
  matches.forEach(item => {
    const article = document.createElement('article'); article.className = 'search-result';
    const link = document.createElement('a'); link.href = item.url; link.textContent = item.page;
    link.addEventListener('click', () => searchDialog.close());
    const paragraph = document.createElement('p');
    const start = Math.max(0, item.text.toLowerCase().indexOf(query.split(/\s+/)[0]) - 70);
    paragraph.textContent = (start ? '…' : '') + item.text.slice(start, start + 280) + (item.text.length > start + 280 ? '…' : '');
    article.append(link, paragraph); results.append(article);
  });
});
