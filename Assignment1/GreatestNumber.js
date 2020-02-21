function findMaxNumber(numbers) {
    var max = 0;
    for(index = 0; index < numbers.length-1; index++) {
        max = numbers[index] > numbers[index+1] ? numbers[index] : numbers[index+1];
    }
    return max;
}

{
let numbers = [1,26,3,5]
console.log(findMaxNumber(numbers));
}