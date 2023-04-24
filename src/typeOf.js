function add(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        return x + y;
    }
    if (typeof x == "string" && typeof y == "string") {
        return x.concat(y);
    }
    throw new Error('Invalid argument types');
}
var result = add(3, 4);
console.log(result);
var ans = add("jay", "prakash");
console.log(ans);
var error = add("jay", 5);
console.log(error);
