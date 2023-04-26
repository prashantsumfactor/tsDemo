/**
 * 6. Write a function that takes a string as input and returns true if the string is a valid palindrome
 *    after removing exactly one character, and false otherwise.
 */
function palindrome(str) {
    if (isPall(str)) {
        return true;
    }
    for (var i = 0; i < str.length; i++) {
        var alpha = str.charAt(i);
        var newStr = str.replace(alpha, "");
        if (isPall(newStr)) {
            return true;
        }
    }
    return false;
}
function isPall(str) {
    return str.split('').reverse().join('') === str;
}
console.log(palindrome("abba"));
