// Quiz data
// Utility function to display notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 16px';
    notification.style.borderRadius = '6px';
    notification.style.color = '#fff';
    notification.style.zIndex = 9999;
    
    if(type === 'error') notification.style.background = '#ef4444';
    else if(type === 'success') notification.style.background = '#22c55e';
    else notification.style.background = '#333';

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// LocalStorage helper functions
function getFromLocalStorage(key, defaultValue = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : defaultValue;
    } catch (e) {
        console.warn('Error reading localStorage key:', key, e);
        return defaultValue;
    }
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('Error saving to localStorage key:', key, e);
    }
}






const quizData = [
    {
        question: "What type of activities do you enjoy most?",
        options: [
            { text: "Solving mathematical problems", icon: "fas fa-calculator" },
            { text: "Reading and writing stories", icon: "fas fa-book" },
            { text: "Managing financial budgets", icon: "fas fa-chart-line" },
            { text: "Building and fixing things", icon: "fas fa-tools" }
        ]
    },
    {
        question: "Which work environment do you prefer?",
        options: [
            { text: "Office with structured routine", icon: "fas fa-building" },
            { text: "Laboratory or research setting", icon: "fas fa-flask" },
            { text: "Outdoor or field work", icon: "fas fa-tree" },
            { text: "Creative studio or workshop", icon: "fas fa-palette" }
        ]
    },
    {
        question: "What motivates you most?",
        options: [
            { text: "Solving complex problems", icon: "fas fa-puzzle-piece" },
            { text: "Helping others directly", icon: "fas fa-hands-helping" },
            { text: "Creating something new", icon: "fas fa-lightbulb" },
            { text: "Analyzing data and patterns", icon: "fas fa-chart-bar" }
        ]
    }
];

// Quiz state
let currentQuestion = 0;
let userAnswers = [];
let quizCompleted = false;

