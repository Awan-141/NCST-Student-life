const quizQuestions = [
    {
        question: "What is the atomic number of Hydrogen?",
        options: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        question: "Which element is a noble gas?",
        options: ["Nitrogen", "Helium", "Oxygen", "Carbon"],
        correct: 1
    },
    // Add more questions...
];

let currentQuestion = 0;

function startQuiz() {
    currentQuestion = 0;
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = quizQuestions[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="mb-4">
            <h3 class="text-xl font-semibold">${question.question}</h3>
        </div>
        <div class="space-y-2">
            ${question.options.map((option, index) => `
                <button 
                    onclick="checkAnswer(${index})" 
                    class="quiz-option w-full text-left p-2 rounded border hover:bg-gray-100"
                >${option}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    if (selectedIndex === question.correct) {
        alert('Correct!');
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            document.getElementById('quiz-container').innerHTML = `
                <h3 class="text-xl font-semibold">Quiz Complete!</h3>
                <button onclick="startQuiz()" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
                    Start Over
                </button>
            `;
        }
    } else {
        alert('Try again!');
    }
}