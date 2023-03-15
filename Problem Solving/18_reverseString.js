// ReverseString
//HELLO - OLLEH

function reverseString(str){
    let reverse = "";
    for(let i = 0; i<str.length; i++){
     let char = str[i];
     console.log(char);
     //reverse = reverse + char;//HELLO
     reverse = char + reverse;//OLLEH
    }
    return reverse;
}
let statement = reverseString("HELLO");
//console.log(statement);

/*concepts:
H E L L O - take from last index
O L L E H
*/