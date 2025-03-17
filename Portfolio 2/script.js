// ScrollReveal Animations
ScrollReveal().reveal('h2, p, .card, .btn', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
  });
  
  // Responsive Menu Toggle
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
  }
  