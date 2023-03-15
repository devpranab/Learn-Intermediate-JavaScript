// RemoveDuplicate number

var numbers = [4,6,7,3,2,5,6,4,5,3,4];
/*
var uniqueNumbers = [];
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];

    var index = uniqueNumbers.indexOf(element);
    if(index == -1){
    uniquNumbers.push(element);
 }
}
console.log(uniqueNumbers);
*/
//concepts: if no -1 then push
//indexOf check have or not
//element 4  index 0
//element 6  index 1
//element 7  index 2

const duplicate = numbers.filter(function(value, index, array) {
 return array.indexOf(value) !== index
});
console.log(duplicate);

//shortcut way - set(es6)
console.log([...new Set(numbers)]);