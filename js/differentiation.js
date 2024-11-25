const derivativeGraph = document.getElementById('derivative-graph');
const diffA = document.getElementById('diff-a');
const derivativeEquation = document.getElementById('derivative-equation');

function updateDiffAValue() {
    document.getElementById('diff-a-value').textContent = diffA.value;
}

function drawDerivative() {
    const ctx = derivativeGraph.getContext('2d');
    ctx.clearRect(0, 0, derivativeGraph.width, derivativeGraph.height);
    
    const a = parseFloat(diffA.value);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, derivativeGraph.height / 2);
    ctx.lineTo(derivativeGraph.width, derivativeGraph.height / 2);
    ctx.moveTo(derivativeGraph.width / 2, 0);
    ctx.lineTo(derivativeGraph.width / 2, derivativeGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    // Draw f(x) = ax^2
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 0.1) {
        const y = a * x * x;
        const canvasX = (x + 5) * (derivativeGraph.width / 10);
        const canvasY = derivativeGraph.height - (y + 12.5) * (derivativeGraph.height / 25);
        if (x === -5) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
    // Draw f'(x) = 2ax
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 0.1) {
        const y = 2 * a * x;
        const canvasX = (x + 5) * (derivativeGraph.width / 10);
        const canvasY = derivativeGraph.height - (y + 12.5) * (derivativeGraph.height / 25);
        if (x === -5) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.strokeStyle = 'red';
    ctx.stroke();
    
    ctx.fillStyle = 'black';
    ctx.fillText('f(x) = ax^2', 10, 20);
    ctx.fillText("f'(x) = 2ax", 10, 40);
    
    derivativeEquation.innerHTML = `
        f(x) = ${a}x<sup>2</sup><br>
        f'(x) = ${2*a}x
    `;
}

diffA.addEventListener('input', () => { updateDiffAValue(); drawDerivative(); });

// Initialize
updateDiffAValue();
drawDerivative();

