// Functions and Graphs
const functionGraph = document.getElementById('function-graph');
const functionType = document.getElementById('function-type');
const paramA = document.getElementById('param-a');
const paramB = document.getElementById('param-b');

function drawFunction() {
    const ctx = functionGraph.getContext('2d');
    ctx.clearRect(0, 0, functionGraph.width, functionGraph.height);
    
    const a = parseFloat(paramA.value);
    const b = parseFloat(paramB.value);
    
    ctx.beginPath();
    ctx.moveTo(0, functionGraph.height / 2);
    ctx.lineTo(functionGraph.width, functionGraph.height / 2);
    ctx.moveTo(functionGraph.width / 2, 0);
    ctx.lineTo(functionGraph.width / 2, functionGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    ctx.beginPath();
    for (let x = -10; x <= 10; x += 0.1) {
        let y;
        switch (functionType.value) {
            case 'linear':
                y = a * x + b;
                break;
            case 'quadratic':
                y = a * x * x + b;
                break;
            case 'exponential':
                y = a * Math.exp(x) + b;
                break;
        }
        const canvasX = (x + 10) * (functionGraph.width / 20);
        const canvasY = functionGraph.height - (y + 10) * (functionGraph.height / 20);
        if (x === -10) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}

functionType.addEventListener('change', drawFunction);
paramA.addEventListener('input', drawFunction);
paramB.addEventListener('input', drawFunction);

// Limits and Continuity
const limitGraph = document.getElementById('limit-graph');
const limitH = document.getElementById('limit-h');

function drawLimit() {
    const ctx = limitGraph.getContext('2d');
    ctx.clearRect(0, 0, limitGraph.width, limitGraph.height);
    
    const h = parseFloat(limitH.value);
    
    ctx.beginPath();
    ctx.moveTo(0, limitGraph.height / 2);
    ctx.lineTo(limitGraph.width, limitGraph.height / 2);
    ctx.moveTo(limitGraph.width / 2, 0);
    ctx.lineTo(limitGraph.width / 2, limitGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    ctx.beginPath();
    for (let x = -5; x <= 5; x += 0.1) {
        if (Math.abs(x) < 0.001) continue;
        const y = (Math.sin(x) - Math.sin(0)) / x;
        const canvasX = (x + 5) * (limitGraph.width / 10);
        const canvasY = limitGraph.height - (y + 1) * (limitGraph.height / 4);
        if (x === -5) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
    // Draw the point at h
    const hY = (Math.sin(h) - Math.sin(0)) / h;
    const canvasHX = (h + 5) * (limitGraph.width / 10);
    const canvasHY = limitGraph.height - (hY + 1) * (limitGraph.height / 4);
    ctx.beginPath();
    ctx.arc(canvasHX, canvasHY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    
    ctx.fillStyle = 'black';
    ctx.fillText(`h = ${h.toFixed(2)}`, canvasHX + 10, canvasHY - 10);
}

limitH.addEventListener('input', drawLimit);

// Differentiation
const derivativeGraph = document.getElementById('derivative-graph');
const diffA = document.getElementById('diff-a');

function drawDerivative() {
    const ctx = derivativeGraph.getContext('2d');
    ctx.clearRect(0, 0, derivativeGraph.width, derivativeGraph.height);
    
    const a = parseFloat(diffA.value);
    
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
}

diffA.addEventListener('input', drawDerivative);

// Application of Differentiation
const applicationGraph = document.getElementById('application-graph');
const appA = document.getElementById('app-a');
const appB = document.getElementById('app-b');
const appC = document.getElementById('app-c');

function drawApplication() {
    const ctx = applicationGraph.getContext('2d');
    ctx.clearRect(0, 0, applicationGraph.width, applicationGraph.height);
    
    const a = parseFloat(appA.value);
    const b = parseFloat(appB.value);
    const c = parseFloat(appC.value);
    
    ctx.beginPath();
    ctx.moveTo(0, applicationGraph.height / 2);
    ctx.lineTo(applicationGraph.width, applicationGraph.height / 2);
    ctx.moveTo(applicationGraph.width / 2, 0);
    ctx.lineTo(applicationGraph.width / 2, applicationGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    // Draw f(x) = ax^2 + bx + c
    ctx.beginPath();
    let criticalPoints = [];
    for (let x = -5; x <= 5; x += 0.1) {
        const y = a * x * x + b * x + c;
        const canvasX = (x + 5) * (applicationGraph.width / 10);
        const canvasY = applicationGraph.height - (y + 12.5) * (applicationGraph.height / 25);
        if (x === -5) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
        
        // Check for critical points
        const dy = 2 * a * x + b;
        if (Math.abs(dy) < 0.1) {
            criticalPoints.push({x: canvasX, y: canvasY});
        }
}
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
    // Draw critical points
    criticalPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    });
    
    ctx.fillStyle = 'black';
    ctx.fillText('f(x) = ax^2 + bx + c', 10, 20);
    ctx.fillText('Red dots: Critical points', 10, 40);
}

appA.addEventListener('input', drawApplication);
appB.addEventListener('input', drawApplication);
appC.addEventListener('input', drawApplication);

// Initialize all graphs
drawFunction();
drawLimit();
drawDerivative();
drawApplication();

