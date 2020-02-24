function countValuesBelowThreshold(numbers, thresholdValue) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] < thresholdValue)
            count++;
    }
    return count;
}

function main() {
    console.log(countValuesBelowThreshold([2,41,7,9,10,34,25,33], 10));
    //Using inbuilt function
    const numbers = [2,41,7,9,10,34,25,33];
    const thresholdValue = 10;
    const checkValueBelowThreshold = number => number < thresholdValue;
    const result = numbers.filter(checkValueBelowThreshold);
    console.log(result.length);
}

main();

