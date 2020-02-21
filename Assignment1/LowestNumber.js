function findMinNumber() {
    return Math.min.apply(this,numbers);
}

var numbers = [1,26,3,5]
console.log(findMinNumber());
 