//counting sheep(codewars.com)
//consider an array/list of sheep where some sheep may be missing from their place. we need a function that counts the number of sheep present in the array(true means present).

//initial value of zero
//loop through the array
//check if the sheep === true, increase the initial value + 1

function countSheep(arrayOfSheep){
  let counter = 0;
  arrayOfSheep.map((m) => {
    if(m === true) counter++;
  });
  return counter;
}
console.log(countSheep([true, true, true, true, true]));