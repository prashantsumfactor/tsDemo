// ley it is string
// vlaue is my arr
var values = [
    { name: "Kim" },
    "new text",
    { address: "123 street" },
    "hello world",
];
function isPerson(value) {
    return value.name !== undefined;
}
// str.trim()
// let it is filter() - arr.filter(isEven())
// here I AM creating a new value...  values[2]
var newP = {
    name: "jay",
};
var data = isPerson(newP);
console.log(data);
console.log(values);
