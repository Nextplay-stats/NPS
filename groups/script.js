function showCategory(category) {
  const categories = document.querySelectorAll('.report-icons');
  categories.forEach(c => c.style.display = 'none');

  const selected = document.querySelector(`.${category}`);
  if (selected) selected.style.display = 'flex';
}
