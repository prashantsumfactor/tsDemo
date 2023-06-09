// T:1 - Sum of an array
function sumOfAll(array : number[]){
    let sum : number = 0;
    array.forEach(element => {
        sum+=element;
    });
    console.log("Sum of Array : " + sum);
}

// T:2 - Reverse a string
function reverse(input:string){
    let newText : string = ""
    const length = input.length
    for ( let  i = length-1; i > -1; i--){
        const x = input.charAt(i);
        newText+=x;
    }
    console.log("Reverse of text : "+newText);
}

// T:3 - Second largest in array
function secondLargest(input:number[]){
    let max :number = 0;
    let maxLeft : number= 0;

    input.forEach(element => {
        if(element > max){
            maxLeft=max;
            max =element;
        }
    });
    console.log("Second largest number : "+ maxLeft);
}

// T:4 - Char count in a array
function charCount(input:string[]){
    var charLis = new Map<string, number>();
    input.forEach(element => {
        if(!charLis.has(element)){
            charLis.set(element,1);
        }else{
            let value = charLis.get(element) as number;
            charLis.set(element,value+1);
        }
    });
    let keyArray = Array.from( charLis.keys() );
    console.log("Char with counts in array:")
    keyArray.forEach(key => {
        console.log(key, charLis.get(key));
    });
}

// T:5 - Multiply 2 number without *
function multiply(a:number,b:number){
    (a < b ) ? newMulti(a,b) : newMulti(b,a);
}

function newMulti(small:number,big:number){
    let sum : number = 0;
    for ( let i = 1; i <= small; i++){
        sum+=big;
    }
    console.log("Multiplication result : " +sum);
}

// T:6 - Factorial of N
function factorial(input:number){
    let n : number = 1;
    while(input>1){
        n*=input;
        input--;
    }
    console.log("Factorial : " + n);
}

// T:7 - Longest text in string arrau
function longestText(input:string[]){
    let longText :string = "";
    input.forEach(element => {
        if(element.length > longText.length){
            longText = element;
        }
    });
    console.log("Longest Text : " + longText);
}

// T:8 - Common item arraay
function commonArray(arr1:number[],arr2:number[]){
    const minLength = (arr1.length < arr2.length) ? arr1.length : arr2.length;
    let common : number[]=[]
    for(let i=0;i<minLength; i++){
        if(arr2.includes(arr1[i])){
            common.push(arr1[i]);
        }
    }
    console.log("Common item array : "+ common)
}

// T:9 - Common item arraay
function isPallindrom(input:string){
    let frontIndex = 0
    let backIndex = input.length-1;
    while(frontIndex < backIndex){
        if(input.charAt(frontIndex)!==input.charAt(backIndex)){
            return false;
        }
        frontIndex++;
        backIndex--;
    }
    return true;
}

// T:10 - Even number array
function evenItem(input:number[]){
   let evenArr : number[] = [];
   input.forEach(element => {
        if(element%2==0){
            evenArr.push(element);
        }
   });
   console.log("Even item arr : "+ evenArr);
}

/*
 Now execute output of all functions
 */


//sumOfAll([2,3,4,5,6,7,7,8]);
//reverse("tnahsarp");
//secondLargest([2,43,22,67,21]);
//charCount(['a','b','c','a','e','f','e','a','c'])
//multiply(3,8);
//factorial(6);
//longestText(["abc","sdad","sd","yadav","prashant"]);
//commonArray([1,2,3,4],[4,5,6,1,7,2]);
//console.log(isPallindrom("abcdcba"));
//evenItem([4,5,6,1,7,2,19,8]);
