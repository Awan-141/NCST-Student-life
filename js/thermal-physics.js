// Temperature Scale Converter
document.getElementById('convert-temp').addEventListener('click', function() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;
    const kelvin = document.getElementById('kelvin').value;

    if (celsius !== '') {
        document.getElementById('fahrenheit').value = (celsius * 9/5) + 32;
        document.getElementById('kelvin').value = parseFloat(celsius) + 273.15;
    } else if (fahrenheit !== '') {
        document.getElementById('celsius').value = (fahrenheit - 32) * 5/9;
        document.getElementById('kelvin').value = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (kelvin !== '') {
        document.getElementById('celsius').value = kelvin - 273.15;
        document.getElementById('fahrenheit').value = (kelvin - 273.15) * 9/5 + 32;
    }
});

// Particle Motion Visualizer
const particleCanvas = document.getElementById('particle-motion-canvas');
const particleCtx = particleCanvas.getContext('2d');
let particles = [];
let temperature = 50;

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.speed = temperature / 10;
}

Particle.prototype.update = function() {
    this.x += Math.random() * this.speed * 2 - this.speed;
    this.y += Math.random() * this.speed * 2 - this.speed;
    if (this.x < 0) this.x = particleCanvas.width;
    if (this.x > particleCanvas.width) this.x = 0;
    if (this.y < 0) this.y = particleCanvas.height;
    if (this.y > particleCanvas.height) this.y = 0;
};

Particle.prototype.draw = function() {
    particleCtx.fillStyle = 'blue';
    particleCtx.beginPath();
    particleCtx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    particleCtx.fill();
};

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(Math.random() * particleCanvas.width, Math.random() * particleCanvas.height));
    }
}

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

document.getElementById('temperature-slider').addEventListener('input', function() {
    temperature = this.value;
    document.getElementById('temperature-value').textContent = temperature;
    particles.forEach(particle => particle.speed = temperature / 10);
});

// Heat Transfer Simulation
const heatTransferCanvas = document.getElementById('heat-transfer-canvas');
const heatTransferCtx = heatTransferCanvas.getContext('2d');
let heatTransferAnimationId;
let isAnimating = false;

document.getElementById('start-heat-transfer').addEventListener('click', function() {
    if (!isAnimating) {
        isAnimating = true;
        document.getElementById('heat-transfer-status').textContent = 'Status: Transferring Heat...';
        animateHeatTransfer();
    }
});

document.getElementById('stop-heat-transfer').addEventListener('click', function() {
    isAnimating = false;
    document.getElementById('heat-transfer-status').textContent = 'Status: Stopped';
    cancelAnimationFrame(heatTransferAnimationId);
});

let heatTransferAmount = 0;

function animateHeatTransfer() {
    heatTransferCtx.clearRect(0, 0, heatTransferCanvas.width, heatTransferCanvas.height);
    
    // Draw heat transfer gradient
    const gradient = heatTransferCtx.createLinearGradient(100, 0, 300, 0);
    gradient.addColorStop(0, 'red'); // Hot color
    gradient.addColorStop(1, 'blue'); // Cold color
    heatTransferCtx.fillStyle = gradient;
    heatTransferCtx.fillRect(100, 0, heatTransferAmount, 200);
    
    // Increase heat transfer amount to simulate heat moving from hot to cold
    if (heatTransferAmount < 200) {
        heatTransferAmount += 1; // Increase speed as needed
    } else {
        isAnimating = false;
        document.getElementById('heat-transfer-status').textContent = 'Status: Completed';
    }
    
    heatTransferAnimationId = requestAnimationFrame(animateHeatTransfer);
}


// thermal expan
const expansionCanvas = document.getElementById('thermal-expansion-canvas');
const expansionCtx = expansionCanvas.getContext('2d');
const expansionSlider = document.getElementById('expansion-slider');
const expansionTemperature = document.getElementById('expansion-temperature');

function drawRod(length) {
    expansionCtx.clearRect(0, 0, expansionCanvas.width, expansionCanvas.height);
    expansionCtx.fillStyle = 'gray';
    expansionCtx.fillRect(50, 40, length, 20);
}

expansionSlider.addEventListener('input', function() {
    const temp = this.value;
    expansionTemperature.textContent = temp;
    const length = 300 + (temp * 0.5); // Adjust this factor as needed for the expansion
    drawRod(length);
});

// Initialize with the default temperature
drawRod(300);

