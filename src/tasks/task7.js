/**
 * 7. Write a function that takes two arrays of integers as input and returns a
 *      new array containing the common elements of both arrays, sorted in ascending order.
 */
function getCommonSorted(arr1, arr2) {
    var minLengthArr = (arr1.length < arr2.length) ? arr1 : arr2;
    var useArr = (arr1.length < arr2.length) ? arr2 : arr1;
    var commonArray = [];
    minLengthArr.forEach(function (element) {
        if (useArr.includes(element)) {
            commonArray.push(element);
        }
    });
    console.log("Common : " + commonArray);
    // we can use mearge sort for best complecity
    // now i'm using in build method
    var sortedArr = commonArray.sort();
    console.log("Sorted : " + commonArray);
}
getCommonSorted([4, 1, 3, 2, 8], [7, 4, 5, 3, 9, 2, 1]);
