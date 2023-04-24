type Alphanumeric = string | number

function add(x : Alphanumeric, y: Alphanumeric) : Alphanumeric  {

    if( typeof x == "number" && typeof y =="number"){
        return x + y;
    }

    if( typeof x == "string" && typeof y =="string"){
        return x.concat(y);
    }

    throw new Error('Invalid argument types');

}

let result = add(3,4);
console.log(result);


let ans = add("jay","prakash");
console.log(ans);

let error = add("jay",5);
console.log(error);