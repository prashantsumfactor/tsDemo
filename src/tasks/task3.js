/**
 * 3. Write a function that takes a string as input and returns the length of the longest palindromic substring.
 */
function longPallindrome(str) {
    var input = str.toUpperCase();
    var longestPallindromeString = "";
    for (var i = 0; i < input.length; i++) {
        for (var j = i + 1; j < input.length; j++) {
            var str_1 = input.substring(i, j);
            if (str_1.length > 1 && isPallindrome(str_1)) {
                if (longestPallindromeString.length < str_1.length) {
                    longestPallindromeString = str_1;
                }
                console.log("Pall Sub str :" + str_1);
            }
        }
    }
    console.log("Max length Pall SubString: " + longestPallindromeString);
}
function isPallindrome(str) {
    // Use in-build method for get reverse string
    return str.split('').reverse().join('') === str;
}
longPallindrome("abaefghgfez");
