function selectEverySecondNum() {
    var secondNumbers = []
    for(i = 0; i<numbers.length; i=i+2)
        secondNumbers.push(numbers[i]);
    return secondNumbers;
}

var numbers = [1,2,5,-1,2,4,3,1];
console.log(selectEverySecondNum());
