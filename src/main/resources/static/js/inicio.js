// Adding a simple hover effect for dropdown menus
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseover', () => {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.add('show');
      }
    });
    dropdown.addEventListener('mouseout', () => {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.remove('show');
      }
    });
  });
  