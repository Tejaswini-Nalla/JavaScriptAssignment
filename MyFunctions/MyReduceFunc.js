function myReduce(myCallBack, array, initialValue) {
    let accumulator, currentValue, startIndex; 
    if(initialValue) {
        accumulator = initialValue;
        startIndex = 0;
    }
    else {
        accumulator = array[0];
        startIndex = 1;
    }
    for(let currentIndex = startIndex; currentIndex < array.length; currentIndex++) {
        currentValue = array[currentIndex];
        accumulator = myCallBack(accumulator, currentValue);
        startIndex++;
    }
    return accumulator;
}

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

const numbers = [1,2,3,4];
console.log(myReduce(sum,numbers));

