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


    
for( let i = 0; i < namen.length; i++){
console.log(namen[i] + " Is uitgenodigd om een leuke cursus te volgen van EHB ");}