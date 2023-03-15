//invert values - make opposite

//given a set of numbers, return the additive inverse of each, Each positive becomes negatives and the negatives become positives.
//invert([1, 2 ,3 ,4 ,5] == [-1, -2, -3, -4, -5])
//invert([1, -2, 3, -4, 5] == [-1, 2, -3, 4, -5])
//invert([]) == []

//solution
//create empty new array
//loop through the array
//inverse the number
//return the new array

// function invertFunction(array){
//     let newArray = [];
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] * -1);
//     }
//     return newArray;
// }
// console.log(invertFunction([1, -2, 3, -4, 5]));

// console.log(-2 * -1);//2

// + + = +
// - - = +
// + - = -
// - + = -

function invertFunction(array){
  return array.map((x) => x * -1);
}
console.log(invertFunction([1, -2, 3, -4, 5]));