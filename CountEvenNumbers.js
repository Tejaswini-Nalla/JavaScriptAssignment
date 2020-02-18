function isEvenNumber(number) {
    return number%2 == 0;
}

function countEvenNumbers() {
    var count = 0;
    for(i=0; i<numbers.length; i++) {
        if(isEvenNumber(numbers[i]))
            count++;
    }
    return count;
}

var numbers = [1,2,4,5,7,19,21,10,8];
console.log(countEvenNumbers());