//string repeat

//create empty string
//take the number argument & loop through it
//and the string to the empty one
/*
function stringRepeat(number, str){
 let newStr = "";
 for(let i = 0; i < number; i++){
   newStr += str;
 }
 return newStr;
}
console.log(stringRepeat(5, "Pranav"));
*/

//use repeat() built-in method of  string
function stringRepeat(str){
    return str.repeat(5);
}
let pranav5 = stringRepeat("Pranav");
console.log(pranav5);