/**
 * 4. Write a function that takes a sorted array of integers and a target integer as input and returns the index
 *    of the target integer in the array, or -1 if it does not exist. You cannot use the built-in indexOf or findIndex methods.
 */
// Method-1 : Operate whole number array
function runWholeArr(input, target) {
    if (!input.includes(target)) {
        return -1;
    }
    for (var i = 0; i < input.length; i++) {
        if (input[i] === target) {
            return i;
            break;
        }
    }
    return -1;
}
// Method-1 : Binary search apply
function targetIndex(input, target) {
    var start = 0;
    var end = input.length;
    if (input[input.length - 1] < target || target < input[0]) {
        return -1;
    }
    else {
        return search(start, end, input, target);
    }
}
function search(start, end, arr, target) {
    var midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === target) {
        return midIndex;
    }
    else if (start === end) {
        return -1;
    }
    else {
        if (arr[midIndex] > target) {
            return search(start, midIndex - 1, arr, target);
        }
        else {
            return search(midIndex + 1, end, arr, target);
        }
    }
}
//let index = targetIndex([1,2,4,6,7,8,9,10],10);
//console.log("Index : "+ index);
console.log(runWholeArr([1, 2, 3, 4, 5], 6));
