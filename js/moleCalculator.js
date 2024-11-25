function setupMoleCalculator() {
    const calculateButton = document.getElementById('calculate-moles');
    calculateButton.addEventListener('click', calculateMoles);
}

function calculateMoles() {
    const mass = parseFloat(document.getElementById('mass-input').value);
    const molarMass = parseFloat(document.getElementById('molar-mass-input').value);
    
    if (isNaN(mass) || isNaN(molarMass)) {
        document.getElementById('mole-result').textContent = 'Please enter valid numbers for mass and molar mass.';
        return;
    }
    
    const moles = mass / molarMass;
    document.getElementById('mole-result').textContent = `Number of moles: ${moles.toFixed(4)}`;
}

document.addEventListener('DOMContentLoaded', setupMoleCalculator);

