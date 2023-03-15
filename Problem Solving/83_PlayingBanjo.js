//PlayingBanjo

//create a function which answers the question "Are you playing banjo?"
//if your starts with letter "R" or "r, you are playing banjo"
//the function takes a name as it's only argument and returns of the following strings.

//solution
//check the coming name
//if the name starts with "R" or "r". return Plays Banjo!
//if not doesn't play banjo

// function playingBanjo(name){
//  if(name.charAt(0) === "R" || name.charAt(0) === "r"){
//     return `${name} Plays Banjo!`;
//  }else{
//     return `${name} doesn't play banjo!`;
//  }
// }
// console.log(playingBanjo("Rajav"));

//or
// function playingBanjo(name){
//    return  name.charAt(0) === "R" || name.charAt(0) === "r" ? `${name} Plays Banjo!` : `${name} doesn't play banjo`;
// }
// console.log(playingBanjo("Rajav"));

//or
function playingBanjo(name){
    return  (/^r/i).test(name) ? `${name} Plays Banjo!` : `${name} doesn't play banjo`;
 }
 console.log(playingBanjo("Rajav"));