'use strict'

// The numbers of the fibonacci series up to the number closest to n
function fibonacciSeries(num) {
    let series = [0, 1];
    let cont = 2
    if (num == 1) {return {series: [0, 1, 1], count: 3}};
    if (num == 0) return {series: [0], count: 1};
    else {
        if(num < 0) num = num * -1;
        let missingNumbersInSeries = true;
        while (missingNumbersInSeries) {
            if((series[cont-1] + series[cont-2]) <= num){
                series[cont] = series[cont-1] + series[cont-2];
                cont+=1;
            } else {
                missingNumbersInSeries = false
            }
        }
    }
    return {series: series, count: cont};
}
/* let serie = fibonacciSeries(0);
console.log('Numeros de la serie:', serie.series);
console.log('Cantidad de numeros:', serie.count) */