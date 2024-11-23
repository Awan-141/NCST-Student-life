// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Dynamic header
  const header = document.querySelector('nav');
  const heroSection = document.querySelector('.hero');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Change header style when scrolling past the hero section
    if (scrollTop > heroSection.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide/show header based on scroll direction
    if (scrollTop > lastScrollTop) {
      header.style.top = '-100px'; // Hide header when scrolling down
    } else {
      header.style.top = '0'; // Show header when scrolling up
    }
    lastScrollTop = scrollTop;
  });

  // Back to Top button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
