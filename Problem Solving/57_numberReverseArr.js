//convert number to reversed array of digit(codewars.com)

//given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//change the number to string
//split the string to an array
//change the string in the array to numbers
//reverse the array

function digitize(n){
  return n.toString().split("")
  .map(m => Number(m))
}
console.log(digitize(500));
console.log(typeof digitize(500));//[5, 0, 0]