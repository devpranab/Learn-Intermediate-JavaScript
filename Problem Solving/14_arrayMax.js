// ArrayMax - find max number in array

let studentMarks = [66, 50, 70, 80, 24, 45];

var max = studentMarks[0];
for(let i = 0; i<studentMarks.length; i++){
    let element = studentMarks[i];
    //console.log(element);
    if(element > max){
        max = element;
    }
}
console.log("Highest value is", max);


/* running the code this way; comparing process
66 > 66
50 > 66
70 > 66
80 > 70
24 > 80
45 > 80 will have this 80 

//for better understanding use breakpoint/debugger keyword
*/
