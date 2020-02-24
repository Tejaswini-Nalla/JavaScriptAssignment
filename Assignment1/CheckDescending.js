function checkDescending(numbers) {
    for(index = 0; index < numbers.length-1; index++){
        if(numbers[index] < numbers[index+1])
            return false;
    }
    return true;
}

function main() {
    console.log(checkDescending([4,3,1]));
}

main();
