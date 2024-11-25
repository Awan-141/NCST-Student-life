const limitGraph = document.getElementById('limit-graph');
const limitH = document.getElementById('limit-h');
const limitValue = document.getElementById('limit-value');

function updateLimitHValue() {
    document.getElementById('limit-h-value').textContent = limitH.value;
}

function drawLimit() {
    const ctx = limitGraph.getContext('2d');
    ctx.clearRect(0, 0, limitGraph.width, limitGraph.height);
    
    const h = parseFloat(limitH.value);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(0, limitGraph.height / 2);
    ctx.lineTo(limitGraph.width, limitGraph.height / 2);
    ctx.moveTo(limitGraph.width / 2, 0);
    ctx.lineTo(limitGraph.width / 2, limitGraph.height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
    
    // Draw function
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
    
    // Update limit value
    limitValue.textContent = `Limit as h → 0: ${hY.toFixed(4)}`;
}

limitH.addEventListener('input', () => { updateLimitHValue(); drawLimit(); });

// Initialize
updateLimitHValue();
drawLimit();

