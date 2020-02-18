function reverseFibSeries() {
    return fibonacciList.reverse();
}

function swapNumbers() {
    num1 = num2;
    num2 = num3;
}

function generateNumber() {
    return num1+num2;
}

function generateFibonacciSeries(fibSeriesLength) {
    num3 = generateNumber();
    fibonacciList.push(num3);
    if(fibonacciList.length != fibSeriesLength) {
        swapNumbers();
        generateFibonacciSeries(fibSeriesLength);
    }
}

let fibSeriesLength = 8;
let num1 = 0;
let num2 = 1;
let num3;
var fibonacciList = [0,1];
generateFibonacciSeries(fibSeriesLength);
console.log(reverseFibSeries())