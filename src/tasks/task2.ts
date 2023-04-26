
/**
 * 2. Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.
 */

function longSubStr(input:number[]){

    let startIndex :number = 0;
    let endIndex :number = 0;
    let maxLength:number=0;

    for (let i=0;i<input.length-1; i++){
        startIndex=i;
        endIndex =i;
        for (let j=i; j<input.length-1; j++){
            if(input[j]+1===input[j+1]){
                endIndex = j+1;
            }
            else{
                i=j;
                break
            }
        }
    
        const diff = endIndex-startIndex+1;
        if(maxLength<diff){
            maxLength=diff;
        }
        console.log("Index - Start :" + startIndex  +", End : "+ endIndex +" = "+ diff);
    }
    console.log("Max length : "+maxLength);
}

let arr = [5,6,7,1,2,3,4,8,9];
longSubStr(arr);