function myFilter(myCallBack,array) {
    var returnValue = [];
    for(let index = 0; index < array.length; index++) {
        if(myCallBack(array[index])) {
            returnValue.push(array[index]);
        }
    }
    return returnValue;
}

function isEven(number) {
    return number%2 == 0;
}

{
    const array = [1,2,3,4,5];
    console.log(myfilter(isEven,array));
}