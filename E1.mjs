import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let naam;
let namen = [];
do {

    naam = await userInput.question("Voer een naam in (of laat leeg om te stoppen):");

    if (naam == "s") {
        
    }
    else{
        namen.push(naam); 
    }

}while(naam != "s")

console.log("Ingevoerde namen:", namen);
