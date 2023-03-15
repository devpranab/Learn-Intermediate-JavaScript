//ExclamationMarks
//remove the end exclamation marks in string

function removeExclamationMarks(str){
  //return str.replace("!", "");
  //or
  return str.replace(/!$/, "");
} 
console.log(removeExclamationMarks("!Hello!!"));//!Hello!