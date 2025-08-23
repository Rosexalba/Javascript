
const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0, 
    6: 0,
};


//roll dice function get random number between 1-6
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll]++ // inncrease count of rolled number
    console.log(`you rolled a ${roll}`);
}

function displayScores() {
    console.log(`Dice Roll Score Tracker:`);
    for (const roll in scoreTracker)
    console.log(`${roll}: ${scoreTracker[roll]} times`); 
}


// simulating dice  // does it 100 times 
for (let i =0; i < 100; i++) {
    rollDice();
}

displayScores();
