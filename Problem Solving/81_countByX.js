//countByX

//create a function with two arguments that will return an array of the first(n) multiples of(x)
//assume both the given number and the number of times to count will be positive numbers greater than 0
//return the results as an array (or list in Python, Haskell or Exlixir)

//example-
//countBy(1,10) === (1,2,3,4,5,6,7,8,9,10)
//countBy(2,5) === (2,4,6,8,10)

//solution
//create new empty array
//loop through n
//multiply x * n
//add the number to the new array
//return the new array

/*
function countBy(x, n){
    let newArray = [];
    for(let i = 1; i < n; i++){
        newArray.push(x * 1);
    }
    return newArray;
}
console.log(countBy(1, 10));//[1,1,1,1,1,1,1,1,1]
console.log(countBy(3, 10));//[3,3,3,3,3,3,3,3,3]
*/

function countBy(x, n){
 return Array.from(Array(n + 1).keys()).slice(1)
 .map((number) => number * x)
 console.log(arr);
}
console.log(countBy(2, 5));
//[ 2, 4, 6, 8, 10 ]