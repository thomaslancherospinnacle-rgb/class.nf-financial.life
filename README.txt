NON-FORFEITURE FINANCIAL - GOOGLE CLASSROOM CLONE
Finance 101: Regulations and Codes
================================================

COMPLETE HTML-BASED LEARNING MANAGEMENT SYSTEM

CONTENTS
========

✅ Fully functional HTML/CSS/JavaScript classroom interface
✅ 7 video modules (MP4 format)
✅ Progress tracking with localStorage
✅ Module completion system
✅ Responsive design (mobile & desktop)
✅ Google Classroom-inspired UI

FILE STRUCTURE
==============

non_forfeiture_classroom/
├── index.html              Main course page
├── css/
│   └── styles.css          Complete styling
├── js/
│   └── app.js              Interactive functionality
├── videos/
│   ├── module1video.mp4    Module 1: Understanding Assets (10 sec)
│   ├── module2video.mp4    Module 2: Liquidity vs Availability
│   ├── module3video.mp4    Module 3: Tax & Legal Rules
│   ├── module4video.mp4    Module 4: Death Timeline
│   ├── module5video.mp4    Module 5: Asset Objections
│   ├── module6video.mp4    Module 6: Roleplay & Cases
│   └── module7video.mp4    Module 7: Quick Reference
├── modules/
│   ├── module1.html        Individual module pages
│   ├── module2.html
│   ├── module3.html
│   ├── module4.html
│   ├── module5.html
│   ├── module6.html
│   └── module7.html
└── README.txt              This file

HOW TO USE
==========

OPTION 1: Run Locally
---------------------
1. Extract all files to a folder
2. Open index.html in a web browser
3. Navigate through modules
4. Videos will play directly in browser

OPTION 2: Host on Web Server
----------------------------
1. Upload entire folder to web hosting
2. Point domain to index.html
3. Share URL with students
4. All features work via browser

OPTION 3: Replace Videos
------------------------
The current videos are 10-second placeholders with module titles.
To add your own full-length training videos:

1. Record or create your videos
2. Name them: module1video.mp4, module2video.mp4, etc.
3. Replace files in the /videos/ folder
4. Recommended format: 1280x720, H.264, MP4
5. Recommended length: 8-15 minutes per module

FEATURES
========

✓ Progress Tracking
  - Automatically saves progress to browser
  - Shows X of 7 modules completed
  - Visual progress bar

✓ Video Player
  - HTML5 native player
  - Play, pause, seek, volume controls
  - Auto-marks complete when video ends
  - Works on all modern browsers

✓ Module Navigation
  - Click any module card to start
  - Previous/Next buttons between modules
  - Breadcrumb navigation
  - Back to course button

✓ Responsive Design
  - Works on desktop, tablet, and mobile
  - Google Classroom-inspired interface
  - Clean, professional appearance

✓ Resource Downloads
  - Each module lists study materials
  - Click to download (or simulated)
  - PDF resources listed with file sizes

COURSE MODULES
==============

MODULE 1: Understanding Assets Clients Actually Have (12 min)
Learn about cash, retirement accounts, investments, real estate, business assets

MODULE 2: Liquidity vs Availability (10 min)
Master the difference between liquid and available assets

MODULE 3: Tax, Legal & Access Rules (15 min)
Understand regulations governing each asset type

MODULE 4: Death Timeline - What Happens When (11 min)
Follow the financial timeline after death

MODULE 5: Asset-Based Objections (13 min)
Handle "I have a 401(k)" and other objections

MODULE 6: Roleplay & Case Studies (16 min)
Practice with 6 real-world scenarios

MODULE 7: Quick Reference Guide (9 min)
Cheat sheets and field tools for agents

CUSTOMIZATION
=============

Branding:
- Edit logo text in header (<h1> tag)
- Change color scheme in :root CSS variables
- Add company logo image

Content:
- Replace videos with your own
- Edit module titles and descriptions
- Add additional resources
- Customize quiz questions

Colors:
Edit /css/styles.css :root section:
--primary-color: #1a73e8;      (Main blue)
--primary-dark: #1557b0;       (Darker blue)
--success-color: #1e8e3e;      (Green)

BROWSER SUPPORT
===============

✅ Chrome/Edge (recommended)
✅ Firefox
✅ Safari
✅ Mobile browsers

Requires: HTML5 video support, localStorage, ES6 JavaScript

TECHNICAL DETAILS
=================

