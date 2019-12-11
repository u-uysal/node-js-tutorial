let counter = function(arr){
    return "There are " + arr.length + " elements in this array";
};
 let sum = function (a,b) {
     return a + b;
 };

 let pi = 3.142;

 // how can we exports all methods??

 // thinks like a object proporty.

 module.exports.counter = counter;
 module.exports.sum = sum;
 module.exports.pi = pi;

 // now all methods are avaible for the other apps
