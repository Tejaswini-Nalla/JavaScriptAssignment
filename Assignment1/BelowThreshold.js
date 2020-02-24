function countValuesBelowThreshold(numbers, thresholdValue) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] < thresholdValue)
            count++;
    }
    return count;
}

function countNumbersBelowThreshold(numbers, thresholdValue) {
    const checkValueBelowThreshold = number => number < thresholdValue;
    const result = numbers.filter(checkValueBelowThreshold);
    return result.length;
}

function main() {
    console.log(countValuesBelowThreshold([2,41,7,9,10,34,25,33], 10));
    //Using inbuilt function
    console.log(countNumbersBelowThreshold([2,41,7,9,10,34,25,33], 10));
}

main();

