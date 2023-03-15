//find position

//when provided with a letter, return its position in the alphabet.

//solution
//create a string with the alphabet
//loop through this string
//check if the looping character equal the provided letter
//return the position

//['','','','']

/*
function position(letter){
  //code here
  const alphabet = "PranavSarkar";
  for(let i = 0; i < alphabet.length; i++){
   if(alphabet[i] === letter){
     return `position of alphabet: ${i * 1}`;
   }
  }
}
console.log(position("v"));//position of alphabet: 5
*/

function position(letter){
 //code here
 const alphabet = "PranavSarkar";
 return `position of alphabet: ${alphabet.indexOf(letter) * 1}`;
}
console.log(position("v"));//position of alphabet: 5