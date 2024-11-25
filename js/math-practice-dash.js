const problems = [
    {
        question: "Evaluate f(2) given f(x) = x - 2",
        type: "input",
        answer: "0",
        explanation: "f(2) = 2 - 2 = 0"
    },
    {
        question: "Is the function f(x) = x - 2 continuous at x = 2?",
        type: "mcq",
        options: ["Yes", "No"],
        answer: "Yes",
        explanation: "The function is a linear function, which is continuous for all real numbers."
    },
    {
        question: "What type of function is f(x) = 11 - x?",
        type: "mcq",
        options: ["Polynomial", "Rational", "Trigonometric", "Exponential"],
        answer: "Polynomial",
        explanation: "This is a linear function, which is a type of polynomial function."
    },
    {
        question: "Find the derivative of (6x^2)(2x) using the product rule",
        type: "input",
        answer: "24x^2",
        explanation: "Using the product rule, d/dx[(6x^2)(2x)] = 6x^2 * d/dx(2x) + 2x * d/dx(6x^2) = 6x^2 * 2 + 2x * 12x = 12x^2 + 24x^2 = 36x^2"
    },
    {
        question: "Calculate (f^-1 * f^-1)(-1) given f(x) = x + 2",
        type: "input",
        answer: "-6",
        explanation: "First, find f^-1(x) = x - 2. Then, (f^-1 * f^-1)(-1) = f^-1(-1) * f^-1(-1) = (-3) * (-3) = 9"
    }
];

let currentProblem = null;
let score = 0;

function getNewProblem() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    currentProblem = problems[randomIndex];
    document.getElementById('question').textContent = currentProblem.question;
    document.getElementById('feedback').textContent = '';
    document.getElementById('explanation').style.display = 'none';

    const optionsContainer = document.getElementById('options');
    const answerInput = document.getElementById('answer-input');

    if (currentProblem.type === 'mcq') {
        optionsContainer.innerHTML = '';
        optionsContainer.style.display = 'block';
        answerInput.style.display = 'none';
        currentProblem.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = 'option';
            label.innerHTML = `
                <input type="radio" name="answer" value="${option}">
                ${option}
            `;
            optionsContainer.appendChild(label);
        });
    } else {
        optionsContainer.style.display = 'none';
        answerInput.style.display = 'block';
        answerInput.value = '';
    }
}

function handleSubmit() {
    let userAnswer;
    if (currentProblem.type === 'mcq') {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        userAnswer = selectedOption ? selectedOption.value : null;
    } else {
        userAnswer = document.getElementById('answer-input').value;
    }

    if (userAnswer) {
        if (userAnswer.toLowerCase().replace(/\s/g, '') === currentProblem.answer.toLowerCase().replace(/\s/g, '')) {
            document.getElementById('feedback').textContent = 'Correct! Great job!';
            document.getElementById('feedback').className = 'feedback correct';
            score++;
            document.getElementById('score').textContent = `Score: ${score}`;
            document.getElementById('explanation').style.display = 'block';
            document.getElementById('explanation-text').textContent = currentProblem.explanation;
        } else {
            document.getElementById('feedback').textContent = 'Incorrect. Try again!';
            document.getElementById('feedback').className = 'feedback incorrect';
        }
    }
}

document.getElementById('submit-btn').addEventListener('click', handleSubmit);
document.getElementById('next-btn').addEventListener('click', getNewProblem);

// Initialize the game
getNewProblem();

