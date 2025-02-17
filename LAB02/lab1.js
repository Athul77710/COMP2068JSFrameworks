const prompt = require("prompt-sync")();

// user input
function getUserChoice() {
    let choice = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ").toUpperCase();
    const validChoices = ["ROCK", "PAPER", "SCISSORS"];

    // Validate input
    while (!validChoices.includes(choice)) {
        console.log("Invalid choice! Please enter ROCK, PAPER, or SCISSORS.");
        choice = prompt("Enter your choice: ").toUpperCase();
    }

    return choice;
}

// computer's choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.34) return "PAPER";
    if (randomNum < 0.67) return "SCISSORS";
    return "ROCK";
}

// winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        return "User Wins!";
    }
    return "Computer Wins!";
}

// Main Program Execution
const userChoice = getUserChoice();
const computerChoice = getComputerChoice();

console.log(`User selected: ${userChoice}`);
console.log(`Computer selected: ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
