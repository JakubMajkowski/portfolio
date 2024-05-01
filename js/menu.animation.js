//Menu close and open icon
function toggleIcon() {
    const icon = document.getElementById('menuIcon');
    if (icon.classList.contains('icon-menu')) {
      icon.classList.remove('icon-menu');
      icon.classList.add('icon-close');
    } else {
      icon.classList.remove('icon-close');
      icon.classList.add('icon-menu');
    }
  }