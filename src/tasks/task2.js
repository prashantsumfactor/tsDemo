/**
 * 2. Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.
 */
function longSubStr(input) {
    var startIndex = 0;
    var endIndex = 0;
    var rang = [];
    var maxLength = 0;
    for (var i = 0; i < input.length - 1; i++) {
        startIndex = i;
        endIndex = i;
        for (var j = i; j < input.length - 1; j++) {
            if (input[j] + 1 === input[j + 1]) {
                endIndex = j + 1;
            }
            else {
                i = j;
                break;
            }
        }
        var addNew = {
            start: startIndex,
            end: endIndex,
        };
        var diff = endIndex - startIndex + 1;
        if (maxLength < diff) {
            maxLength = diff;
        }
        rang.push(addNew);
        console.log("Index - Start :" + startIndex + ", End : " + endIndex + " = " + diff);
    }
    console.log("Max length : " + maxLength);
}
var arr = [5, 6, 7, 1, 2, 3, 4, 8, 9];
longSubStr(arr);
