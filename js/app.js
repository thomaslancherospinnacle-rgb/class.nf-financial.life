// Non-Forfeiture Financial - Classroom Clone JavaScript

// Module Data
const moduleData = [
    {
        id: 1,
        title: "MODULE 1: Understanding Assets Clients Actually Have",
        description: "Learn about all common client asset types including cash, retirement accounts, investments, real estate, and business assets.",
        duration: "12 min",
        video: "module1video.mp4",
        resources: [
            { name: "Client Asset Types Reference Guide", type: "PDF", size: "245 KB" },
            { name: "Asset Comparison Chart", type: "PDF", size: "180 KB" }
        ],
        quiz: true
    },
    {
        id: 2,
        title: "MODULE 2: Liquidity vs Availability",
        description: "Understand the critical difference between assets that are liquid and assets that are immediately available.",
        duration: "10 min",
        video: "module2video.mp4",
        resources: [
            { name: "Liquidity Reality Guide", type: "PDF", size: "320 KB" },
            { name: "Timeline Comparison Sheet", type: "PDF", size: "150 KB" }
        ],
        quiz: true
    },
    {
        id: 3,
        title: "MODULE 3: Tax, Legal & Access Rules",
        description: "Master the regulations governing each asset type including tax implications, legal requirements, and access procedures.",
        duration: "15 min",
        video: "module3video.mp4",
        resources: [
            { name: "Asset Access & Regulation Guide", type: "PDF", size: "410 KB" },
            { name: "Regulatory Quick Reference", type: "PDF", size: "190 KB" }
        ],
        quiz: true
    },
    {
        id: 4,
        title: "MODULE 4: Death Timeline - What Happens When",
        description: "Follow the complete financial timeline after death from day 1 through the first year and beyond.",
        duration: "11 min",
        video: "module4video.mp4",
        resources: [
            { name: "Financial Timeline After Death", type: "PDF", size: "290 KB" },
            { name: "Critical Gap Analysis", type: "PDF", size: "165 KB" }
        ],
        quiz: true
    },
    {
        id: 5,
        title: "MODULE 5: Asset-Based Objections",
        description: "Handle common client objections when they say they already have sufficient assets.",
        duration: "13 min",
        video: "module5video.mp4",
        resources: [
            { name: "Objections Library", type: "PDF", size: "380 KB" },
            { name: "Response Scripts", type: "PDF", size: "220 KB" }
        ],
        quiz: true
    },
    {
        id: 6,
        title: "MODULE 6: Roleplay & Case Studies",
        description: "Practice real-world scenarios with detailed case studies and roleplay exercises.",
        duration: "16 min",
        video: "module6video.mp4",
        resources: [
            { name: "Case Study Scenarios", type: "PDF", size: "450 KB" },
            { name: "Roleplay Practice Guide", type: "PDF", size: "310 KB" }
        ],
        quiz: true
    },
    {
        id: 7,
        title: "MODULE 7: Quick Reference Guide",
        description: "Your field guide with cheat sheets, quick stats, objection responses, and closing questions.",
        duration: "9 min",
        video: "module7video.mp4",
        resources: [
            { name: "Quick Reference Cheat Sheets", type: "PDF", size: "520 KB" },
            { name: "Printable Field Guide", type: "PDF", size: "280 KB" },
            { name: "Conversation Starters", type: "PDF", size: "125 KB" }
        ],
        quiz: true
    }
];

// Quiz Data
const quizData = {
    1: [
        {
            question: "Which of the following is TRUE about certificates of deposit (CDs)?",
            options: [
                "They can always be withdrawn instantly without penalty",
                "They have early withdrawal penalties and may not be instantly accessible",
                "They are the same as regular checking accounts",
                "They automatically pay out upon account holder's death"
            ],
            correct: 1
        },
        {
            question: "What is the PRIMARY purpose of a 401(k) plan?",
            options: [
                "To provide immediate cash after death",
                "To serve as an emergency fund",
                "To provide retirement income",
                "To pay funeral expenses"
            ],
            correct: 2
        }
    ],
    2: [
        {
            question: "What does 'LIQUID' mean when referring to an asset?",
            options: [
                "It's immediately available as cash",
                "It can be converted to cash",
                "It's stored in a bank account",
                "It has no value"
            ],
            correct: 1
        },
        {
            question: "How long does it typically take to access 401(k) funds after a death?",
            options: [
                "Immediately",
                "2-6 weeks",
                "6-12 months",
                "2-3 years"
            ],
            correct: 1
        }
    ]
};

