//Find the first non consecutive

//solution
//loop through the array
//check if the element of the current index larger than the previous by 1, continue
//if not return that element
//retutn null if all the number are consecutive

function firstNonConsecutive(arr){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] -1 !== arr[i-1]) return arr[i];
     }
     return null;
}
console.log(firstNonConsecutive([1,2,3,4,5,6,7]));//1