Framework: Vanilla JavaScript (no dependencies)
CSS: Custom stylesheet (no frameworks)
Storage: Browser localStorage for progress
Videos: MP4/H.264 format
Hosting: Any static web host (GitHub Pages, Netlify, etc.)

DEPLOYMENT OPTIONS
==================

1. GitHub Pages (FREE)
   - Upload to GitHub repository
   - Enable GitHub Pages
   - Access via yourusername.github.io/repo

2. Netlify (FREE)
   - Drag folder to Netlify
   - Get instant URL
   - Custom domain support

3. Your Own Server
   - Upload via FTP
   - No special server requirements
   - Just needs to serve HTML files

4. Learning Management System
   - Export as SCORM package (requires conversion)
   - Or embed via iframe

ADDING REAL VIDEOS
==================

To replace placeholder videos with full training:

1. Record your videos (use scripts from training package)
2. Export as MP4:
   - Resolution: 1280x720 (HD) or 1920x1080 (Full HD)
   - Codec: H.264
   - Format: MP4
   - Bitrate: 2-5 Mbps
3. Name exactly: module1video.mp4, module2video.mp4, etc.
4. Replace files in /videos/ folder
5. Keep file sizes reasonable (<100MB per video for web)

QUIZ FUNCTIONALITY
==================

The current version has basic quiz framework.
Quiz data is stored in /js/app.js

To fully enable quizzes:
1. Edit quizData object in app.js
2. Add all 10 questions per module
3. Questions automatically grade when submitted
4. Passing score: 80% (8 of 10 correct)

SUPPORT & CREDITS
=================

This is a standalone HTML classroom clone.
No external dependencies or frameworks required.
All code included and ready to use.

Created: 2026
License: Use freely for your training programs


===============================================
QUIZ FUNCTIONALITY - FULLY IMPLEMENTED
===============================================

✅ ALL QUIZZES NOW WORKING!

FEATURES:
---------
✓ 10 questions per module (70 total questions)
✓ Multiple choice format
✓ Instant grading
✓ Detailed explanations for each answer
✓ Progress bar during quiz
✓ Pass/Fail with 80% threshold (8 of 10 correct)
✓ Retake option if failed
✓ Score history saved to browser
✓ Certificate upon completing all modules

HOW TO TAKE A QUIZ:
-------------------
1. Complete a module video
2. Click "Take Quiz" button
3. Read instructions
4. Click "Begin Quiz"
5. Answer all 10 questions
6. Review your answers
7. Submit for grading
8. See instant results with explanations
9. Retake if needed (must score 80%+)
10. Pass all 7 to earn certification

QUIZ FILES:
-----------
/js/quiz-data.js - All 70 questions with answers & explanations
/modules/module1-quiz.html through module7-quiz.html - Quiz pages

SAMPLE QUIZ QUESTIONS:
----------------------
Module 1: "What is the PRIMARY purpose of a 401(k)?"
Module 2: "What does 'LIQUID' mean when referring to an asset?"
Module 3: "Which federal law governs 401(k) plans?"
Module 4: "When does income typically stop after a death?"
Module 5: "When a client says 'I have a 401(k)', what should you say?"
Module 6: "How long does it take to sell a business?"
Module 7: "What is the 6-step objection framework?"

CUSTOMIZING QUIZZES:
--------------------
Edit /js/quiz-data.js to:
- Change questions
- Modify answer choices
- Update explanations
- Adjust difficulty

Format:
{
    question: "Your question here?",
    options: ["A", "B", "C", "D"],
    correct: 0,  // Index of correct answer (0-3)
    explanation: "Why this is the correct answer"
}

GRADING:
--------
- 10/10 = 100% - Perfect score!
- 9/10 = 90% - Excellent!
- 8/10 = 80% - Pass
- 7/10 or below = Fail (must retake)

CERTIFICATION:
--------------
Pass all 7 module quizzes to earn:
"Assets, Liquidity & Regulations Training Certification"

Certificate button appears after Module 7 quiz completion.

QUIZ ANALYTICS:
---------------
All quiz scores saved to browser localStorage:
- Score percentage
- Number correct/total
- Pass/fail status
- Date taken
- Time spent

View in browser console:
localStorage.getItem('quizScores')

RESET PROGRESS:
---------------
To reset all quizzes and start over:
1. Open browser console (F12)
2. Type: localStorage.clear()
3. Refresh page

Or in app, delete quiz scores:
localStorage.removeItem('quizScores')
localStorage.removeItem('completedModules')
