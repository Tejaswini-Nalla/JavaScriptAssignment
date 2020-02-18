function isOddNumber(number) {
    return number%2!= 0;
}

function countOddNumbers(numbers) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(isOddNumber(numbers[index]))
            count++;
    }
    return count;
}

{
let numbers = [1,2,4,5,7,19,21,10];
console.log(countOddNumbers(numbers));
}