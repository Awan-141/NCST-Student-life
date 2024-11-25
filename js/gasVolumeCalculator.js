function setupGasVolumeCalculator() {
    const calculateButton = document.getElementById('calculate-gas-volume');
    calculateButton.addEventListener('click', calculateGasVolume);
}

function calculateGasVolume() {
    const moles = parseFloat(document.getElementById('moles-gas').value);
    
    if (isNaN(moles)) {
        document.getElementById('volume-result').textContent = 'Please enter a valid number for moles of gas.';
        return;
    }
    
    const volume = moles * 24; // Assuming standard conditions (24 dm³/mol)
    document.getElementById('volume-result').textContent = `Volume: ${volume.toFixed(2)} dm³`;
}

document.addEventListener('DOMContentLoaded', setupGasVolumeCalculator);

