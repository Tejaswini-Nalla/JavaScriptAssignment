function findIndexOf(number, numbers) {
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] == number)
            return index;
    }
}

function findIndexOfNumber(keyNumber, numbers) {
    const isNumberEqual = element => element == keyNumber;
    return numbers.findIndex(isNumberEqual);

}

function main() {
    console.log(findIndexOf(3, [1,2,1,2,3,4,5,3]));
    console.log(findIndexOfNumber(3, [1,2,1,2,3,4,5,3]));
}

main();

