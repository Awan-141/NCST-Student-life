function setupAcidCarbonate() {
    const mixButton = document.getElementById('mix-reagents');
    mixButton.addEventListener('click', simulateReaction);
}

function simulateReaction() {
    const acid = document.getElementById('acid-type').value;
    const carbonate = document.getElementById('carbonate-type').value;
    const result = document.getElementById('reaction-result');
    
    result.innerHTML = `
        <p>Reaction: ${acid} + ${carbonate} → Salt + H₂O + CO₂</p>
        <div class="reaction-animation">
            <div class="beaker">
                <div class="liquid"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', setupAcidCarbonate);

