function isEvenNumber(number) {
    return number%2 == 0;
}

function countEvenNumbers(numbers) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(isEvenNumber(numbers[index]))
            count++;
    }
    return count;
}

{
let numbers = [1,2,4,5,7,19,21,10,8];
console.log(countEvenNumbers(numbers));
}
