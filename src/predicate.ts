
interface Person {
    name: string;
 }
 // let it is number

interface House {
    address: string;
 }

// ley it is string
  

// vlaue is my arr
const values: (Person | House | string)[] = [
    { name: "Kim" },
    "new text",
    { address: "123 street" },
    "hello world",
  ];


function isPerson(value:Person | House) : value is Person {
    return (value as Person).name !== undefined;
} 

// str.trim()
// let it is filter() - arr.filter(isEven())


// here I AM creating a new value...  values[2]
let newP : Person = {
    name : "jay",
}

let data = isPerson(newP);
console.log(data);
console.log(values);