// Minefield-like Game (with numbers)

/* BONUS - Creating difficulty levels:
Easy (between 1 and 100 numbers)
Medium (between 1 and 80 numbers)
Hard (between 1 and 50 numbers) */

// Asking user
do {
    var userChoice = parseInt(prompt("Type 0 for Easy, 1 for Medium and 2 for Hard"));
} while ((userChoice != 0 && userChoice != 1 && userChoice != 2) || isNaN(userChoice));

// Variable to define max game number (100, 80 or 50)
var maxGameNumber;

// Calculating
if (userChoice === 0) {
    maxGameNumber = 100;
} else if (userChoice === 1) {
    maxGameNumber = 80;
} else if (userChoice === 2) {
    maxGameNumber = 50
}

// Generating the 16 ("bomb") computer numbers
// Variables
var bombNumbers = [];

// Calculating (according to game difficulty numbers)
while (bombNumbers.length < 16) {
    var bombNumber = randomNumber(1, maxGameNumber);

    if (!isNumberInArray(bombNumber, bombNumbers)) {
        bombNumbers.push(bombNumber);
    }
}

// Toggle the following comment to "cheat" the game (by displaying the "bomb" numbers)
// console.log ("These are the off-limits numbers: " + bombNumbers);

// User's victory/loss
// Variables
var userNumbers = [];
var gameNumbers = maxGameNumber - 16;
var points = 0;
var win = false;
var lose = false;

while (!win && !lose) {
    // Asking user
    do {
        var userNumber = parseInt(prompt("Try to type as many numbers between 1 and 100 as you can"));
    } while ((userNumber < 1 || userNumber > maxGameNumber) || isNaN(userNumber));
    
    // Calculating
    if (isNumberInArray(userNumber, userNumbers)) {
        alert("Careful, you have already chosen this number!");
    } else {
        if (isNumberInArray(userNumber, bombNumbers)) {
            lose = true;
        } else {
            userNumbers.push(userNumber);
            points++;
            if (userNumbers.length == gameNumbers) {
                win = true;
            }
        }
    }
}

// Displaying user's inserted numbers
console.log("These are your numbers: " + userNumbers);

// Displayed messages (win/lose)
if (win) {
    alert("You won! You got 84 numbers out of 84, congratulations!");
} else if (lose) {
    alert("You lost... Your final score is " + userNumbers.length + ". Reload and give it one more try?");
}