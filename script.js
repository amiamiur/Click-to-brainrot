let score = 0;
let level = 1;
let progress = 0;
let clicksToNextLevel = 1000;
let clickPower = 1;

const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const clicksRemaining = document.getElementById('clicks-remaining');
const gameImage = document.getElementById('game-image');
const clickButton = document.getElementById('click-button');

const levelImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
];

function updateProgress() {
    const progressStep = (progress / clicksToNextLevel) * 5;
    progressFill.style.width = `${progressStep}%`;
    progressText.textContent = `${progress}/${clicksToNextLevel}`;
    clicksRemaining.textContent = clicksToNextLevel - progress;
}

function checkLevelUp() {
    if (progress >= clicksToNextLevel) {
        level++;
        levelElement.textContent = level;
        
        progress = 0;
        
        
        const imageIndex = Math.min(level - 1, levelImages.length - 1);
        gameImage.src = levelImages[imageIndex];
        

        
    }
}

function addScore() {
    score += 1;
    progress += 1;
    
    scoreElement.textContent = score;
    
    updateProgress();
    checkLevelUp();
    
    gameImage.style.transform = 'scale(0.95)';
}

if (clickButton) {
    clickButton.addEventListener('click', addScore);
}


function init() {
    scoreElement.textContent = score;
    levelElement.textContent = level;
    updateProgress()
}

window.addEventListener('DOMContentLoaded', init);