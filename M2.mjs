let a = 0;
let b = 1;

let array = [a]

while(array.length < 10){
    array.push(b)
    
    let som = a + b;
    a = b;
    b = som;
}
console.log(array)