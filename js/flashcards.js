const flashcards = [
    { term: "Atom", definition: "The basic unit of matter" },
    { term: "Molecule", definition: "A group of atoms bonded together" },
    { term: "Element", definition: "A pure substance made of only one type of atom" },
    { term: "Compound", definition: "A substance made of two or more different elements chemically combined" },
    { term: "Mixture", definition: "A combination of two or more substances where no chemical reaction occurs" }
];

let currentCard = 0;

function setupFlashcards() {
    const nextCardButton = document.getElementById('next-flashcard');
    nextCardButton.addEventListener('click', nextFlashcard);
    updateFlashcard();
}

function nextFlashcard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateFlashcard();
}

function updateFlashcard() {
    document.getElementById('flashcard-term').textContent = flashcards[currentCard].term;
    document.getElementById('flashcard-definition').textContent = flashcards[currentCard].definition;
}

document.addEventListener('DOMContentLoaded', () => {
    setupFlashcards();
    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
});

