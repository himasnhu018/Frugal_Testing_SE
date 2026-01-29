<?php
// index.php - simple PHP wrapper to serve a single-page quiz app
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dynamic Quiz Application</title>
  <link rel="stylesheet" href="assests/css/styeles.css" />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <!-- Animated Background Elements -->
  <div class="bg-decoration"></div>
  <div class="bg-decoration-2"></div>

  <main class="container">
    <!-- Header Section -->
    <header class="header-section">
      <div class="header-content">
        <div class="logo-container">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h1 class="main-title">Dynamic Quiz</h1>
        </div>
        <p class="subtitle">Challenge yourself with our interactive quiz platform</p>
        <p class="description">Select your preferred category and difficulty level, then click <strong>Start Quiz</strong> to begin your journey.</p>
      </div>
    </header>

    <!-- Landing Section -->
    <section id="landing" class="card card-landing">
      <div class="card-header">
        <h2 class="card-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Quiz Settings
        </h2>
      </div>
      
      <div class="controls">
        <div class="control-group">
          <label for="categorySelect" class="control-label">
            <svg class="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Category
          </label>
          <select id="categorySelect" class="select-control">
            <option value="general">General Knowledge</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
          </select>
        </div>

        <div class="control-group">
          <label for="difficultySelect" class="control-label">
            <svg class="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Difficulty
          </label>
          <select id="difficultySelect" class="select-control">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <button id="startBtn" class="btn btn-primary btn-large">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Start Quiz
      </button>
    </section>

    <!-- Quiz Section -->
    <section id="quiz" class="card card-quiz hidden">
      <div class="quiz-header">
        <div class="progress-container">
          <div class="progress-info">
            <svg class="progress-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span id="progress">Question <span id="qIndex">1</span> / <span id="qTotal">1</span></span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
          </div>
        </div>

        <div class="timer-container">
          <svg class="timer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span id="timer"><span id="timeLeft">30</span>s</span>
        </div>
      </div>

      <div id="questionContainer" class="question-container">
        <h2 id="questionText" class="question-text"></h2>
        <ul id="optionsList" class="options-list"></ul>
      </div>

      <div class="quiz-footer">
        <button id="prevBtn" class="btn btn-secondary">
          <svg class="btn-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <div class="footer-spacer"></div>
        <button id="nextBtn" class="btn btn-secondary">
          Next
          <svg class="btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button id="submitBtn" class="btn btn-primary">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Submit Quiz
        </button>
      </div>
    </section>

    <!-- Results Section -->
    <section id="results" class="card card-results hidden">
      <div class="results-header">
        <div class="results-icon-container">
          <svg class="results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h2 class="results-title">Quiz Completed! 🎉</h2>
        <p class="results-subtitle">Here's your performance analysis</p>
      </div>

      <div id="summary" class="summary-grid">
        <div class="summary-card summary-card-primary">
          <div class="summary-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div class="summary-content">
            <p class="summary-label">Total Questions</p>
            <p class="summary-value" id="resTotal">0</p>
          </div>
        </div>

        <div class="summary-card summary-card-success">
          <div class="summary-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="summary-content">
            <p class="summary-label">Correct Answers</p>
            <p class="summary-value" id="resCorrect">0</p>
          </div>
        </div>

        <div class="summary-card summary-card-danger">
          <div class="summary-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="summary-content">
            <p class="summary-label">Incorrect Answers</p>
            <p class="summary-value" id="resIncorrect">0</p>
          </div>
        </div>

        <div class="summary-card summary-card-warning">
          <div class="summary-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div class="summary-content">
            <p class="summary-label">Total Score</p>
            <p class="summary-value" id="resScore">0</p>
          </div>
        </div>
      </div>

      <div class="charts-section">
        <h3 class="charts-title">Performance Analytics</h3>
        <div class="charts">
          <div class="chart-container">
            <canvas id="timeChart"></canvas>
          </div>
          <div class="chart-container">
            <canvas id="accuracyChart"></canvas>
          </div>
        </div>
      </div>

      <button id="retryBtn" class="btn btn-primary btn-large">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Retry Quiz
      </button>
    </section>

  </main>

  <script src="data/questions.js"></script>
  <script src="assests/js/quiz.js"></script>
</body>
</html>