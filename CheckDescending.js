function checkDescending(numbers) {
    for(index = 0; index < numbers.length-1; index++){
        if(numbers[index] < numbers[index+1])
            return false;
    }
    return true;
}

const numbers = [4,2,1];
var result = checkDescending(numbers);
console.log(result);