let minutes = 25;
let seconds = 0;
let timerInterval;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

// Update the timer display
function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

// Start or stop the timer
function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopButton.textContent = 'Start';
    resetButton.style.display = 'inline-block';
  } else {
    timerInterval = setInterval(countdown, 1000);
    startStopButton.textContent = 'Pause';
    resetButton.style.display = 'none';
  }
  isRunning = !isRunning;
}

// Countdown function
function countdown() {
  if (seconds === 0) {
    if (minutes === 0) {
      // Timer ends
      clearInterval(timerInterval);
      alert('Pomodoro session complete! Take a break.');
      minutes = 25;
      seconds = 0;
      updateDisplay();
      isRunning = false;
      startStopButton.textContent = 'Start';
      resetButton.style.display = 'inline-block';
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateDisplay();
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateDisplay();
  startStopButton.textContent = 'Start';
  resetButton.style.display = 'none';
  isRunning = false;
}

startStopButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();

