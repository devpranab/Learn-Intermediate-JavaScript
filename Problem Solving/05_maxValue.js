// MaxValue
/*
var amazonStock = 235;
var flipkartStock = 240;
if(amazonStock > flipkartStock){
    console.log("amazonStock is high");
}else{
    console.log("flipkartStock is low");
}*/

/*
var business = 100;
var job = 50;
var intern = 10;

if(business>job){
if(business>intern){
console.log("business is bigger");
}else{
    console.log("job is bigger");
 }
}else{
    if(job>intern){
        console.log("job is bigger");
    }else{
        console.log("intern is bigger");
    }
}*/

// shortcut built-in way
var business = 100;
var job = 50;
var intern = 10;

var max = Math.max(business, job, intern)
console.log(max);