let score = 0;
let botBought = false;
let lastClaimTime = 0;

function startGame() {
    document.getElementById('clicker-game').style.display = 'flex';
    document.getElementById('start-container').style.display = 'none';
}

function clickGame() {
    score++;
    document.getElementById('score').innerHTML = `<span>🪙 LNC Coin</span>LNC: ${score}`;
}

function withdrawal() {
    document.getElementById('withdrawal-msg').innerText = "Coming Soon";
}

function completeTask() {
    score += 100;
    document.getElementById('score').innerHTML = `<span>🪙 LNC Coin</span>LNC: ${score}`;
    document.getElementById('task-msg').innerText = "Task Completed! 100 LNC added.";
}

function buyBot() {
    if (score >= 5000) {
        score -= 5000;
        botBought = true;
        lastClaimTime = Date.now();
        document.getElementById('score').innerHTML = `<span>🪙 LNC Coin</span>LNC: ${score}`;
        document.getElementById('bot-msg').innerText = "Bot Bought! You can claim 2000 LNC every 5 hours.";
    } else {
        document.getElementById('bot-msg').innerText = "Not enough LNC to buy bot.";
    }
}

function claimBot() {
    if (botBought) {
        const currentTime = Date.now();
        if (currentTime - lastClaimTime >= 5 * 60 * 60 * 1000) { // 5 hours
            score += 2000;
            lastClaimTime = currentTime;
            document.getElementById('score').innerHTML = `<span>🪙 LNC Coin</span>LNC: ${score}`;
            document.getElementById('bot-msg').innerText = "2000 LNC claimed!";
        } else {
            document.getElementById('bot-msg').innerText = "You can claim again after 5 hours.";
        }
    }
}

// Automatically claim bot every 5 hours if bought
setInterval(claimBot, 1000 * 60 * 60);
