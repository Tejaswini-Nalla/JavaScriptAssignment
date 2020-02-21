function findAverage(numbers) {
    return sum / numbers.length;
}

function addNum(number) {
    sum = sum + number;
}

var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 0;
numbers.forEach(addNum);
console.log(findAverage(numbers))

//Using inbuilt function
const result = numbers.reduce((acc,curvalue) => acc + curvalue);
console.log(result/numbers.length);
