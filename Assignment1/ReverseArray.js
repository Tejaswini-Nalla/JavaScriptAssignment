function reverseArray(values) {
    var reversedArray = [];
    for(index = values.length - 1; index >= 0; index--) {
        reversedArray.push(values[index]);
    }
    return reversedArray;
}

{
    let numbers = [1,2,5,6,8,12,34,5];
    console.log(reverseArray(numbers));

    //using built-in functions
    console.log(numbers.reverse());
}