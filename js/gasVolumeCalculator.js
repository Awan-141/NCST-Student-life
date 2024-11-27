function calculateMoles() {
    const mass = parseFloat(document.getElementById('mass-input').value);
    const molarMass = parseFloat(document.getElementById('molar-mass-input').value);
    
    if (isNaN(mass) || isNaN(molarMass)) {
        document.getElementById('moles-result').textContent = 'Please enter valid numbers';
        return;
    }

    const moles = mass / molarMass;
    document.getElementById('moles-result').textContent = `Number of moles: ${moles.toFixed(4)} mol`;
}

function calculateGasVolume() {
    const pressure = parseFloat(document.getElementById('pressure-input').value);
    const temperature = parseFloat(document.getElementById('temperature-input').value);
    const moles = parseFloat(document.getElementById('moles-input').value);
    const R = 0.08206; // Gas constant in L⋅atm/(mol⋅K)

    if (isNaN(pressure) || isNaN(temperature) || isNaN(moles)) {
        document.getElementById('volume-result').textContent = 'Please enter valid numbers';
        return;
    }

    const volume = (moles * R * temperature) / pressure;
    document.getElementById('volume-result').textContent = `Volume: ${volume.toFixed(4)} L`;
}

function calculateConcentration() {
    const mass = parseFloat(document.getElementById('solute-mass').value);
    const volume = parseFloat(document.getElementById('solution-volume').value);

    if (isNaN(mass) || isNaN(volume)) {
        document.getElementById('concentration-result').textContent = 'Please enter valid numbers';
        return;
    }

    const concentration = mass / volume;
    document.getElementById('concentration-result').textContent = `Concentration: ${concentration.toFixed(4)} g/L`;
}