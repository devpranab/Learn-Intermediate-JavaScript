//return negetive

//in this simple assignment you are given a number and have to make it negetive, But maybe the number is already negetive?

function makeNegetive(n){
    return n > 0 ? -n : n;
}
const result = makeNegetive(-5);
console.log(result);