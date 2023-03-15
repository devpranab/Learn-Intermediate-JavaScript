//remove string spaces

let str = "pra n    av";

function noSpace(x){
  return x.split(" ").join("");
}
console.log(noSpace(str));//pranav