// Main Page Script
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS for smooth scroll animations
  AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
  });

  // Enhanced Navigation
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  let lastScrollTop = 0;

  // Smooth scroll navigation
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              const headerOffset = 80;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });

              // Active state for navigation
              navLinks.forEach(navLink => navLink.classList.remove('active'));
              this.classList.add('active');
          }
      });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add/remove header background
      if (currentScroll > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }

      // Hide/show header on scroll
      if (currentScroll > lastScrollTop && currentScroll > 500) {
          header.style.transform = 'translateY(-100%)';
      } else {
          header.style.transform = 'translateY(0)';
      }
      lastScrollTop = currentScroll;
  });

  // Theme Toggle with smooth transition
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme based on system preference or saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  } else {
      document.body.classList.toggle('dark-mode', prefersDarkScheme.matches);
  }

  themeToggle.addEventListener('click', () => {
      // Create and animate theme transition overlay
      const overlay = document.createElement('div');
      overlay.classList.add('theme-transition-overlay');
      document.body.appendChild(overlay);

      // Toggle theme with animation
      requestAnimationFrame(() => {
          overlay.classList.add('active');
          
          setTimeout(() => {
              document.body.classList.toggle('dark-mode');
              const isDark = document.body.classList.contains('dark-mode');
              localStorage.setItem('theme', isDark ? 'dark' : 'light');
              
              // Update theme toggle icon
              themeToggle.innerHTML = isDark ? '☀️' : '🌙';
              
              setTimeout(() => {
                  overlay.classList.remove('active');
                  setTimeout(() => overlay.remove(), 500);
              }, 200);
          }, 200);
      });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
      if (mobileMenu?.classList.contains('active') && 
          !mobileMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
          mobileMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          document.body.style.overflow = '';
      }
  });

  // Scroll Progress Indicator
  const progressBar = document.createElement('div');
  progressBar.classList.add('scroll-progress');
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
  });

  // Back to Top Button with smooth animation
  const backToTop = document.createElement('button');
  backToTop.classList.add('back-to-top');
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
          backToTop.classList.add('visible');
      } else {
          backToTop.classList.remove('visible');
      }
  });

  backToTop.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Hero Section Parallax Effect
  const hero = document.querySelector('.hero');
  if (hero) {
      window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * 0.5;
          hero.style.transform = `translate3d(0, ${rate}px, 0)`;
      });
  }

  // Lazy Loading Images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.add('loaded');
              observer.unobserve(img);
          }
      });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

  // Smooth Reveal Animation for Sections
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
          }
      });
  }, {
      threshold: 0.15
  });

  revealElements.forEach(element => revealObserver.observe(element));

  // Page Load Animation
  window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Animate hero section elements
      const heroElements = document.querySelectorAll('.hero *');
      heroElements.forEach((element, index) => {
          setTimeout(() => {
              element.classList.add('appear');
          }, 100 * index);
      });
  });

  // Handle form submissions with animation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          form.classList.add('submitted');
          
          // Simulate form submission
          setTimeout(() => {
              form.classList.add('success');
              setTimeout(() => {
                  form.classList.remove('submitted', 'success');
                  form.reset();
              }, 2000);
          }, 1000);
      });
  });
});