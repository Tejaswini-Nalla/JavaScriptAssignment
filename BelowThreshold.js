function getCount(numbers, thresholdValue) {
    var count = 0;
    for(index = 0; index < numbers.length; index++) {
        if(numbers[index] < thresholdValue)
            count++;
    }
    return count;
}

{
    let numbers = [2,41,7,9,10,34,25,33];
    let thresholdValue = 10;
    console.log(getCount(numbers,thresholdValue));
}