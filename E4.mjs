import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let nummers= [10,12,14,20]
let som = 0
let resultaat
for(let i = 0; i < nummers.length; i++){
som += nummers[i]


}
resultaat= som / nummers.length
console.log(resultaat)