//A Needle In The HayStack
//find needle in array list

//write a function findNeedle() that takes an array full of junk but containing one "needle".
//afer your function finds the needle it should return a message (as a string) that says:
//found the needle at position "plus the index it found the needle, so:"

function findNeedle(arrNames){
    for(let i = 0; i < arrNames.length; i++){
        const ele = arrNames[i]
        if(ele === "needle"){
            return "found the needle at position " + i;
        }
    }

}
const nameList = ["hay", "junk", "pranab", "needle", "sarkar", "ps"];
console.log(findNeedle(nameList));