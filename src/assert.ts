
/*
Using “as” operator
Using “<>” operator
Using object
*/

let code1: any = "jiojoi"; 
let emp : string = code1 as string;

let names: unknown = 34334;
const len = (names as string).length;

interface info {
    name: string,
    value: string
 }
 let my_obj = <info>{}
 my_obj.name = "yash";
 my_obj.value="1232";


console.log(my_obj);
console.log(len);