export function initializeAcidCarbonate() {
    const lab = document.querySelector('#acid-carbonate-lab');
    if (!lab) {
      console.error('Acid-carbonate lab container not found');
      return;
    }
  
    const mixButton = lab.querySelector('button');
    const acidSelect = lab.querySelector('#acid-type');
    const carbonateSelect = lab.querySelector('#carbonate-type');
    const result = lab.querySelector('.result');
  
    if (!mixButton || !acidSelect || !carbonateSelect || !result) {
      console.error('Acid-carbonate lab elements not found');
      return;
    }
  
    mixButton.addEventListener('click', () => {
      const acid = acidSelect.value;
      const carbonate = carbonateSelect.value;
      
      result.textContent = `Reaction: ${acid} + ${carbonate} → products + CO2`;
    });
  
    // Debug log
    console.log('Acid-carbonate lab initialized');
  }