console.log("Script is running!!");

let player1Turn = true;
let p1cScore = 0;
let p1sScore = 0;
let p2cScore = 0;
let p2sScore = 0;

const playerOneContainer = document.getElementById("one");
const playerTwoContainer = document.getElementById("two");

const rollDiceButton1 = document.getElementById("p1-dice");
const rollDiceButton2 = document.getElementById("dice-roll-p2");

const saveButton1 = document.getElementById("save-p1");
const saveButton2 = document.getElementById("save-p2");

const p1cCount = document.getElementById("p1cCount");
const p1sCount = document.getElementById("p1sCount");

const p2cCount = document.getElementById("p2cCount");
const p2sCount = document.getElementById("p2sCount");

rollDiceButton1.addEventListener("click", () => {
    console.log("Roll Dice Button 1 clicked!!");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    p1cScore = randomNumber == 1 ? 0 : p1cScore + randomNumber;
    p1cCount.textContent = p1cScore;
});

rollDiceButton2.addEventListener("click", () => {
    console.log("Roll Dice Button 2 clicked!!");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    p2cScore = randomNumber == 1 ? 0 : p2cScore + randomNumber;
    p2cCount.textContent = p2cScore;
});

saveButton1.addEventListener("click", () => {
    console.log("Save Button 1 clicked!!");
    p1sScore += p1cScore;
    p1sCount.textContent = p1sScore;
    p1cScore = 0;
    p1cCount.textContent = p1cScore;
});

saveButton2.addEventListener("click", () => {
    console.log("Save Button 2 clicked!!");
    p2sScore += p2cScore;
    p2sCount.textContent = p2sScore;
    p2cScore = 0;
    p2cCount.textContent = p2cScore;
});