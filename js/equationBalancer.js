function setupEquationBalancer() {
    const balanceButton = document.getElementById('balance-equation');
    balanceButton.addEventListener('click', balanceEquation);
}

function balanceEquation() {
    const equation = document.getElementById('equation-input').value;
    
    try {
        const balanced = math.balanceEquation(equation);
        document.getElementById('balanced-equation').textContent = `Balanced equation: ${balanced}`;
    } catch (error) {
        document.getElementById('balanced-equation').textContent = 'Error: Unable to balance the equation. Please check your input.';
    }
}

document.addEventListener('DOMContentLoaded', setupEquationBalancer);

