let stuff = require("./exports");

console.log(stuff.counter(["a","b"])); // There are 2 elements in this array

console.log(stuff.sum(3,4)); // 7

console.log(stuff.sum(stuff.pi,4)); //7.1419999999999995
