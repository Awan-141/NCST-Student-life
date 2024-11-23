const poetryQuestions = [
    {
        question: "الأسلوب في قول الشاعر: يا شباب الشرق جداً واتحاداً:",
        type: "mcq",
        options: ["أسلوب شرط", "أسلوب نداء", "أسلوب استفهام"],
        answer: "أسلوب نداء",
        explanation: "الأسلوب هو أسلوب نداء حيث ينادي الشاعر شباب الشرق."
    }
];

let currentPoetryQuestionIndex = 0;
let poetryScore = 0;
let attemptedPoetryQuestions = [];

function displayPoetryQuestion() {
    const currentQuestion = poetryQuestions[currentPoetryQuestionIndex];
    document.getElementById('poetry-question').textContent = currentQuestion.question;
    document.getElementById('poetry-feedback').textContent = '';
    document.getElementById('poetry-explanation').style.display = 'none';

    const optionsContainer = document.getElementById('poetry-options');
    const answerInput = document.getElementById('poetry-answer-input');

    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'block';
    answerInput.style.display = 'none';
    
    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        label.className = 'poetry-option';
        label.innerHTML = `
            <input type="radio" name="poetry-answer" value="${option}">
            ${option}
        `;
        optionsContainer.appendChild(label);
    });
}

function handlePoetrySubmit() {
    const currentQuestion = poetryQuestions[currentPoetryQuestionIndex];
    const selectedOption = document.querySelector('input[name="poetry-answer"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    if (userAnswer) {
        const isCorrect = userAnswer === currentQuestion.answer;
        if (isCorrect) {
            document.getElementById('poetry-feedback').textContent = 'صحيح! عمل رائع!';
            document.getElementById('poetry-feedback').className = 'poetry-feedback correct';
            poetryScore++;
            document.getElementById('poetry-score').textContent = `الدرجة: ${poetryScore}`;
            document.getElementById('poetry-explanation').style.display = 'block';
            document.getElementById('poetry-explanation-text').textContent = currentQuestion.explanation;
        } else {
            document.getElementById('poetry-feedback').textContent = 'غير صحيح. حاول مرة أخرى!';
            document.getElementById('poetry-feedback').className = 'poetry-feedback incorrect';
        }

        attemptedPoetryQuestions.push({
            question: currentQuestion.question,
            userAnswer: userAnswer,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect
        });
    }
}

function showPoetrySummary() {
    const summaryContainer = document.getElementById('poetry-summary');
    summaryContainer.innerHTML = '';

    attemptedPoetryQuestions.forEach((q, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'poetry-result-item';
        resultItem.innerHTML = `
            <strong>السؤال ${index + 1}:</strong> ${q.question}<br>
            <strong>إجابتك:</strong> ${q.userAnswer}<br>
            <strong>الإجابة الصحيحة:</strong> ${q.correctAnswer}<br>
            <strong>${q.isCorrect ? 'صحيح' : 'غير صحيح'}</strong>
        `;
        summaryContainer.appendChild(resultItem);
    });
}