// Specific Heat Capacity Comparison
const ctx = document.getElementById('specific-heat-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Water', 'Aluminum', 'Iron', 'Copper'],
        datasets: [{
            label: 'Specific Heat Capacity (J/kg·K)',
            data: [4186, 897, 449, 385],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Phase Changes Simulation
const phaseCanvas = document.getElementById('phase-changes-canvas');
const phaseCtx = phaseCanvas.getContext('2d');
let phaseAnimationId;

document.getElementById('start-phase-changes').addEventListener('click', function() {
    let time = 0;
    function animate() {
        phaseCtx.clearRect(0, 0, phaseCanvas.width, phaseCanvas.height);
        
        // Draw axes
        phaseCtx.beginPath();
        phaseCtx.moveTo(50, 180);
        phaseCtx.lineTo(380, 180);
        phaseCtx.moveTo(50, 180);
        phaseCtx.lineTo(50, 20);
        phaseCtx.stroke();
        
        // Draw temperature curve
        phaseCtx.beginPath();
        phaseCtx.moveTo(50, 180);
        for (let t = 0; t <= time; t++) {
            let y;
            if (t < 50) y = 180 - t * 2;
            else if (t < 100) y = 80;
            else if (t < 150) y = 80 - (t - 100) * 2;
            else y = 20;
            phaseCtx.lineTo(50 + t * 2, y);
        }
        phaseCtx.stroke();
        
        time += 0.5;
        if (time < 165) {
            phaseAnimationId = requestAnimationFrame(animate);
        }
    }
    animate();
});

// Quiz Game
const questions = [
    {
        question: "If 100 J of heat is added to 1 kg of water, what is the temperature change?",
        answers: ["0.024°C", "0.24°C", "2.4°C", "24°C"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a method of heat transfer?",
        answers: ["Conduction", "Convection", "Radiation", "Evaporation"],
        correct: 3
    },
    {
        question: "What is the boiling point of water in Kelvin?",
        answers: ["0 K", "100 K", "273 K", "373 K"],
        correct: 3
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    for (let i = 0; i < q.answers.length; i++) {
        answersDiv.innerHTML += `<input type="radio" name="answer" value="${i}"> ${q.answers[i]}<br>`;
    }
    document.getElementById('result').textContent = '';
}

document.getElementById('submit-answer').addEventListener('click', function() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        const answer = parseInt(selected.value);
        if (answer === questions[currentQuestion].correct) {
            document.getElementById('result').textContent = "Correct!";
        } else {
            document.getElementById('result').textContent = "Incorrect. Try again.";
        }
        currentQuestion = (currentQuestion + 1) % questions.length;
        setTimeout(loadQuestion, 1500);
    } else {
        document.getElementById('result').textContent = "Please select an answer.";
    }
});

loadQuestion();

/// ... (previous code remains unchanged)

// Interactive Heat Map
const heatmap = document.getElementById('heatmap');
const heatmapCtx = heatmap.getContext('2d');
let heatmapWidth = heatmap.width;
let heatmapHeight = heatmap.height;

// Configuration object for customization
const heatmapConfig = {
    minTemp: 0,
    maxTemp: 100,
    colors: {
        cold: "#0000ff",
        medium: "#ffff00",
        hot: "#ff0000"
    }
};

function drawHeatmap() {
    const gradient = heatmapCtx.createLinearGradient(0, 0, heatmapWidth, 0);
    gradient.addColorStop(0, heatmapConfig.colors.cold);
    gradient.addColorStop(0.5, heatmapConfig.colors.medium);
    gradient.addColorStop(1, heatmapConfig.colors.hot);
    heatmapCtx.fillStyle = gradient;
    heatmapCtx.fillRect(0, 0, heatmapWidth, heatmapHeight);

    // Draw legend
    const legendHeight = 20;
    const legendY = heatmapHeight - legendHeight;
    heatmapCtx.fillStyle = gradient;
    heatmapCtx.fillRect(0, legendY, heatmapWidth, legendHeight);

    heatmapCtx.fillStyle = "#000";
    heatmapCtx.font = "12px Arial";
    heatmapCtx.fillText(`${heatmapConfig.minTemp}°C`, 5, heatmapHeight - 5);
    heatmapCtx.fillText(`${heatmapConfig.maxTemp}°C`, heatmapWidth - 30, heatmapHeight - 5);
}

function showTooltip(x, y, temp) {
    heatmapCtx.fillStyle = "rgba(0, 0, 0, 0.7)";
    heatmapCtx.fillRect(x + 10, y - 30, 100, 25);
    heatmapCtx.fillStyle = "#fff";
    heatmapCtx.font = "14px Arial";
    heatmapCtx.fillText(`${temp}°C`, x + 15, y - 10);
}

function handleHeatmapInteraction(e) {
    const rect = heatmap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const temp = Math.round((x / heatmapWidth) * (heatmapConfig.maxTemp - heatmapConfig.minTemp) + heatmapConfig.minTemp);

    drawHeatmap();
    showTooltip(x, y, temp);

    // Display temperature range
    const minDisplayTemp = Math.max(heatmapConfig.minTemp, temp - 10);
    const maxDisplayTemp = Math.min(heatmapConfig.maxTemp, temp + 10);
    heatmapCtx.fillStyle = "#000";
    heatmapCtx.font = "14px Arial";
    heatmapCtx.fillText(`Range: ${minDisplayTemp}°C - ${maxDisplayTemp}°C`, 10, 20);
}

function resizeHeatmap() {
    heatmapWidth = heatmap.offsetWidth;
    heatmapHeight = heatmap.offsetHeight;
    heatmap.width = heatmapWidth;
    heatmap.height = heatmapHeight;
    drawHeatmap();
}

heatmap.addEventListener('mousemove', handleHeatmapInteraction);
heatmap.addEventListener('click', (e) => {
    const rect = heatmap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const temp = Math.round((x / heatmapWidth) * (heatmapConfig.maxTemp - heatmapConfig.minTemp) + heatmapConfig.minTemp);
    console.log(`Selected temperature: ${temp}°C`);
    // You can add more actions here, such as updating other elements on the page
});

window.addEventListener('resize', resizeHeatmap);

// Initial draw
resizeHeatmap();

// Add export functionality
const exportButton = document.createElement('button');
exportButton.textContent = 'Export Heatmap';
exportButton.style.marginTop = '10px';
heatmap.parentNode.insertBefore(exportButton, heatmap.nextSibling);

exportButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'heatmap.png';
    link.href = heatmap.toDataURL();
    link.click();
});

// ... (rest of the existing code remains unchanged)