// Minefield Game

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
var bombNumber = [];

while (bombNumber.length < 16) {
    var number = randomNumber(1, 100);

    if (!isNumberInArray(number, bombNumber)) {
     bombNumber.push(number);
    }
}

// Remove the following comment to cheat the game (by displaying the "bomb" numbers)
// console.log ("These are the off-limits numbers! " + bombNumber);