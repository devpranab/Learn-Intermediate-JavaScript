//sum of negetives

//create an empty array for the positives numbers
//create a var for the sum of negetives numbers
//loop through the given array
//check if the number is position add it to the array, if negetive add to the sum variable

function sumOfNegetives(n){
    let positiveNumber = [];
    let sumNegetives = 0;
    for(let i = 0; i < n.length; i++){
        const ele = n[i];
        //console.log(ele);
        if(ele > 0){
            positiveNumber.push(ele);
        }else{
            sumNegetives += ele;
        }
    }
    return [positiveNumber.length, sumNegetives];
}
console.log(sumOfNegetives([3, -6, 1, -2, 9, -4]));//-12