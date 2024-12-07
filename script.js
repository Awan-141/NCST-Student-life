document.addEventListener('DOMContentLoaded', () => {
    const specializationCards = document.querySelectorAll('.specialization-card');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.main-header');
    const sections = document.querySelectorAll('section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    const preloader = document.querySelector('.preloader');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const btnUnderstand = document.getElementById('btnUnderstand');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    // Preloader Animation
    window.addEventListener('load', () => {
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    preloader.style.display = 'none';
                },
            });
        }
    });

    // Parallax Effect for Hero Section
    if (document.querySelector('.hero')) {
        gsap.to('.hero', {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }

    // Animate Section Titles and Cards
    gsap.utils.toArray('.section-title, .specialization-card').forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
            },
        });
    });

    // Mobile Menu Toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            mobileMenuToggle.classList.toggle('active');

            if (navLinks.classList.contains('show')) {
                gsap.from('.nav-links li', {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        });
    }

    // Header Animation on Scroll
    if (header) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            gsap.to(header, {
                y: scrollTop > lastScrollTop ? '-100%' : '0%',
                duration: 0.3,
                ease: 'power2.inOut',
            });
            lastScrollTop = scrollTop;
        });
    }

    // Intersection Observer for Section Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach((section) => sectionObserver.observe(section));

    // Specialization Card Hover Effect
    specializationCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                duration: 0.3,
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                duration: 0.3,
            });
        });
    });

    // Course Filtering
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            gsap.to(courseCards, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                stagger: 0.1,
                onComplete: () => {
                    courseCards.forEach((card) => {
                        card.style.display =
                            filter === 'all' || card.dataset.category === filter
                                ? 'block'
                                : 'none';
                    });
                    gsap.to(courseCards, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        stagger: 0.1,
                    });
                },
            });
        });
    });

    // Popup Functionality
    function openPopup() {
        if (popup) {
            popup.classList.add('show');
            popup.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            gsap.from('.popup-content', {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }

    function closePopupHandler() {
        if (popup) {
            gsap.to('.popup-content', {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    popup.classList.remove('show');
                    popup.setAttribute('aria-hidden', 'true');
                    document.body.style.overflow = '';
                },
            });
        }
    }

    if (closePopup) closePopup.addEventListener('click', closePopupHandler);
    if (btnUnderstand) btnUnderstand.addEventListener('click', closePopupHandler);
    if (popup) {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) closePopupHandler();
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup && popup.classList.contains('show')) {
            closePopupHandler();
        }
    });

    setTimeout(openPopup, 2000);
        });