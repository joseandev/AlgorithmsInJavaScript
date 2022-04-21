'use strict'

function oddNumber(num){
    if(typeof num == 'number')
        return num % 2 !== 0 ? true : false;
    return false;
}

module.exports = oddNumber;