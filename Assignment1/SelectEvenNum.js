/*function displayEvenNumbers() {
    console.log(evenNumbers);
}

function addToList(number) {
    evenNumbers.push(number);
}

function isEvenNum(number) {
    return number%2 == 0;
}

function checkEvenNum(number) {
    if(isEvenNum(number))
        addToList(number);
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = [];
numbers.forEach(checkEvenNum);
displayEvenNumbers();
*/
//Using in-built functions

function isEvenNumber(number) {
    return number%2 == 0;
}

function main() {
console.log([1,2,3,4,5,6,7,8,9,10].filter(isEvenNumber));
}

main();