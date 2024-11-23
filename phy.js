
    // ... (previous JavaScript remains unchanged) ...

    // Kinetic Particle Model
    const particleContainer = document.getElementById('particle-container');
    const particleTemperature = document.getElementById('particle-temperature');
    const matterStateSelect = document.getElementById('matter-state-select');

    function createParticles() {
        particleContainer.innerHTML = '';
        const state = matterStateSelect.value;
        const particleCount = state === 'solid' ? 64 : state === 'liquid' ? 40 : 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particleContainer.appendChild(particle);
        }
    }

    function animateParticles() {
        const state = matterStateSelect.value;
        const temp = particleTemperature.value;
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            let speed, range;
            
            switch (state) {
                case 'solid':
                    speed = temp === 'low' ? 1 : temp === 'medium' ? 2 : 3;
                    range = 5;
                    break;
                case 'liquid':
                    speed = temp === 'low' ? 2 : temp === 'medium' ? 4 : 6;
                    range = 20;
                    break;
                case 'gas':
                    speed = temp === 'low' ? 4 : temp === 'medium' ? 7 : 10;
                    range = 50;
                    break;
            }

            particle.animate([
                { transform: 'translate(0, 0)' },
                { transform: `translate(${Math.random() * range - range/2}px, ${Math.random() * range - range/2}px)` }
            ], {
                duration: 1000 / speed,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
        });
    }

    createParticles();
    animateParticles();

    matterStateSelect.addEventListener('change', () => {
        createParticles();
        animateParticles();
    });

    particleTemperature.addEventListener('change', animateParticles);

    // ... (remaining JavaScript remains unchanged) ...
