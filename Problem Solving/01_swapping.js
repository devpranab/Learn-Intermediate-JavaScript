// Swapping
/*
var a = 5;
var b = 7;
console.log("before swap: a=", a, "b=", b); 
exchange value like a = 7, b = 5
*/

// 1st way - take a assists
var c = a; //c = b
a = b 
b = c
console.log("after swap: a=", a, "b=", b);


// 2nd way - algebratic
var x = 5;
var y = 7;
x = x + y; //5+7 = 12
y = x - y //12-7 = 5
x = x - y //12-5 = 7
console.log("after swap: x=", x, "y=", y); 


// 3rd way - es6
var p = 5;
var q = 7;
[p, q] = [q, p];

// 4rth way
b = a + (a = b) - b;
console.log(a,b);