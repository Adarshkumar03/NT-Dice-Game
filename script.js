console.log("Script is running!!");

let player1Turn = true;

let p1cScore = 0;
let p1sScore = 0;

let p2cScore = 0;
let p2sScore = 0;

const playerOneContainer = document.getElementById("one");
const playerTwoContainer = document.getElementById("two");

const rollDiceButton1 = document.getElementById("p1-dice");
const rollDiceButton2 = document.getElementById("p2-dice");

const saveButton1 = document.getElementById("p1-save");
const saveButton2 = document.getElementById("p2-save");

const p1cCount = document.getElementById("p1-cCount");
const p1sCount = document.getElementById("p1-sCount");

const p2cCount = document.getElementById("p2-cCount");
const p2sCount = document.getElementById("p2-sCount");

const p1Choice = document.getElementById("p1-choice");
const p2Choice = document.getElementById("p2-choice");

const skipButton1 = document.getElementById("p1-skip");
const skipButton2 = document.getElementById("p2-skip");

const endGame = (winner) => {       
    alert(`Game Over! ${winner} wins!`);
    location.reload();
}


rollDiceButton1.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    p1cScore = randomNumber == 1 ? 0 : p1cScore + randomNumber;
    p1cCount.textContent = p1cScore;
    p1Choice.classList.remove("hidden");
    rollDiceButton1.disabled = true;
});

rollDiceButton2.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    p2cScore = randomNumber == 1 ? 0 : p2cScore + randomNumber;
    p2cCount.textContent = p2cScore;
    p2Choice.classList.remove("hidden");
    rollDiceButton2.disabled = true;
});

saveButton1.addEventListener("click", () => {
    p1sScore += p1cScore;
    p1sCount.textContent = p1sScore;
    p1cScore = 0;
    p1cCount.textContent = p1cScore;
    if(p1sScore >= 100)
        endGame("player 1")
    else
        switchTurn();
});

saveButton2.addEventListener("click", () => {
    p2sScore += p2cScore;
    p2sCount.textContent = p2sScore;
    p2cScore = 0;
    p2cCount.textContent = p2cScore;
    if(p2sScore >= 100)
        endGame("player 2");
    else    
        switchTurn();
});

skipButton1.addEventListener("click", () => {
    switchTurn();
});

skipButton2.addEventListener("click", () => {
    switchTurn();
});


const switchTurn = () => {
    player1Turn = !player1Turn;
    if(player1Turn){
        playerOneContainer.classList.remove("inactive");
        playerTwoContainer.classList.add("inactive");
        rollDiceButton1.disabled = false;
        rollDiceButton2.disabled = true;
    }else{
        playerOneContainer.classList.add("inactive");
        playerTwoContainer.classList.remove("inactive");
        rollDiceButton1.disabled = true;
        rollDiceButton2.disabled = false;   
    }
    p1Choice.classList.add("hidden");
    p2Choice.classList.add("hidden");
}



playerTwoContainer.classList.add("inactive");
p1Choice.classList.add("hidden");
p2Choice.classList.add("hidden");