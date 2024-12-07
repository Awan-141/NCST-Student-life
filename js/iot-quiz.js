const quizData = [
    {
        question: "What does IoT stand for?",
        options: ["Internet of Things", "Integration of Technology", "Interconnected Terminals", "Intelligent Online Tools"],
        correct: 0
    },
    {
        question: "Which of these is NOT a common IoT device?",
        options: ["Smart thermostat", "Connected car", "Typewriter", "Fitness tracker"],
        correct: 2
    },
    {
        question: "What is a key component of IoT devices?",
        options: ["Sensors", "Keyboards", "Monitors", "Printers"],
        correct: 0
    },
    {
        question: "Which programming language is commonly used for IoT projects with Raspberry Pi?",
        options: ["Java", "C#", "Python", "Ruby"],
        correct: 2
    },
    {
        question: "What is the main purpose of IoT?",
        options: ["To replace human workers", "To connect devices and share data", "To increase internet speed", "To reduce electricity consumption"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;

    optionsEl.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        optionsEl.innerHTML += `
            <div>
                <input type="radio" id="option${i}" name="answer" value="${i}">
                <label for="option${i}">${option}</label>
            </div>
        `;
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestion].correct) {
            score++;
            resultEl.textContent = "Correct!";
            resultEl.style.color = "green";
        } else {
            resultEl.textContent = "Incorrect. The correct answer was: " + quizData[currentQuestion].options[quizData[currentQuestion].correct];
            resultEl.style.color = "red";
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionEl.textContent = `Quiz completed! Your score: ${score}/${quizData.length}`;
    optionsEl.innerHTML = "";
    submitBtn.style.display = "none";
    resultEl.textContent = "";
}

submitBtn.addEventListener("click", checkAnswer);

loadQuestion();

