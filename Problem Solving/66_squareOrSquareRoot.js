//squareOrSquareRoot

//write a method, that will get an integer array as parameter and will process every number from this array.
//return a new array with processing every number of the input array like this.
//if the number has an integer square root, take this, otherwise square the number.

//solution
//loop through the array
//check if the number has an integer square root or not
//if true take the root, if false square the number
//return the new array

/*
function squareOrSquareRoot(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
    if(Number.isInteger(Math.sqrt(array[i]))){
        newArray.push(Math.sqrt(array[i]))
    }else{
        newArray.push(array[i] * array[i]);
    }
 }
 return newArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));//2, 9, 3, 49, 4, 1
*/

function squareOrSquareRoot(array){
    return array.map((number) => 
 Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
 );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));//2, 9, 3, 49, 4, 1