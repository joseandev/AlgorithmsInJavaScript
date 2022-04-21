'use strict'

function largestNumber(numbers){
    let largestNumber_ = -Infinity;
    if(!Array.isArray(numbers)){
        throw TypeError ('Debe introducir un array de numeros');
    } else {
        for(let i = 0; i < numbers.length; i++){
            if(typeof numbers[i] == 'number'){
                if(numbers[i] > largestNumber_){
                    largestNumber_ = numbers[i];
                }
            }
        }
        return largestNumber_;
    }
}

try {
    console.log(largestNumber([1, 2, 3, 5, 3, -3, 35411, 361631684, 6468, 688948 ,398 ,67,4987]));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
