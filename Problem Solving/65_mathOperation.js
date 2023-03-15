//4 basic math operation

//the function should take three argu. - operation(string/char), value1(number), value2(number).
//the function should return result of numbers after applying the chosen operation.

// function mathOperation(operation, value1, value2){
//  if(operation == "+") return value1 + value2;
//  if(operation == "-") return value1 - value2;
//  if(operation == "*") return value1 * value2;
//  if(operation == "/") return value1 / value2;
// }

// console.log(mathOperation("+", 5, 7));
// console.log(mathOperation("-", 5, 7));
// console.log(mathOperation("*", 5, 7));
// console.log(mathOperation("/", 5, 7));

function mathOperation(operation, value1, value2){
return eval(value1 + operation + value1);
}

console.log(mathOperation("+", 5, 5));//10
console.log(mathOperation("-", 5, 5));//0
console.log(mathOperation("*", 5, 5));//25
console.log(mathOperation("/", 5, 5));//1
