// T:1 - Sum of an array
function sumOfAll(array : number[]){
    let sum = 0;
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
    let max = 0;
    let maxLeft = 0;

    if(input.length==0){
        console.log("Empty array");
        return
    } 

    if(input.length==1){
        console.log("Need at least 2 items");
        return
    }

    input.forEach(element => {
        if(element > max){
            maxLeft=max;
            max =element;
        }
    });
    console.log("Second largest number : "+ maxLeft);
}

// Now execute output of functions
sumOfAll([2,3,4,5,6,7,7,8]);
reverse("tnahsarp");
secondLargest([2,43,22,67,21]);
