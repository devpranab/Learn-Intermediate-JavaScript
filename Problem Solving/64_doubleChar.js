//double character of a string
//given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//turn the string into array
//loop through the array
//repeat each element once
//return the array into string again

function doubleChar(str){
    return str.split("").map((s) => s.repeat(2)).join('');
}
console.log(doubleChar("pranav"));