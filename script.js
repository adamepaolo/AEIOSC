// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;
  const icon = toggleBtn.querySelector('i');

  // Load user preference from localStorage (optional)
  if (localStorage.getItem('lynexos-dark-mode') === 'enabled') {
    body.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    if (isDark) {
      icon.classList.replace('fa-moon', 'fa-sun');
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      localStorage.setItem('lynexos-dark-mode', 'enabled');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      localStorage.setItem('lynexos-dark-mode', 'disabled');
    }
  });
});
