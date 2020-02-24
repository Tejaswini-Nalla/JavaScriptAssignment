//using in-built functions
function isOddNumber(number) {
    return number%2 != 0;
}

function main() {
console.log([1,2,3,4,5,6,7,8,9].filter(isOddNumber));
}

main()
/*function displayOddNumbers() {
    console.log(oddNumbers);
}

function addToList(number) {
    oddNumbers.push(number);
}

function isOddNum(number) {
    return number%2 != 0;
}

function checkOddNum(number) {
    if(isOddNum(number))
        addToList(number);
}

var numbers = [1,2,3,4,5,6,7,8,9];
var oddNumbers = [];
numbers.forEach(checkOddNum);
displayOddNumbers();*/

