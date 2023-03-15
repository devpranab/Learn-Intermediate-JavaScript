//Get The Mean Of An Array

//It's academic year's end, fateful moment of your school report, the avaerages must be calculated. All the students come to you and entreat you to calculate their avaerage for them. Easy! You just need to write a script.
//return the average of the given array rounded down to its nearest integer.
//the array will never be empty.

//solution
//step1: declare sum variable to sum all the numbers
//step2: declare empty variable for the average
//step3: looping through the array of number
//step4: and each number to the sum variable
//step5: divide the sum / the array length
//step6: round the number to the nearest integer
//step7: return the average

/*
function getAverage(marks){
 let sum = 0;
 let average;
 for(let i = 0; i < marks.length; i++){
    sum += marks[i];
 }
 average = sum / marks.length;
 return Math.floor(average);
}
console.log(getAverage([75, 60, 80, 50, 90]));//71
*/

function getAverage(marks){
    return Math.floor(marks.reduce( ((acc, current) => acc + current),0) / marks.length);
   }
   console.log(getAverage([75, 60, 80, 50, 90]));//71