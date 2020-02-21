function extractDigits(number) {
    var digits = [];
    while(number>0) {
        let digit = number%10;
        digits.push(digit);
        number = Math.floor(number/10);
    }
    return digits.reverse();
}

{
    let number = 2014;
    console.log(extractDigits(number));
}