//RemovingElements

//Take an array and remove every second element from the array,
//always keep the first element and start removing with the next element.

//ex- ["Keep", "Remove", "Keep", "Remove", "Keep"];
//none of the arrays will be empty, so you don't have to worry about that

//solution
//loop through the array
//check if the element in the second position
//remove that element
//return the new array

// function removeEveryOther(arr){
//  let newArray = [];
//  for(let i = 0; i <= arr.length; i++){
//     if(i % 2 === 0){
//      newArray.push(arr[i]);
//     }
// }
//  return newArray;
// }
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

function removeEveryOther(arr){
    return arr.filter((a, i) => i % 2 === 0);
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));