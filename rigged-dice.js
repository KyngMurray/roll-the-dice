const prompt = require('prompt-sync')();

let numSides = Number(prompt("How Many Sides? "));

if (numSides === 0 || numSides === 1){
    console.log ("That is ILLEGAL! Run it Again! ");
}

let riggedNum = Number(prompt("What is your Rigged Number? "));

if (riggedNum > numSides){
    console.log("This is ILLEGAL! That number is Higher than the Amount of Sides. Run it Again! ");
}

let randNum = Math.random();

let riggedRoll = Math.floor(randNum * 2);

if (riggedRoll === 0){
    let randNum2 = Math.random();
    let dice = Math.ceil(randNum2 * numSides);
    console.log("You Rolled A " + dice + " On The " + numSides + "-Sided Dice. ");

} else {
    console.log("You Rolled A " + riggedNum + " On The " + numSides + "-Sided Dice. ");
}