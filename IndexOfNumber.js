function findIndex(number, numbers) {
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] == number)
            return index;
    }
}

let numbers = [1,2,1,2,3,4,5,3];
console.log(findIndex(3, numbers));