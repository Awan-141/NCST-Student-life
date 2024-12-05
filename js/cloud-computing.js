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
    },
    
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (6x^2 + 8x) / (x^2 + 1) \)",
      type: "calculation",
      answer: "( -4x^2 + 12x + 8 ) / (x^2 + 1)^2",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = 6x^2 + 8x, v(x) = x^2 + 1. The derivatives are u'(x) = 12x + 8 and v'(x) = 2x."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (7x^4 - 2x^2 + x) / (x^3 + 3x) \)",
      type: "calculation",
      answer: "( 28x^6 + 80x^4 + 24x^3 - 12x^2 - 3x ) / (x^3 + 3x)^2",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = 7x^4 - 2x^2 + x, v(x) = x^3 + 3x. The derivatives are u'(x) = 28x^3 - 4x + 1 and v'(x) = 3x^2 + 3."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (x^3 + 2x - 1) / x^5 \)",
      type: "calculation",
      answer: "( -5x^7 + 3x^5 + 5x^4 ) / x^{10}",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = x^3 + 2x - 1, v(x) = x^5. The derivatives are u'(x) = 3x^2 + 2 and v'(x) = 5x^4."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (x^4 - 2x^3 + 3x) / x^2 \)",
      type: "calculation",
      answer: "( 2x^5 - 6x^3 + 7x^2 ) / x^4",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = x^4 - 2x^3 + 3x, v(x) = x^2. The derivatives are u'(x) = 4x^3 - 6x^2 + 3 and v'(x) = 2x."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (3x^5 - x^4 + 2x^3) / (x^2 + x) \)",
      type: "calculation",
      answer: "( 12x^6 - 4x^5 + 7x^4 + 13x^3 ) / (x^2 + x)^2",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = 3x^5 - x^4 + 2x^3, v(x) = x^2 + x. The derivatives are u'(x) = 15x^4 - 4x^3 + 6x^2 and v'(x) = 2x + 1."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (x^5 + 4x^3 - x^2 + 2) / (x^3 + 1) \)",
      type: "calculation",
      answer: "( 5x^7 + 17x^5 + 12x^3 - 3x^2 ) / (x^3 + 1)^2",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = x^5 + 4x^3 - x^2 + 2, v(x) = x^3 + 1. The derivatives are u'(x) = 5x^4 + 12x^2 - 2x and v'(x) = 3x^2."
    },
    {
      question: "Differentiate the following expression using the Quotient Rule: \( (x^2 - 2x + 3) / (x^2 + 4x + 3) \)",
      type: "calculation",
      answer: "( 2x^2 + 18x + 6 ) / (x^2 + 4x + 3)^2",
      explanation: "We apply the Quotient Rule: \( \frac{d}{dx} \left( \frac{u(x)}{v(x)} \right) = \frac{v(x) u'(x) - u(x) v'(x)}{[v(x)]^2} \). In this case, u(x) = x^2 - 2x + 3, v(x) = x^2 + 4x + 3. The derivatives are u'(x) = 2x - 2 and v'(x) = 2x + 4."
    },
  
    {
      question: "Differentiate \( (3x^2)(x^3) \) using the product rule.",
      type: "mcq",
      options: ["6x^4", "9x^5", "15x^4", "3x^5"],
      answer: "9x^5",
      explanation: "Using the product rule: \( \frac{d}{dx}[(3x^2)(x^3)] = 6x(x^3) + 3x^2(3x^2) = 9x^5 \)."
    },
    {
      question: "Differentiate \( (x^2 + 2x)(x^3 - x) \) using the product rule.",
      type: "mcq",
      options: ["3x^5 - 2x^3 + 2x^4 - 2x^2", "3x^5 - 2x^3 + 2x^4 + 2x^2", "x^5 - x^3 + 2x^2 - 2x", "2x^5 - 3x^4 + x^3 - 3x"],
      answer: "3x^5 - 2x^3 + 2x^4 + 2x^2",
      explanation: "Using the product rule: \( u(x) = x^2 + 2x \) and \( v(x) = x^3 - x \), we differentiate both and apply the rule."
    },
    {
      question: "Differentiate \( (2x)(x^2 - 4x + 5) \) using the product rule.",
      type: "mcq",
      options: ["2x^2 - 8x + 5", "2x^2 - 4x + 10", "2x^2 - 8x + 10", "2x^2 - 10x + 5"],
      answer: "2x^2 - 8x + 10",
      explanation: "Applying the product rule: \( u(x) = 2x \), \( v(x) = x^2 - 4x + 5 \). We find that the derivative is \( 2x^2 - 8x + 10 \)."
    },
    {
      question: "Differentiate \( (x^3)(e^x) \) using the product rule.",
      type: "mcq",
      options: ["3x^2 e^x", "x^3 e^x", "x^3 e^x + 3x^2 e^x", "3x^2 e^x + x^3 e^x"],
      answer: "x^3 e^x + 3x^2 e^x",
      explanation: "Applying the product rule: \( u(x) = x^3 \), \( v(x) = e^x \). The derivative is \( x^3 e^x + 3x^2 e^x \)."
    },
    {
      question: "Differentiate \( (x^2 + 3)(x^3 + 2x) \) using the product rule.",
      type: "mcq",
      options: ["5x^5 + 6x^3 + 12x^2 + 6x", "5x^5 + 6x^3 + 12x^2 - 6x", "6x^5 + 6x^3 + 12x^2 + 6x", "5x^5 + 9x^3 + 12x^2 + 6x"],
      answer: "5x^5 + 6x^3 + 12x^2 + 6x",
      explanation: "Using the product rule: \( u(x) = x^2 + 3 \) and \( v(x) = x^3 + 2x \), the derivative is \( 5x^5 + 6x^3 + 12x^2 + 6x \)."
    },
    {
      question: "Differentiate \( (x^2)(e^{2x}) \) using the product rule.",
      type: "mcq",
      options: ["2x e^{2x} + x^2 e^{2x}", "2x e^{2x}", "x^2 e^{2x} + 2x e^{2x}", "2 e^{2x}"],
      answer: "x^2 e^{2x} + 2x e^{2x}",
      explanation: "Using the product rule: \( u(x) = x^2 \) and \( v(x) = e^{2x} \). The derivative is \( x^2 e^{2x} + 2x e^{2x} \)."
    },
    {
      question: "Differentiate \( (x^4)(\ln x) \) using the product rule.",
      type: "mcq",
      options: ["4x^3 ln(x) + x^4/x", "4x^3 ln(x)", "12x^2 ln(x) + 4x^2/x", "4x^3 ln(x) + x^4"],
      answer: "4x^3 ln(x) + x^4/x",
      explanation: "Using the product rule: \( u(x) = x^4 \) and \( v(x) = \ln x \). The derivative is \( 4x^3 \ln(x) + x^4/x \)."
    },
    {
      question: "Differentiate \( (2x)(\sqrt{x}) \) using the product rule.",
      type: "mcq",
      options: ["2x^2", "x^{3/2}", "2x^{1/2} + x^{3/2}", "2x^{3/2}"],
      answer: "2x^{1/2} + x^{3/2}",
      explanation: "Using the product rule: \( u(x) = 2x \) and \( v(x) = \sqrt{x} \). The derivative is \( 2x^{1/2} + x^{3/2} \)."
    },
    {
      question: "Differentiate \( (x^4)(\sin x) \) using the product rule.",
      type: "mcq",
      options: ["4x^3 sin(x) + x^4 cos(x)", "4x^3 cos(x) + x^4 sin(x)", "4x^3 cos(x)", "x^4 cos(x)"],
      answer: "4x^3 cos(x) + x^4 sin(x)",
      explanation: "Using the product rule: \( u(x) = x^4 \) and \( v(x) = \sin x \), the derivative is \( 4x^3 \cos x + x^4 \sin x \)."
    },
    {
      question: "Differentiate \( (5x^2)(\ln x) \) using the product rule.",
      type: "mcq",
      options: ["10x ln(x) + 5x", "5x^2 ln(x) + 10x/x", "5x^2 ln(x) + 10x", "10x ln(x)"],
      answer: "10x ln(x) + 5x",
      explanation: "Using the product rule: \( u(x) = 5x^2 \) and \( v(x) = \ln x \). The derivative is \( 10x \ln x + 5x \)."
    },
    {
      question: "Differentiate \( (x^2)(e^{x}) \) using the product rule.",
      type: "mcq",
      options: ["2x e^{x} + x^2 e^{x}", "2x e^{x}", "x^2 e^{x} + 2x e^{x}", "x^2 e^{x}"],
      answer: "x^2 e^{x} + 2x e^{x}",
      explanation: "Using the product rule: \( u(x) = x^2 \) and \( v(x) = e^{x} \). The derivative is \( x^2 e^{x} + 2x e^{x} \)."
    }
  ];
  
  
  
  let currentProblem = null;
  let score = 0;
  let questionsAttempted = []; // Track all attempted questions
  
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
      const isCorrect = userAnswer.toLowerCase().replace(/\s/g, '') === currentProblem.answer.toLowerCase().replace(/\s/g, '');
      if (isCorrect) {
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
      
      // Track the answer status (correct or incorrect)
      questionsAttempted.push({
        question: currentProblem.question,
        userAnswer: userAnswer,
        correctAnswer: currentProblem.answer,
        isCorrect: isCorrect
      });
    }
  }
  
  function showSummary() {
    const summaryContainer = document.getElementById('summary');
    summaryContainer.innerHTML = ''; // Clear previous summary
  
    // Show all attempted questions and mark them with an "X" if incorrect
    questionsAttempted.forEach((q, index) => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.innerHTML = `
        <strong>Question ${index + 1}:</strong> ${q.question} <br>
        Your answer: ${q.userAnswer} <br>
        Correct answer: ${q.correctAnswer} <br>
        ${q.isCorrect ? 'Correct' : '<span style="color:red">Incorrect (X)</span>'} <br><br>
      `;
      summaryContainer.appendChild(resultItem);
    });
  }
  
  document.getElementById('submit-btn').addEventListener('click', handleSubmit);
  document.getElementById('next-btn').addEventListener('click', getNewProblem);
  document.getElementById('end-btn').addEventListener('click', showSummary);
  
  // Initialize the game
  getNewProblem();
  