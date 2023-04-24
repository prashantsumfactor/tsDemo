// T:1 - Sum of an array
function sumOfAll(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += element;
    });
    console.log("Sum of Array : " + sum);
}
// T:2 - Reverse a string
function reverse(input) {
    var newText = "";
    var length = input.length;
    for (var i = length - 1; i > -1; i--) {
        var x = input.charAt(i);
        newText += x;
    }
    console.log("Reverse of text : " + newText);
}
// T:3 - Reverse a string
function secondLargest(input) {
    var max = 0;
    var maxLeft = 0;
    input.forEach(function (element) {
        if (element > max) {
            maxLeft = max;
            max = element;
        }
    });
    console.log("Second largest number : " + maxLeft);
}
// T:4 - Reverse a string
function charCount(input) {
    var charLis = new Map();
    input.forEach(function (element) {
        if (!charLis.has(element)) {
            charLis.set(element, 1);
        }
        else {
            var value = charLis.get(element);
            charLis.set(element, value + 1);
        }
    });
    var keyArray = Array.from(charLis.keys());
    console.log("Char with counts in array:");
    keyArray.forEach(function (key) {
        console.log(key, charLis.get(key));
    });
}
// T:5 - Multiply 2 number without *
function multiply(a, b) {
    (a < b) ? newMulti(a, b) : newMulti(b, a);
}
function newMulti(small, big) {
    var sum = 0;
    for (var i = 1; i <= small; i++) {
        sum += big;
    }
    console.log("Multiplication result : " + sum);
}
// Now execute output of functions
//sumOfAll([2,3,4,5,6,7,7,8]);
//reverse("tnahsarp");
//secondLargest([2,43,22,67,21]);
//charCount(['a','b','c','a','e','f','e','a','c'])
multiply(30, 4);
