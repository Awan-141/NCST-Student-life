const quizQuestions = [
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "What is the atomic number of Carbon?", answer: "6" },
    { question: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen" },
    { question: "What is the pH of a neutral solution?", answer: "7" },
    { question: "What is the chemical formula for table salt?", answer: "NaCl" }
];

function setupQuiz() {
    const startQuizButton = document.getElementById('start-quiz');
    startQuizButton.addEventListener('click', startQuiz);
}

function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        quizContainer.innerHTML += `
            <div class="quiz-question">
                <p>${index + 1}. ${q.question}</p>
                <input type="text" id="answer-${index}" class="quiz-answer">
                <button onclick="checkAnswer(${index})">Check</button>
                <span id="result-${index}" class="quiz-result"></span>
            </div>
        `;
    });
}

function checkAnswer(index) {
    const userAnswer = document.getElementById(`answer-${index}`).value;
    const result = document.getElementById(`result-${index}`);
    if (userAnswer.toLowerCase() === quizQuestions[index].answer.toLowerCase()) {
        result.textContent = "Correct!";
        result.className = "quiz-result correct";
    } else {
        result.textContent = "Incorrect. Try again.";
        result.className = "quiz-result incorrect";
    }
}

document.addEventListener('DOMContentLoaded', setupQuiz);

