const oddNumber = require('./oddNumber.js');

function oddNumbersInArray(numbers){
    let oddNumbers = [];
    let cont = 0;
    for(let i = 0; i < numbers.length; i++){
        if(oddNumber(numbers[i])){
            oddNumbers.push(numbers[i]);
            cont++;
        }
    }
    return {oddNumbers: oddNumbers, count: cont};
}

/* let numerosImpares = oddNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15 ,16 , 17, 18, 19, 20]);

console.log('Estos son los numeros impares:', numerosImpares.oddNumbers);
console.log('Cantidad de numeros impares:', numerosImpares.count); */