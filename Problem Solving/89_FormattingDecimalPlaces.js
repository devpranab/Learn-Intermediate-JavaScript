//FormattingDecimalPlaces

//Each number should be formatted that it's rounded to two decimal places, you don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function twoDecimalPlaces(n){
    //your code here
    //return n.toFixed(2);
    //or
    return Math.round(n*100) / 100;
}
console.log(twoDecimalPlaces(5.53634));//5.54