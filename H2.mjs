import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let vraag1 = parseFloat (await userInput.question("Geef een X positie "));
let vraag2 = parseFloat (await userInput.question("Geef een y positie "));

let array = [
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1]
]
schiet(vraag1, vraag2);

function schiet(xpositie, ypositie){
array[xpositie][ypositie] = "*"
console.log("gebruiker heeft op xpositie "+ xpositie + " geschoten en op ypositie "+ ypositie + " geschoten")
console.log(array)



}