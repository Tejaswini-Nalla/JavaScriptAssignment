function findMaxNumber() {
    return Math.max.apply(this,numbers);
}

var numbers = [1,26,3,5]
console.log(findMaxNumber());