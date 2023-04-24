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

// T:3 - Reverse a string
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

// T:4 - Reverse a string
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


/*
 Now execute output of functions
 */


//sumOfAll([2,3,4,5,6,7,7,8]);
//reverse("tnahsarp");
//secondLargest([2,43,22,67,21]);
//charCount(['a','b','c','a','e','f','e','a','c'])
//multiply(3,8);
//factorial(6);
//longestText(["abc","sdad","sd","yadav","prashant"]);
