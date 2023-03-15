//unfinishLoop - bug fixing(codewars.com)

//oh no, Timmy's created an infinite loop! Help timmy find and fix the bug in his unfinished for loop!

function createArray(n){
    var newArr = [];
    for(var counter = 1; counter <= n; counter++){
        newArr.push(counter);
    }
    return newArr;
}
console.log(createArray(5));