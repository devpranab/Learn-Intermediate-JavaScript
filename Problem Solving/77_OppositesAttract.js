//OppositesAttract

//Mistu & Rimi think they are in love, but around where they live, they will only know once they pick a flower each, if one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function loveFunc(flower1, flower2){
//  if(flower1 % 2 === 0 && flower2 % 2 === 1){
//     return true;
//  }else{
//     return false;
//  }
// }

// console.log(loveFunc(5,7));//false
// console.log(loveFunc(2,9));//true 

//or
function loveFunc(flower1, flower2){
 return flower1 % 2 === 0 && flower2 % 2 === 1;
}
   
console.log(loveFunc(5,7));//false
console.log(loveFunc(2,9));//true