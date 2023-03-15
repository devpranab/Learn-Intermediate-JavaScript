//NoZerosForHeros - have no 0

//numbers ending with zeros are boring
//they might be fun in your world, but not here
//get rid of them, only the ending ones

//solution
//convert the number into string
//looping if the lastIndex === {}
//remove the 0

function noBoringZeros(n){
 let stringParam = String(n);
 while(stringParam.endsWith(0)){
    stringParam = stringParam.slice(0, stringParam.length -1);
 }
    return Number(stringParam);
}
console.log(noBoringZeros(123450000));//12345