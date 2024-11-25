// Get references to DOM elements
const applicationGraph = document.getElementById('application-graph');
const appInputs = {
    a: document.getElementById('app-a'),
    b: document.getElementById('app-b'),
    c: document.getElementById('app-c'),
};
const criticalPointsDisplay = document.getElementById('critical-points');

// Update the displayed value of the input
function updateAppValue(param) {
    const valueElement = document.getElementById(`${param.id}-value`);
    if (valueElement) {
        valueElement.textContent = param.value;
    }
}

// Retrieve and parse input values
function getAppValues() {
    return {
        a: parseFloat(appInputs.a.value) || 0,
        b: parseFloat(appInputs.b.value) || 0,
        c: parseFloat(appInputs.c.value) || 0,
    };
}

// Draw the application graph
function drawApplication() {
    const ctx = applicationGraph.getContext('2d');
    ctx.clearRect(0, 0, applicationGraph.width, applicationGraph.height);
    
    const { a, b, c } = getAppValues();
    
    // Draw axes
    drawAxes(ctx);

    // Draw the quadratic function f(x) = ax^2 + bx + c
    drawQuadraticFunction(ctx, a, b, c);
}

// Draw the axes on the graph
function drawAxes(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, applicationGraph.height / 2);
    ctx.lineTo(applicationGraph.width, applicationGraph.height / 2); // X-axis
    ctx.moveTo(applicationGraph.width / 2, 0);
    ctx.lineTo(applicationGraph.width / 2, applicationGraph.height); // Y-axis
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
}

// Draw the quadratic function and its critical points
function drawQuadraticFunction(ctx, a, b, c) {
    ctx.beginPath();
    let criticalPointsArray = [];
    
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
            criticalPointsArray.push({ x, y });
        }
    }
    
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
    // Draw critical points
    drawCriticalPoints(ctx, criticalPointsArray);
    
    // Display function equation and critical points info
    displayFunctionInfo(a, b, c, criticalPointsArray);
}

// Draw critical points on the graph
function drawCriticalPoints(ctx, criticalPoints) {
    criticalPoints.forEach(point => {
        const canvasX = (point.x + 5) * (applicationGraph.width / 10);
        const canvasY = applicationGraph.height - (point.y + 12.5) * (applicationGraph.height / 25);
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    });
}

// Display the function equation and critical points information
function displayFunctionInfo(a, b, c, criticalPoints) {
    ctx.fillStyle = 'black';
    ctx.fillText(`f(x) = ${a}x^2 + ${b}x + ${c}`, 10, 20);
    ctx.fillText('Red dots: Critical points', 10, 40);
    
    if (criticalPoints.length > 0) {
        criticalPointsDisplay.innerHTML = 'Critical Points:<br>' + 
            criticalPoints.map(point => `(${point.x.toFixed(2)}, ${point.y.toFixed(2)})`).join('<br>');
    } else {
        criticalPointsDisplay.textContent = 'No critical points found';
    }
}

// Add event listeners to update values and redraw the graph when inputs change
Object.values(appInputs).forEach(input => {
    input.addEventListener('input', (event) => {
        updateAppValue(event.target);
        drawApplication();
    });
});

// Initial draw call to set the graph based on default values
drawApplication();