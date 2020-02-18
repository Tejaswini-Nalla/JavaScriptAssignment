function displaySum() {
    console.log(sum);
}

function addNum(number) {
    sum = sum + number;
}

var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 0;
numbers.forEach(addNum);
displaySum();