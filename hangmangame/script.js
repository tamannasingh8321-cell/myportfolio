const WORDS = ["apple", "banana", "mango", "strawberry", "kiwi", "watermelon"];

// Reveal order matches 6 wrong guesses
const PARTS = ["p-head", "p-body", "p-larm", "p-rarm", "p-lleg", "p-rleg"];
// Shadow appears with body
const SHADOW_PART = "p-shadow";

let word     = "";
let guessed  = [];
let lives    = 6;
let gameOver = false;

function initGame() {
  word     = WORDS[Math.floor(Math.random() * WORDS.length)];
  guessed  = [];
  lives    = 6;
  gameOver = false;

  // Reset all figure parts
  [...PARTS, SHADOW_PART].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove("visible"); el.classList.add("hidden"); }
  });

  document.getElementById("lives-count").textContent = 6;
  document.getElementById("hearts-display").textContent = "♥ ♥ ♥ ♥ ♥ ♥";
  document.getElementById("wrong-letters").textContent = "—";
  setMessage("", "");

  renderWord();
  renderKeyboard();
}

function renderWord() {
  const display = document.getElementById("word-display");
  display.innerHTML = "";
  word.split("").forEach(letter => {
    const box = document.createElement("div");
    box.className = "letter-box";
    box.textContent = guessed.includes(letter) ? letter : "";
    display.appendChild(box);
  });
}

function renderKeyboard() {
  const kb = document.getElementById("keyboard");
  kb.innerHTML = "";
  "abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
    const btn = document.createElement("button");
    btn.className = "key-btn";
    btn.id = "key-" + letter;
    btn.textContent = letter;
    btn.addEventListener("click", () => handleGuess(letter));
    kb.appendChild(btn);
  });
}

function handleGuess(letter) {
  if (gameOver || guessed.includes(letter)) return;

  guessed.push(letter);
  const btn = document.getElementById("key-" + letter);
  btn.disabled = true;

  if (word.includes(letter)) {
    btn.classList.add("correct");
    renderWord();
    checkWin();
  } else {
    btn.classList.add("wrong");
    lives--;
    revealNextPart();
    updateLives();
    updateWrong();
    checkLose();
  }
}

function revealNextPart() {
  const idx = 6 - lives - 1;
  if (idx >= 0 && idx < PARTS.length) {
    show(PARTS[idx]);
    // Show shadow when body appears
    if (PARTS[idx] === "p-body") show(SHADOW_PART);
  }
}

function show(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove("hidden"); el.classList.add("visible"); }
}

function updateLives() {
  document.getElementById("lives-count").textContent = lives;
  const hearts = lives > 0 ? ("♥ ".repeat(lives)).trim() : "✕";
  document.getElementById("hearts-display").textContent = hearts;
}

function updateWrong() {
  const wrong = guessed.filter(l => !word.includes(l));
  document.getElementById("wrong-letters").textContent =
    wrong.length ? wrong.join("  ").toUpperCase() : "—";
}

function checkWin() {
  if (word.split("").every(l => guessed.includes(l))) {
    gameOver = true;
    setMessage("YOU SURVIVED, PARTNER!", "win");
    disableAll();
  }
}

function checkLose() {
  if (lives <= 0) {
    gameOver = true;
    word.split("").forEach(l => { if (!guessed.includes(l)) guessed.push(l); });
    renderWord();
    setMessage("HANGED — " + word.toUpperCase(), "lose");
    disableAll();
  }
}

function setMessage(text, type) {
  const el = document.getElementById("message");
  el.textContent = text;
  el.className = "message" + (type ? " " + type : "");
}

function disableAll() {
  document.querySelectorAll(".key-btn").forEach(b => b.disabled = true);
}

// Physical keyboard support
document.addEventListener("keydown", e => {
  if (/^[a-zA-Z]$/.test(e.key)) handleGuess(e.key.toLowerCase());
});

initGame();
