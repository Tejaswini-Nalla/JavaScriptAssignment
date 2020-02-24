function countValuesAboveThreshold(numbers, thresholdValue) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] > thresholdValue)
            count++;
    }
    return count;
}

function countNumbersAboveThreshold(numbers, thresholdValue) {
    const checkValueAboveThreshold = number => number > thresholdValue;
    const result = numbers.filter(checkValueAboveThreshold);
    return result.length;
}
function main() {
    console.log(countValuesAboveThreshold([2,41,7,9,10,34,25,33], 5));
    //Using inbuilt function
    console.log(countNumbersAboveThreshold([2,41,7,9,10,34,25,33], 5));
}

main();

