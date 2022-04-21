'use strict'

function primeNumbers(num){
    if(typeof num !== "number") 
        throw TypeError ("El argumento debe ser un numero entero positivo.")
    if(!Number.isInteger(num)) 
        throw TypeError ("El argumento debe ser un numero entero positivo.")
    if(num <= 1)
        throw TypeError ("El argumento debe ser un numero entero positivo.")

    let raiz = Math.floor(Math.sqrt(num)) + 1;

    for(let i = 2; i < raiz; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

try {
    console.log(primeNumbers('m'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}