const choices = ['rock', 'paper', 'scissors'];
const choiceIcons = {
    'rock': '<i class="fa-solid fa-hand-back-fist" style="color: var(--neon-blue); text-shadow: 0 0 20px var(--neon-blue);"></i>',
    'paper': '<i class="fa-solid fa-hand" style="color: var(--neon-violet); text-shadow: 0 0 20px var(--neon-violet);"></i>',
    'scissors': '<i class="fa-solid fa-hand-scissors" style="color: var(--neon-magenta); text-shadow: 0 0 20px var(--neon-magenta);"></i>'
};

const placeholderPlayer = '<div class="placeholder"><i class="fa-solid fa-user-astronaut"></i></div>';
const placeholderBot = '<div class="placeholder"><i class="fa-solid fa-robot"></i></div>';

const buttons = document.querySelectorAll('.choice-btn');
const playerScoreEl = document.getElementById('player-score');
const botScoreEl = document.getElementById('bot-score');
const statusText = document.getElementById('status-text');
const playerFighter = document.getElementById('player-fighter');
const botFighter = document.getElementById('bot-fighter');

let playerScore = 0;
let botScore = 0;
let isPlaying = false;

// 3D Parallax Mouse Effect
document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 768) {
        // Calculate mouse position relative to center of screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        // Apply 3D rotation to the entire game container
        document.querySelector('.game-container').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isPlaying) return;
        
        const playerChoice = btn.dataset.choice;
        playRound(playerChoice);
    });
});

function playRound(playerChoice) {
    isPlaying = true;
    
    // Reset fighter classes and animations
    playerFighter.className = 'fighter float-anim';
    botFighter.className = 'fighter float-anim-delayed';
    playerFighter.style.transform = '';
    botFighter.style.transform = '';
    
    // Sequence initiation display
    statusText.style.color = 'white';
    statusText.style.textShadow = '0 0 10px white';
    statusText.textContent = "SYNCHRONIZING...";
    statusText.style.transform = "translateZ(30px) scale(1.05)";
    
    let shuffleCount = 0;
    
    // Rapidly switch through choices to simulate a calculation
    const shuffleInterval = setInterval(() => {
        const randomPlayerIcon = choices[Math.floor(Math.random() * choices.length)];
        const randomBotIcon = choices[Math.floor(Math.random() * choices.length)];
        
        playerFighter.innerHTML = choiceIcons[randomPlayerIcon];
        botFighter.innerHTML = choiceIcons[randomBotIcon];
        shuffleCount++;
        
        // Add subtle shake effect during sync
        playerFighter.style.transform = `scale(1.05) translateZ(10px) rotate(${Math.random()*10 - 5}deg)`;
        botFighter.style.transform = `scale(1.05) translateZ(10px) rotate(${Math.random()*10 - 5}deg)`;
        
        if (shuffleCount > 10) {
            clearInterval(shuffleInterval);
            const botChoice = choices[Math.floor(Math.random() * choices.length)];
            finalizeRound(playerChoice, botChoice);
        }
    }, 100);
}

function finalizeRound(player, bot) {
    // Show final choices
    playerFighter.innerHTML = choiceIcons[player];
    botFighter.innerHTML = choiceIcons[bot];
    
    // Impact pop animation
    playerFighter.style.transform = 'scale(1.2) translateZ(50px)';
    botFighter.style.transform = 'scale(1.2) translateZ(50px)';
    statusText.style.transform = "translateZ(20px) scale(1)";
    
    setTimeout(() => {
        const result = getResult(player, bot);
        
        if (result === 'win') {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            statusText.textContent = "SYSTEM DEFEATED";
            statusText.style.color = "var(--neon-blue)";
            statusText.style.textShadow = "0 0 20px var(--neon-blue)";
            statusText.style.borderColor = "var(--neon-blue)";
            playerFighter.classList.add('winner');
            botFighter.classList.add('loser');
        } else if (result === 'lose') {
            botScore++;
            botScoreEl.textContent = botScore;
            statusText.textContent = "PLAYER DEFEATED";
            statusText.style.color = "var(--neon-magenta)";
            statusText.style.textShadow = "0 0 20px var(--neon-magenta)";
            statusText.style.borderColor = "var(--neon-magenta)";
            botFighter.classList.add('winner');
            playerFighter.classList.add('loser');
        } else {
            statusText.textContent = "EQUILIBRIUM (DRAW)";
            statusText.style.color = "var(--neon-violet)";
            statusText.style.textShadow = "0 0 20px var(--neon-violet)";
            statusText.style.borderColor = "var(--neon-violet)";
            
            playerFighter.style.transform = 'scale(1) translateZ(20px)';
            botFighter.style.transform = 'scale(1) translateZ(20px)';
        }
        
        // Cooldown before allowing next click
        setTimeout(() => {
            isPlaying = false;
        }, 500);
        
    }, 300); // Short delay before showing result to let the impact sink in
}

function getResult(player, bot) {
    if (player === bot) return 'draw';
    if (
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}
