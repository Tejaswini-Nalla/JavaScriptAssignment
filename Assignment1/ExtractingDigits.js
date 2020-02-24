function extractDigits(number) {
    var digits = [];
    while(number>0) {
        let digit = number%10;
        digits.push(digit);
        number = Math.floor(number/10);
    }
    return digits.reverse();
}

function main() {
    console.log(extractDigits(2014));
}

main()