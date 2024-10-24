import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question("Voer een naam: Amin, Sofie, Samantha, Karel, Mehdi, Joris, Nuria: ")
let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]

function keuzen(naam){
    let resultaat = -1
    for(let i = 0; i < namen.length; i++){

        if(namen[i] == naam){
        resultaat = i
        }
    }
    return resultaat
}
console.log(keuzen(keuze))
