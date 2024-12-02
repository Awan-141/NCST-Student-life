document.addEventListener('DOMContentLoaded', () => {
  const specializationCards = document.querySelectorAll('.specialization-card');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.main-header');
  const sections = document.querySelectorAll('section');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile menu toggle with animation
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    mobileMenuToggle.classList.toggle('active');
    
    if (navLinks.classList.contains('show')) {
      gsap.from('.nav-links li', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  });

  // Animate header on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  // Animate sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Specialization card hover effect with GSAP
  specializationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        duration: 0.3
      });
    });
  });

  // Course filtering with animation
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      gsap.to(courseCards, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        onComplete: () => {
          courseCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });

          gsap.to(courseCards, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1
          });
        }
      });
    });
  });

  // Animate cloud icon
  const cloudIcon = document.querySelector('.cloud-computing .card-icon i');
  if (cloudIcon) {
    gsap.to(cloudIcon, {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }

  // Animate news cards on hover
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        duration: 0.3
      });
    });
  });

  // Animate CTA button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('mouseenter', () => {
    gsap.to(ctaButton, {
      scale: 1.05,
      duration: 0.3
    });
  });

  ctaButton.addEventListener('mouseleave', () => {
    gsap.to(ctaButton, {
      scale: 1,
      duration: 0.3
    });
  });

  // Error handling
  window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can add more error handling logic here, such as sending errors to a logging service
  });
});

// Preloader animation
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    gsap.to(preloader, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        preloader.style.display = 'none';
      }
    });
  }
});