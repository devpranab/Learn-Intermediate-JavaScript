//sum without highest and lowest value(codewars.com)

//check if empty value return 0
//find the highest value
//find the lowest value
//filter the array
//sum all numbers in the array

/*
function sumWithoutHighestNLoweset(arr){
let maxValue = Math.max(...arr);
let minValue = Math.min(...arr);
//console.log(maxValue, minValue);
let filterArr = arr.filter((x) => x !== maxValue && x !== minValue);
//console.log(filterArr);
let newArr = filterArr.reduce((acc, current) => acc + current);
console.log(newArr);//28
}

sumWithoutHighestNLoweset([2,4,6,8,10,12]);
*/

/*
//filter function
function sumWithoutHighestNLowest(arr){
    return arr.filter((x) => x !== Math.max(...arr) && x !== Math.min(...arr)).reduce((acc, current) => acc + current, 0);
}
    
console.log(sumWithoutHighestNLowest([2,4,6,8,10,12]));//28
*/

//sort function
function sumWithoutHighestNLowest(arr){
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current, 0);
}
    
console.log(sumWithoutHighestNLowest([2,4,6,8,10,12]));//28