document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkModeToggle');
  const icon = toggleBtn.querySelector('i');
  
  // Check for saved user preference
  if (localStorage.getItem('lynexos-dark-mode') === 'enabled') {
    document.body.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
  }

  // Toggle dark mode
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    
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