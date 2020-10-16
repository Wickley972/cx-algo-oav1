function count(array,elem){
    let compteur = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            compteur++
        }
        return compteur
    }
}

function average(array){
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i];        
    }
    return sum / array.length
}

function min(array){
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }        
    }
    return min
}

function max(array){
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }        
    }
    return max
}

function shift(array){
    for (let i = 0; i < array.length; i++) {
        array[i]=array[i+1]        
    }
    return array
}

function diff(array){    
    let max = array[0]
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }        
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] < min) {
            min = array[j];
        }        
    }
    return max-min
}