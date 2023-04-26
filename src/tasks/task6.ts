/**
 * 6. Write a function that takes a string as input and returns true if the string is a valid palindrome 
 *    after removing exactly one character, and false otherwise.
 */

function palindrome(str:string){

    if(isPall(str)){
        return true;
    }

    for(let i=0; i<str.length; i++){
        const alpha = str.charAt(i);
        let newStr = str.replace(alpha,"");
        if(isPall(newStr)){
            return true;
        }
    }
    return false;
}

// use inbuild method for get reverse string.
function isPall(str:string):boolean{
    return str.split('').reverse().join('')===str;
}

console.log(palindrome("abba"));