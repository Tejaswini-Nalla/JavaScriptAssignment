function isOddNumber(number) {
    return number%2!= 0;
}

function countOddNumbers() {
    var count = 0;
    for(i=0; i<numbers.length; i++) {
        if(isOddNumber(numbers[i]))
            count++;
    }
    return count;
}

var numbers = [1,2,4,5,7,19,21,10];
console.log(countOddNumbers());