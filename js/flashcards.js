const flashcards = [
    { term: "Atom", definition: "The basic unit of matter" },
    { term: "Molecule", definition: "A group of atoms bonded together" },
    { term: "Element", definition: "A pure substance made of only one type of atom" },
    // Add more flashcards...
];

let currentCard = 0;

function showFlashcard() {
    document.getElementById('flashcard-term').textContent = flashcards[currentCard].term;
    document.getElementById('flashcard-definition').textContent = flashcards[currentCard].definition;
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function nextFlashcard() {
    currentCard = (currentCard + 1) % flashcards.length;
    const card = document.querySelector('.flashcard');
    card.classList.remove('flipped');
    showFlashcard();
}

document.addEventListener('DOMContentLoaded', showFlashcard);