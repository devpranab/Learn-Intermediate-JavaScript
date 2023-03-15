//boolToWord

//complete the method that takes a boolean value and return a "yes" string for true, or a "no" string for false.

//solution
// function boolToWord(bool){
//     //here code
//     if(bool == true){
//     return "yes";
//     }else{
//     return "no";
//     }
// }
// console.log(boolToWord(false));//no

//or
function boolToWord(bool){
 return bool ? "yes" : "no";
}
console.log(boolToWord(true));//yes
