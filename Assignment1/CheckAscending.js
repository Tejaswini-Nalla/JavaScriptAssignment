function checkAscending(numbers) {
    for(index = 0; index < numbers.length-1; index++){
        if(numbers[index] > numbers[index+1])
            return false;
    }
    return true;
}

function main() {
    console.log(checkAscending([1,2,3,4]));
}

main();


