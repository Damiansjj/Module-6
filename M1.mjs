let array= [15,20,30]

korting(array)

function korting (array){
    let som= ( array / 100 ) * 15
    return som
}

for(let i = 0; i < array.length; i++){
    let resultaat = array[i] - korting (array[i])
    console.log(resultaat)
}

