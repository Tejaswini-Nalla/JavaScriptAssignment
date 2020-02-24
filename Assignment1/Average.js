function findAverage(arrayLength, sum) {
    return sum / arrayLength;
}

function addNumbers(numbers) {
    let sum = 0;
    for(let index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }
    return sum;
}

function reducer(accumulator, currentValue){
    return accumulator + currentValue;
}

function main() {
    var numbers = [1,2,3,4,5,6,7,8,9];
    let sum = addNumbers(numbers);
    console.log(findAverage(numbers.length, sum))
    //Using inbuilt function
    const result = numbers.reduce(reducer);
    console.log(result/numbers.length);
}

main();


