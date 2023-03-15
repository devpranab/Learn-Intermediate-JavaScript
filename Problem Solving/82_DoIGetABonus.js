//DoIGetABonus

//it's bonus time in the city! the fatcats are rubbing their paws in anticipation...but who is going to make the most money?
//build a function that takes in two arguments(salary, bonus) salary will be an integer and bonus a boolean.
//if bonus is true, the salary should be multiplied by 10, if bonus is false the fatcat did not make enough money and must recelve only his stated salary. 

// function bonusTime(salary, bonus){
//  if(bonus == true){
//    return "$" + salary * 10;
//  }else{
//    return "$" + salary;
//  }
// }
// console.log(bonusTime(10, true));//$100

// function bonusTime(salary, bonus){
//  if(bonus == false){
//     return "$" + salary * 10;
//  }else{
//     return "$" + salary;
//  }
// }
// console.log(bonusTime(10, true));//$10

function bonusTime(salary, bonus){
    return bonus ? "$" + salary * 10 : bonus;
 }
console.log(bonusTime(10, true));//$100