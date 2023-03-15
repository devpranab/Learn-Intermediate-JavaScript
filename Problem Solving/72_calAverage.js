//calculate average
//write a function which calculates the average of the numbers in a given list.
//note: empty arrays should return 0.

//solution:
//create variable = 0
//loop through the array
//divide the variable to the array length

/*
function calAverage(numbersArr){
    let sum = 0;
    for(let i = 0; i < numbersArr.length; i++){
      sum += numbersArr[i];
      //console.log(sum);
    }
    let final = sum / numbersArr.length;
    return final;
}
console.log(calAverage([5,1,8,4,9]));//5.4
*/

//use reduce function
function calAverage(numbersArr){
  return numbersArr.reduce((acc, current) => acc + current,0) / numbersArr.length;
}
console.log(calAverage([5,1,8,4,9]));//5.4