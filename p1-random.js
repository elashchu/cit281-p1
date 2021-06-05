/*
    CIT 281 Project 1
    Name: Emily Lashchuk
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


//the function that will output a string of random lowercase english letters varied between 5-25 letters in length
function theGenerator() {
    let letters = "abcdefghijklmnopqrstuvwxyz"; //string of letters we will using
    let gen = []; //empty array where output can be stored
    for (let i = 0; i < getRandomInteger(5,26); i++) { //for loop thar will randomly choose the string length
        gen.push(letters.charAt(getRandomInteger(0,letters.length + 1))); //in turn random letters are selected from "letters" and then pushed into the empty "gen" array
    }
    return gen.join(""); //result returned is the array now filled with random letters at a random length, while joined together into one string rather than array of seperate strings of individual letters
}
console.log(theGenerator()); //displays result of my function in the console :)

