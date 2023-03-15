//countMonkeys

//you take your son to the forest to see the monkeys, you know that three a certain number there(n),
//| but your son is too young to just appreciate the full number, he has to start counting them fron 1.
//as a good parent, you will sit and count with him, given the number (n),
//populate an array with all numbers up to and including that number, but excluding zero.

//solution:
//craete a empty array
//loop through the number given
//push the number to the new array
//return the array

function countMonkeys(n){
    let newArray = [];
    for(let i = 1; i <= n; i++){
      newArray.push(i);
    }
    return newArray;
}
console.log(countMonkeys(10));