// Minefield-like Game (with numbers)

// Functions
// Function to generate a random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

// Function to check if a number is present in an array
function isNumberInArray(number, numArray) {
    for (var i = 0; i < numArray.length; i++) {
        if (number === numArray[i]) {
            return true;
        }
    }
    return false;
}

// Generating the 16 ("bomb") computer numbers (>= 1 && <= 100)
// Variables
var bombNumbers = [];

// Calculating
while (bombNumbers.length < 16) {
    var number = randomNumber(1, 100);

    if (!isNumberInArray(number, bombNumbers)) {
     bombNumbers.push(number);
    }
}

// Remove the following comment to cheat the game (by displaying the "bomb" numbers)
// console.log ("These are the off-limits numbers: " + bombNumbers);

// User's victory/loss
// Variables
var userNumbers = [];
var games = 84;
var points = 0;
var win = false;
var lose = false;

while (!win && !lose) {
    // Asking user
    do {
        var userNumber = parseInt(prompt("Try to type as many numbers between 1 and 100 as you can"));
    } while ((userNumber < 1 || userNumber > 100) || isNaN(userNumber));
    
    // Calculating
    if (isNumberInArray(userNumber, userNumbers)) {
        alert("Careful, you have already chosen this number!");
    } else {
        if (isNumberInArray(userNumber, bombNumbers)) {
            lose = true;
        } else {
            userNumbers.push(userNumber);
            points++;
            if (userNumbers.length == games) {
                win = true;
            }
        }
    }
}

// Displaying user's inserted numbers
console.log("These are your numbers: " + userNumbers);

// Displayed messages (win/lose)
if (win) {
    alert("You won!");
} else if (lose) {
    alert("You lost...");
}