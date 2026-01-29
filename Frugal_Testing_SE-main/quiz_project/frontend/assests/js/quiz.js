// quiz.js
// Core logic: load questions, show one at a time, timer per question, store answers and times, analyze results

// Configuration
const TIME_PER_QUESTION = 15; // seconds (change as needed)

// DOM
const landing = document.getElementById('landing');
const quizEl = document.getElementById('quiz');
const resultsEl = document.getElementById('results');

const startBtn = document.getElementById('startBtn');
const categorySelect = document.getElementById('categorySelect');
const difficultySelect = document.getElementById('difficultySelect');

const qIndexEl = document.getElementById('qIndex');
const qTotalEl = document.getElementById('qTotal');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const timeLeftEl = document.getElementById('timeLeft');

const resTotal = document.getElementById('resTotal');
const resCorrect = document.getElementById('resCorrect');
const resIncorrect = document.getElementById('resIncorrect');
const resScore = document.getElementById('resScore');

const retryBtn = document.getElementById('retryBtn');

let currentList = [];
let currentIndex = 0;
let timer = null;
let timeLeft = TIME_PER_QUESTION;

// For storing progress
let userAnswers = []; // index selected or null
let timeSpent = [];   // seconds spent on each question
let questionStartAt = null;

function filterQuestions(cat, diff) {
  return QUESTIONS.filter(q => (cat === 'all' || q.category === cat) && (diff === 'all' || q.difficulty === diff));
}

function startQuiz() {
  const cat = categorySelect.value;
  const diff = difficultySelect.value;
  currentList = filterQuestions(cat, diff);
  if (!currentList.length) {
    alert('No questions for this selection. Please choose a broader category/difficulty.');
    return;
  }
  landing.classList.add('hidden');
  resultsEl.classList.add('hidden');
  quizEl.classList.remove('hidden');

  currentIndex = 0;
  userAnswers = Array(currentList.length).fill(null);
  timeSpent = Array(currentList.length).fill(0);

  qTotalEl.textContent = currentList.length;
  showQuestion(currentIndex);
}

function showQuestion(index) {
  // clear any existing timer
  clearInterval(timer);
  timeLeft = TIME_PER_QUESTION;
  timeLeftEl.textContent = timeLeft;
  qIndexEl.textContent = index + 1;
  const q = currentList[index];
  questionText.textContent = q.text;

  // options
  optionsList.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const li = document.createElement('li');
    li.textContent = opt;
    li.dataset.idx = idx;
    li.role = "button";
    if (userAnswers[index] === idx) li.classList.add('selected');
    li.addEventListener('click', () => {
      userAnswers[index] = idx;
      // highlight selection
      Array.from(optionsList.children).forEach(c => c.classList.remove('selected'));
      li.classList.add('selected');
    });
    optionsList.appendChild(li);
  });

  // start timer for this question and record start time.
  questionStartAt = Date.now();
  timer = setInterval(() => {
    timeLeft -= 1;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      // auto move/submit
      recordTimeForCurrent();
      // if not last question, move next, else submit
      if (currentIndex < currentList.length - 1) {
        currentIndex++;
        showQuestion(currentIndex);
      } else {
        finishQuiz();
      }
    }
  }, 1000);
}

function recordTimeForCurrent() {
  if (questionStartAt) {
    const elapsed = Math.round((Date.now() - questionStartAt) / 1000);
    timeSpent[currentIndex] += Math.min(elapsed, TIME_PER_QUESTION);
  }
  questionStartAt = null;
}

prevBtn.addEventListener('click', () => {
  recordTimeForCurrent();
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
});
nextBtn.addEventListener('click', () => {
  recordTimeForCurrent();
  if (currentIndex < currentList.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  }
});
submitBtn.addEventListener('click', () => {
  // record time for current question and finish
  recordTimeForCurrent();
  finishQuiz();
});

startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', () => {
  landing.classList.remove('hidden');
  resultsEl.classList.add('hidden');
  quizEl.classList.add('hidden');
});

// finish quiz -> compute results and show charts
function finishQuiz() {
  clearInterval(timer);
  // compute correctness
  const total = currentList.length;
  let correct = 0;
  for (let i = 0; i < total; i++) {
    const q = currentList[i];
    if (userAnswers[i] !== null && userAnswers[i] === q.answer) correct++;
  }
  const incorrect = total - correct;
  const score = Math.round((correct / total) * 100);

  // show summary
  resTotal.textContent = total;
  resCorrect.textContent = correct;
  resIncorrect.textContent = incorrect;
  resScore.textContent = `${score}%`;

  quizEl.classList.add('hidden');
  resultsEl.classList.remove('hidden');

  renderCharts(correct, incorrect);
}

function renderCharts(correct, incorrect) {
  // time per question bar
  const labels = currentList.map((q, i) => `Q${i+1}`);
  const times = timeSpent.map(t => t || 0);

  // destroy previous charts if exist
  if (window.timeChartObj) window.timeChartObj.destroy();
  if (window.accChartObj) window.accChartObj.destroy();

  const ctx1 = document.getElementById('timeChart').getContext('2d');
  window.timeChartObj = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Time spent (s)',
        data: times,
        tension:0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {legend:{display:false}}
    }
  });

  const ctx2 = document.getElementById('accuracyChart').getContext('2d');
  window.accChartObj = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Correct','Incorrect'],
      datasets: [{
        data: [correct, incorrect]
      }]
    },
    options: {responsive:true}
  });
}
