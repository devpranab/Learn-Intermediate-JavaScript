//make a function that sorts its arguments without loops
//covert array to argu. [].slice.call(arguments)
// [1, 2, 4, 5, 9]

const myFunction = function (){
    //console.log(arguments.sort()); //no sort func. of arguments
    return [].slice.call(arguments).sort();
};
console.log(myFunction(2, 1, 4, 9, 5));