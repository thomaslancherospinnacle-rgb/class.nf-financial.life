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

// Note: Quiz data loaded from quiz-data.js
// This file contains the quiz UI and logic

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
let quizStartTime = null;

function loadQuiz(moduleId) {
    currentQuiz = allQuizData[moduleId] || [];
    currentQuestion = 0;
    userAnswers = [];
    quizStartTime = new Date();
    
    if (currentQuiz.length > 0) {
        displayQuestion();
    } else {
        const quizContainer = document.querySelector('.quiz-section');
        if (quizContainer) {
            quizContainer.innerHTML = '<p>Quiz data not available for this module.</p>';
        }
    }
}

function displayQuestion() {
    const quizContainer = document.querySelector('.quiz-section');
    if (!quizContainer || currentQuestion >= currentQuiz.length) return;
    
    const question = currentQuiz[currentQuestion];
    const progressPercent = ((currentQuestion) / currentQuiz.length) * 100;
    
    quizContainer.innerHTML = `
        <div style="margin-bottom: 24px;">
            <div class="progress-header">
                <span>Question ${currentQuestion + 1} of ${currentQuiz.length}</span>
                <span>${Math.round(progressPercent)}% Complete</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%"></div>
            </div>
        </div>
        
        <div class="quiz-question">
            <div class="question-header">
                ${question.question}
            </div>
            <ul class="quiz-options">
                ${question.options.map((option, index) => `
                    <li class="quiz-option ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                        onclick="selectAnswer(${index})" 
                        data-option="${index}">
                        <strong>${String.fromCharCode(65 + index)}.</strong> ${option}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-top: 24px; gap: 12px;">
            <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn" ${userAnswers[currentQuestion] === undefined ? 'disabled' : ''}>
                ${currentQuestion === currentQuiz.length - 1 ? 'Submit Quiz →' : 'Next →'}
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
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Please select an answer before continuing.');
        return;
    }
    
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
    const results = [];
    
    currentQuiz.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) correct++;
        
        results.push({
            question: index + 1,
            userAnswer: userAnswers[index],
            correctAnswer: q.correct,
            isCorrect: isCorrect,
            explanation: q.explanation || ''
        });
    });
    
    const score = (correct / currentQuiz.length) * 100;
    const passed = score >= 80;
    const timeSpent = Math.round((new Date() - quizStartTime) / 1000 / 60); // minutes
    
    // Save quiz score
    quizScores[currentModule.id] = {
        score: score,
        correct: correct,
        total: currentQuiz.length,
        passed: passed,
        date: new Date().toISOString(),
        timeSpent: timeSpent
    };
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
    
    if (passed) {
        markModuleComplete(currentModule.id);
    }
    
    displayQuizResults(score, correct, currentQuiz.length, passed, results, timeSpent);
}

function displayQuizResults(score, correct, total, passed, results, timeSpent) {
    const quizContainer = document.querySelector('.quiz-section');
    if (!quizContainer) return;
    
    const statusColor = passed ? '#1e8e3e' : '#d93025';
    const statusBg = passed ? '#e8f5e9' : '#fce8e6';
    const statusIcon = passed ? '✓' : '✗';
    
    quizContainer.innerHTML = `
        <div style="text-align: center; padding: 32px; background: ${statusBg}; border-radius: 8px; margin-bottom: 24px;">
            <div style="font-size: 64px; margin-bottom: 16px;">${statusIcon}</div>
            <h2 style="font-size: 32px; color: ${statusColor}; margin-bottom: 8px;">
                ${passed ? 'Quiz Passed!' : 'Quiz Not Passed'}
            </h2>
            <p style="font-size: 18px; color: #5f6368;">
                You scored ${score.toFixed(0)}% (${correct} out of ${total} correct)
            </p>
            <p style="font-size: 14px; color: #5f6368; margin-top: 8px;">
                Time spent: ${timeSpent} minute${timeSpent !== 1 ? 's' : ''}
            </p>
        </div>
        
        <div style="margin-bottom: 24px;">
            <h3 style="margin-bottom: 16px;">Your Results:</h3>
            ${results.map((r, index) => `
                <div style="padding: 16px; margin-bottom: 12px; border-radius: 8px; background: ${r.isCorrect ? '#e8f5e9' : '#fce8e6'}; border-left: 4px solid ${r.isCorrect ? '#1e8e3e' : '#d93025'};">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <strong style="color: #202124;">Question ${r.question}</strong>
                        <span style="color: ${r.isCorrect ? '#1e8e3e' : '#d93025'}; font-weight: 500;">
                            ${r.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                    <p style="font-size: 14px; color: #5f6368; margin-bottom: 8px;">
                        ${currentQuiz[index].question}
                    </p>
                    ${!r.isCorrect ? `
                        <p style="font-size: 13px; margin-top: 8px;">
                            <strong>Your answer:</strong> ${String.fromCharCode(65 + r.userAnswer)}. ${currentQuiz[index].options[r.userAnswer]}<br>
                            <strong>Correct answer:</strong> ${String.fromCharCode(65 + r.correctAnswer)}. ${currentQuiz[index].options[r.correctAnswer]}
                        </p>
                    ` : ''}
                    ${r.explanation ? `
                        <p style="font-size: 13px; color: #5f6368; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(0,0,0,0.1);">
                            <strong>Explanation:</strong> ${r.explanation}
                        </p>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        
        <div style="display: flex; gap: 12px; justify-content: center;">
            ${passed ? `
                <button class="btn btn-primary" onclick="window.location.href='../index.html'">
                    ← Back to Course
                </button>
                ${currentModule.id < 7 ? `
                    <button class="btn btn-primary" onclick="window.location.href='module${currentModule.id + 1}.html'">
                        Next Module →
                    </button>
                ` : `
                    <button class="btn btn-primary" onclick="showCertificate()">
                        View Certificate 🎓
                    </button>
                `}
            ` : `
                <button class="btn btn-secondary" onclick="location.reload()">
                    Retake Quiz
                </button>
                <button class="btn btn-secondary" onclick="window.location.href='../index.html'">
                    Back to Course
                </button>
            `}
        </div>
    `;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showCertificate() {
    const totalModules = 7;
    const passedModules = Object.values(quizScores).filter(s => s.passed).length;
    
    if (passedModules === totalModules) {
        alert(`🎓 CONGRATULATIONS! 🎓

You have successfully completed all 7 modules and passed all quizzes!

You are now certified in:
ASSETS, LIQUIDITY & REGULATIONS TRAINING

Certificate features coming soon...

Print this page or take a screenshot for your records.`);
    } else {
        alert(`You've passed ${passedModules} out of ${totalModules} modules.

Complete and pass all 7 module quizzes to earn your certification!`);
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
