const prompt = require('prompt-sync')()

let num = Number(prompt("How Many Sides?: "));

console.log(Math.ceil(Math.random()*num))