// DOM elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.querySelector('.options-container');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize quiz
function initializeQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    loadQuestion();
    updateProgress();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestion + 1;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create options
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(optionDiv, index);

        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">
                <i class="${option.icon}"></i>
                ${option.text}
            </label>
        `;

        optionsContainer.appendChild(optionDiv);
    });

    // Restore previous answer if exists
    if (userAnswers[currentQuestion] !== undefined) {
        const selectedOption = optionsContainer.children[userAnswers[currentQuestion]];
        selectedOption.classList.add('selected');
        selectedOption.querySelector('input').checked = true;
    }

    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finish' : 'Next';
    nextBtn.innerHTML = currentQuestion === quizData.length - 1 ? 
        '<i class="fas fa-check"></i> Finish' : 
        'Next <i class="fas fa-arrow-right"></i>';
}

// Select option
function selectOption(optionElement, index) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        opt.querySelector('input').checked = false;
    });

    // Add selection to clicked option
    optionElement.classList.add('selected');
    optionElement.querySelector('input').checked = true;

    // Store answer
    userAnswers[currentQuestion] = index;
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Navigate to next question
function nextQuestion() {
    // Check if answer is selected
    if (userAnswers[currentQuestion] === undefined) {
        showNotification('Please select an answer before proceeding', 'error');
        return;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    } else {
        finishQuiz();
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Finish quiz and show results
function finishQuiz() {
    // Calculate results
    const results = calculateResults();
    
    // Save quiz completion
    const userData = getFromLocalStorage('pathfinderUserData', {});
    userData.completedQuizzes = userData.completedQuizzes || [];
    userData.completedQuizzes.push({
        date: new Date().toISOString(),
        answers: userAnswers,
        results: results
    });
    saveToLocalStorage('pathfinderUserData', userData);

    // Show results
    showQuizResults(results);
}

// Calculate quiz results
function calculateResults() {
    const scores = {
        analytical: 0,
        creative: 0,
        technical: 0,
        social: 0
    };

    // Simple scoring based on answer patterns
    userAnswers.forEach((answer, questionIndex) => {
        switch (questionIndex) {
            case 0: // Activities question
                if (answer === 0) scores.analytical += 2;
                else if (answer === 1) scores.creative += 2;
                else if (answer === 2) scores.analytical += 1;
                else if (answer === 3) scores.technical += 2;
                break;
            case 1: // Work environment question
                if (answer === 0) scores.analytical += 1;
                else if (answer === 1) scores.technical += 2;
                else if (answer === 2) scores.social += 1;
                else if (answer === 3) scores.creative += 2;
                break;
            case 2: // Motivation question
                if (answer === 0) scores.analytical += 2;
                else if (answer === 1) scores.social += 2;
                else if (answer === 2) scores.creative += 2;
                else if (answer === 3) scores.analytical += 1;
                break;
        }
    });

    // Find top scores
    const topScores = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 2);

    return {
        scores: scores,
        topCategories: topScores.map(([category]) => category),
        recommendations: getRecommendations(topScores.map(([category]) => category))
    };
}

// Get career recommendations based on scores
function getRecommendations(categories) {
    const recommendations = {
        analytical: [
            { career: "Software Engineer", field: "Technology" },
            { career: "Data Scientist", field: "Technology" },
            { career: "Business Analyst", field: "Business" }
        ],
        creative: [
            { career: "Content Writer", field: "Arts" },
            { career: "Graphic Designer", field: "Arts" },
            { career: "Marketing Specialist", field: "Business" }
        ],
        technical: [
            { career: "Mechanical Engineer", field: "Engineering" },
            { career: "Software Developer", field: "Technology" },
            { career: "Lab Technician", field: "Medical" }
        ],
        social: [
            { career: "Teacher", field: "Education" },
            { career: "Counselor", field: "Healthcare" },
            { career: "Social Worker", field: "Social Services" }
        ]
    };

    let allRecommendations = [];
    categories.forEach(category => {
        if (recommendations[category]) {
            allRecommendations = allRecommendations.concat(recommendations[category]);
        }
    });

    return allRecommendations.slice(0, 6); // Return top 6 recommendations
}

// Show quiz results
function showQuizResults(results) {
    const quizContainer = document.querySelector('.quiz-container');
    
    const resultsHTML = `
        <div class="quiz-results">
            <div class="results-header">
                <h2>Quiz Results</h2>
                <p>Based on your answers, here are your career recommendations:</p>
            </div>
            
            <div class="results-summary">
                <h3>Your Top Traits:</h3>
                <div class="traits-list">
                    ${results.topCategories.map(category => `
                        <div class="trait-badge">
                            ${category.charAt(0).toUpperCase() + category.slice(1)}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recommendations">
                <h3>Recommended Careers:</h3>
                <div class="recommendation-cards">
                    ${results.recommendations.map(rec => `
                        <div class="recommendation-card">
                            <h4>${rec.career}</h4>
                            <span class="field-badge">${rec.field}</span>
                            <button class="btn btn-primary" onclick="window.location.href='careers.html'">
                                Learn More
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="results-actions">
                <button class="btn btn-primary" onclick="window.location.href='careers.html'">
                    Explore Careers
                </button>
                <button class="btn btn-secondary" onclick="restartQuiz()">
                    Retake Quiz
                </button>
            </div>
        </div>
    `;

    quizContainer.innerHTML = resultsHTML;

    // Add results styles
    const resultsStyle = document.createElement('style');
    resultsStyle.textContent = `
        .quiz-results {
            padding: 2rem;
        }
        
        .results-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .results-header h2 {
            color: #333;
            margin-bottom: 0.5rem;
        }
        
        .results-summary {
            margin-bottom: 2rem;
        }
        
        .traits-list {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }
        
        .trait-badge {
            background: #667eea;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 500;
        }
        
        .recommendation-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .recommendation-card {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #e5e7eb;
        }
        
        .recommendation-card h4 {
            color: #333;
            margin-bottom: 0.5rem;
        }
        
        .field-badge {
            background: #ede9fe;
            color: #667eea;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.8rem;
            display: inline-block;
            margin: 0.5rem 0;
        }
        
        .results-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }
    `;
    document.head.appendChild(resultsStyle);
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    quizCompleted = false;
    
    // Reload original quiz HTML
    location.reload();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
});

// Make functions globally available
window.selectOption = selectOption;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;