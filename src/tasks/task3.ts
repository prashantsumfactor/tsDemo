/**
 * 3. Write a function that takes a string as input and returns the length of the longest palindromic substring.
 */

function longPallindrome(str:string){
    const input : string= str.toUpperCase();
    let longestPallindromeString:string="";

    for (let i=0;i<input.length; i++){
        for (let j=i+1; j<input.length; j++){
            let str = input.substring(i,j);
            if(str.length>1 && isPallindrome(str)){
                if(longestPallindromeString.length<str.length){
                    longestPallindromeString=str;
                }
                console.log("Pall Sub str :"+str);
            }
        }
        
    }
    console.log("Max length Pall SubString: "+longestPallindromeString);
}

function isPallindrome(str:string):boolean{
    // Use in-build method for get reverse string
    return str.split('').reverse().join('')===str;
}

longPallindrome("abaefghgfez")