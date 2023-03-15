//sum of positive(codewars.com)
//you get an array of numbers, return the sum of all of the positives ones.
//ex- [1, -4, 7, 12] => 1 + 7 + 12 = 20
//note: if there is nothing to sum, the sum is default to 0.

//solution steps:
//array loop
//check if the number is positive or not
//init value = 0
//and the number to the init value if positive

let arrNumbers = [1, -4, 7, 12];
/*
function sumOfPositive(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        let ele = arr[i]
        //console.log(ele);
        if(ele > 0){
            sum = sum + ele;
        }
    }
    return sum;
}

console.log(sumOfPositive(arrNumbers)); */

function sumOfPositive(arr){
    return arr.filter((x) => x > 0)
    .reduce((acc, curr) => acc + curr, 0); //0 init value of reduce func.
}
console.log(sumOfPositive(arrNumbers));