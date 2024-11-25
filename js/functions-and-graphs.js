const functionGraph = document.getElementById('function-graph');
const functionType = document.getElementById('function-type');
const paramA = document.getElementById('param-a');
const paramB = document.getElementById('param-b');
const paramC = document.getElementById('param-c');
const functionEquation = document.getElementById('function-equation');

function updateParamValue(param) {
    document.getElementById(`${param.id}-value`).textContent = param.value;
}

function drawFunction() {
    const ctx = functionGraph.getContext('2d');
    ctx.clearRect(0, 0, functionGraph.width, functionGraph.height);
    
    const a = parseFloat(paramA.value);
    const b = parseFloat(paramB.value);
    const c = parseFloat(paramC.value);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, functionGraph.height / 2);
    ctx.lineTo(functionGraph.width, functionGraph.height / 2);
    ctx.moveTo(functionGraph.width / 2, 0);
    ctx.lineTo(functionGraph.width / 2, functionGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    // Draw function
    ctx.beginPath();
    let equation = '';
    for (let x = -10; x <= 10; x += 0.1) {
        let y;
        switch (functionType.value) {
            case 'linear':
                y = a * x + b;
                equation = `f(x) = ${a}x + ${b}`;
                break;
            case 'quadratic':
                y = a * x * x + b * x + c;
                equation = `f(x) = ${a}x² + ${b}x + ${c}`;
                break;
            case 'exponential':
                y = a * Math.exp(b * x) + c;
                equation = `f(x) = ${a}e^(${b}x) + ${c}`;
                break;
            case 'logarithmic':
                y = a * Math.log(b * x + c);
                equation = `f(x) = ${a}ln(${b}x + ${c})`;
                break;
            case 'trigonometric':
                y = a * Math.sin(b * x) + c;
                equation = `f(x) = ${a}sin(${b}x) + ${c}`;
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
    
    functionEquation.textContent = equation;
}

functionType.addEventListener('change', drawFunction);
paramA.addEventListener('input', () => { updateParamValue(paramA); drawFunction(); });
paramB.addEventListener('input', () => { updateParamValue(paramB); drawFunction(); });
paramC.addEventListener('input', () => { updateParamValue(paramC); drawFunction(); });

// Initialize
updateParamValue(paramA);
updateParamValue(paramB);
updateParamValue(paramC);
drawFunction();

