//migratoryBirds (HackerRank)
//basic algorythm problem
//which number have how many times

let testArr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 2];

function migratoryBirds(arrList){
    let result;
let counterArr = [
    {type:1, count:0}, //index = 0
    {type:2, count:0}, //index = 1
    {type:3, count:0}, //index = 2
    {type:4, count:0}, //index = 3
    {type:5, count:0}, //index = 4
];
for(let i = 0; i < arrList.length; i++){
    switch(arrList[i]){
        case 1:
        counterArr[arrList[i] - 1].count++;
        break;
        case 2:
        counterArr[arrList[i] - 1].count++;
        break;    
        case 3:
        counterArr[arrList[i] - 1].count++;
        break;
        case 4:
        counterArr[arrList[i] - 1].count++;
        break;
        case 5:
        counterArr[arrList[i] - 1].count++;
        break;
    }
}  
console.log(counterArr);
//let's sort the array form small to large
let sortedArr = counterArr.sort((a, b) => {
 return a.count - b.count;
});
//finding the max number of sightings
let maxCount = sortedArr[sortedArr.length -1].count;
//filtered out the types with max counts
let maxCountedArr = sortedArr.filter((x) => {
    if(x.count == maxCount){
        return x;
    }
});
console.log(maxCountedArr);
if(maxCountedArr.length == 1){
    result = maxCountedArr[o].type;
}else{
    let lowerType = maxCountedArr.sort((a,b) => {
        return a.type - b.type;
    });
    //console.log(lowerType);
    result = lowerType[0].type;
}
return result;  
}
console.log(migratoryBirds(testArr));