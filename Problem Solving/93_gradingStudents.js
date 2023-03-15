//gradingStudents
//basic algorythm problem

//[ 34, 38, 44, 68, 99, 77 ]; becomes [ 34, 40, 45, 70, 100, 77 ];

let gradesArray = [34, 38, 44, 68, 99, 77];

function gradingStudents(grades){
    let result = [];
 grades.forEach(grade => {
    if(grade < 38){
     result.push(grade);
    }else{
        if(grade >= 38){
            //next multiple of 5 from 44;//45
            let nextMultipleOf5 = getTheNextMultiple(grade);//100
            let difference = Math.abs(nextMultipleOf5 - grade);//1
            if(difference<3){
                result.push(nextMultipleOf5);
            }else{
                result.push(grade);
            }
        }
    }
 });
 return result;
}
function getTheNextMultiple(n){
    let x = Math.floor(n/5);
    let y = x + 1;
    let multiple = y * 5;
    return multiple;
}
console.log(gradingStudents(gradesArray));