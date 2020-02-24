/*function findMaxNumber(numbers) {
    var max = 0;
    for(index = 0; index < numbers.length-1; index++) {
        max = numbers[index] > numbers[index+1] ? numbers[index] : numbers[index+1];
    }
    return max;
}*/

function findMaximumNumber(numbers) {
    return Math.max.apply(this,numbers);
}

function main() {
    //console.log(findMaxNumber([1,26,3,5]));
    console.log(findMaximumNumber([1,26,3,5]));
}

main();
