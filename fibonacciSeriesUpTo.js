'use strict'

// The first n numbers of the fibonacci series
function fibonacciSeriesUpTo(nthTerm) {
    let series = [0, 1];
    switch(nthTerm) {
        case 0:
          return series = [];
        case 1:
          return series = [0];
        case 2:
          return series = [0, 1];
        default:
            if(nthTerm < 0) nthTerm = nthTerm * -1;
            for (let i = 2; i < nthTerm; i++) {
                series[i] = series[i - 1] + series[i - 2];
            }
            return series;
      }
}

console.log(fibonacciSeriesUpTo(-15))
