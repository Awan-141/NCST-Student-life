function setupLeChatelier() {
    const applyChangeButton = document.getElementById('apply-change');
    applyChangeButton.addEventListener('click', simulateEquilibrium);
}

function simulateEquilibrium() {
    const changeType = document.getElementById('change-type').value;
    const changeValue = document.getElementById('change-value').value;
    const result = document.getElementById('equilibrium-result');
    
    let shiftDirection;
    switch(changeType) {
        case 'temperature':
            shiftDirection = changeValue > 50 ? 'right' : 'left';
            break;
        case 'pressure':
            shiftDirection = changeValue > 50 ? 'left' : 'right';
            break;
        case 'concentration':
            shiftDirection = changeValue > 50 ? 'left' : 'right';
            break;
    }
    
    result.innerHTML = `
        <p>Change applied: ${changeType} ${changeValue > 50 ? 'increased' : 'decreased'}</p>
        <p>Equilibrium shifted to the ${shiftDirection}</p>
        <div class="equilibrium-animation" style="background: linear-gradient(to right, #3498db ${changeValue}%, #e74c3c ${100-changeValue}%);"></div>
    `;
}

document.addEventListener('DOMContentLoaded', setupLeChatelier);

