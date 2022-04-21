'use strict'

const evenNumber = require('./evenNumber.js');

function evenNumbersInArray(numbers){
    let evenNumbers = [];
    let cont = 0;
    for(let i = 0; i < numbers.length; i++){
        if(evenNumber(numbers[i])){
            evenNumbers.push(numbers[i]);
            cont++;
        }
    }
    return {evenNumbers: evenNumbers, count: cont};
}

/* let numerosPares = evenNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15 ,16 , 17, 18, 19, 20]);

console.log('Estos son los numeros pares:', numerosPares.evenNumbers);
console.log('Cantidad de numeros pares:', numerosPares.count); */