// State Management
let currentModule = null;
let completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
let quizScores = JSON.parse(localStorage.getItem('quizScores') || '{}');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    
    // Check if we're on a module page
    const urlParams = new URLSearchParams(window.location.search);
    const moduleId = urlParams.get('module');
    
    if (moduleId) {
        loadModule(parseInt(moduleId));
    }
});

// Update Progress
function updateProgress() {
    const totalModules = moduleData.length;
    const completed = completedModules.length;
    const percentage = (completed / totalModules) * 100;
    
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${completed} of ${totalModules} modules completed`;
    }
}

// Load Module
function loadModule(moduleId) {
    currentModule = moduleData.find(m => m.id === moduleId);
    if (!currentModule) return;
    
    // Update breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <span>›</span>
            <span>${currentModule.title}</span>
        `;
    }
    
    // Update video info
    const videoTitle = document.querySelector('.video-title');
    const videoDescription = document.querySelector('.video-description');
    const videoPlayer = document.querySelector('#moduleVideo');
    
    if (videoTitle) videoTitle.textContent = currentModule.title;
    if (videoDescription) videoDescription.textContent = currentModule.description;
    if (videoPlayer) {
        videoPlayer.src = `videos/${currentModule.video}`;
        
        // Mark as complete when video ends
        videoPlayer.addEventListener('ended', () => {
            markModuleComplete(moduleId);
        });
    }
    
    // Load resources
    loadResources(currentModule.resources);
}

// Load Resources
function loadResources(resources) {
    const resourceList = document.querySelector('.resource-list');
    if (!resourceList) return;
    
    resourceList.innerHTML = resources.map(resource => `
        <li class="resource-item" onclick="downloadResource('${resource.name}')">
            <div class="resource-icon">📄</div>
            <div class="resource-info">
                <h4>${resource.name}</h4>
                <p>${resource.type} • ${resource.size}</p>
            </div>
        </li>
    `).join('');
}

// Download Resource
function downloadResource(name) {
    alert(`Downloading: ${name}\n\nIn a production environment, this would download the actual PDF file.`);
}

// Mark Module Complete
function markModuleComplete(moduleId) {
    if (!completedModules.includes(moduleId)) {
        completedModules.push(moduleId);
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
        updateProgress();
        
        // Show completion message
        showNotification('Module completed! 🎉');
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 24px;
        background: #1e8e3e;
        color: white;
        padding: 16px 24px;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Quiz Functions
let currentQuiz = [];
let currentQuestion = 0;
let userAnswers = [];

function loadQuiz(moduleId) {
    currentQuiz = quizData[moduleId] || [];
    currentQuestion = 0;
    userAnswers = [];
    
    if (currentQuiz.length > 0) {
        displayQuestion();
    }
}

function displayQuestion() {
    const quizContainer = document.querySelector('.quiz-section');
    if (!quizContainer || currentQuestion >= currentQuiz.length) return;
    
    const question = currentQuiz[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <div class="question-header">
                Question ${currentQuestion + 1} of ${currentQuiz.length}: ${question.question}
            </div>
            <ul class="quiz-options">
                ${question.options.map((option, index) => `
                    <li class="quiz-option" onclick="selectAnswer(${index})">
                        ${String.fromCharCode(97 + index)}) ${option}
                    </li>
                `).join('')}
            </ul>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 24px;">
            <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                Previous
            </button>
            <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn" disabled>
                ${currentQuestion === currentQuiz.length - 1 ? 'Submit Quiz' : 'Next'}
            </button>
        </div>
    `;
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    
    // Update UI
    document.querySelectorAll('.quiz-option').forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestion < currentQuiz.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function submitQuiz() {
    let correct = 0;
    currentQuiz.forEach((q, index) => {
        if (userAnswers[index] === q.correct) correct++;
    });
    
    const score = (correct / currentQuiz.length) * 100;
    const passed = score >= 80;
    
    quizScores[currentModule.id] = score;
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
    
    if (passed) {
        markModuleComplete(currentModule.id);
    }
    
    alert(`Quiz ${passed ? 'Passed' : 'Failed'}!\n\nScore: ${score.toFixed(0)}%\nCorrect: ${correct}/${currentQuiz.length}\n\n${passed ? 'Great job! You can proceed to the next module.' : 'Please review the material and try again. You need 80% to pass.'}`);
    
    if (passed) {
        window.location.href = 'index.html';
    } else {
        location.reload();
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
