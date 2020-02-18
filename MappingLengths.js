function appendLength(len) {
    lengths.push(len);
}

function generateLength(name) {
    let len = name.length;
    appendLength(len);
}

var names = ["teju","is","a","good","girl"];
var lengths=[];
names.forEach(generateLength)
console.log(lengths);