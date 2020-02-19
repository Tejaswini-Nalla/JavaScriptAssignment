function myMap(myCallBack,array) {
    var returnValue = [];
    for(let index = 0; index < array.length; index++) {
            let value = myCallBack(array[index]);
            returnValue.push(value);
        }
    return returnValue;
}

function doubleNumber(number) {
    return number*2;
}

{
    const array = [1,2,3,4,5];
    console.log(myMap(doubleNumber,array));
}