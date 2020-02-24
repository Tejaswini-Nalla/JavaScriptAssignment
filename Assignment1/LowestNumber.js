function findMinNumber(numbers) {
    return Math.min.apply(this,numbers);
}

function main() {
    console.log(findMinNumber([1,26,3,5]));
}

main();
 