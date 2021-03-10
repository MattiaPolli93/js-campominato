// Functions
// Function to generate a random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

// Function to check if a number is present in an array
function isNumberInArray(number, numArray) {
    for (var i = 0; i < numArray.length; i++) {
        if (number == numArray[i]) {
            return true;
        }
    }
    return false;
}