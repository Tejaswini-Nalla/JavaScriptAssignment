function appendLength(len) {
    lengths.push(len);
}

function generateLength(name) {
    appendLength(name.len);
}


{
    var names = ["teju","is","a","good","girl"];
    var lengths = [];
    names.forEach(generateLength)
    console.log(lengths);

    //Using built-in
    const getLength = element => element.length;
    console.log(names.map(getLength));
}



