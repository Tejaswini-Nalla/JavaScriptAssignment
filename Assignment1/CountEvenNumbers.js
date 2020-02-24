/*function isEvenNumber(number) {
    return number%2 == 0;
}

function countEvenNumbers(numbers) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(isEvenNumber(numbers[index]))
            count++;
    }
    return count;
}*/

function isEvenNumber(number) {
    return number%2 == 0
}

function main() {
    //console.log(countEvenNumbers([1,2,4,5,7,19,21,10,8]));
    //using built-in
    const result = [1,2,4,5,7,19,21,10,8].filter(isEvenNumber);
    console.log(result.length);
}

main()
