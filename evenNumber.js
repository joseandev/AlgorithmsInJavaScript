'use strict'

function evenNumber(num){
    if(typeof num == 'number')
        return num % 2 === 0 ? true : false;
    return false;
}

module.exports = evenNumber;