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
    if (input.length == 0) {
        console.log("Empty array");
        return;
    }
    if (input.length == 1) {
        console.log("Need at least 2 items");
        return;
    }
    input.forEach(function (element) {
        if (element > max) {
            maxLeft = max;
            max = element;
        }
    });
    console.log("Max of text : " + max, maxLeft);
}
// Now execute output of functions
//sumOfAll([2,3,4,5,6,7,7,8]);
//reverse("tnahsarp");
secondLargest([2, 43, 22, 67, 21]);
