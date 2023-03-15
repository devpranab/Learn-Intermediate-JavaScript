// small to big 
// var i = 10;
// while(i>=1){
//  i--   
// }

//do factorial using recursive
// rules: 5! = (5-1)*5
// rules: 6! = (6-1)*6
// rules: 10! = (10-1)*10

function factorial(n){
    if(n == 0){
      console.log(n);
          return 1;   
    }else{
      console.log(n, n-1); //5 4 start
          return n * factorial(n-1);

    }
}
var result = factorial(5);
console.log(result);

/*
5 4
4 3
3 2
2 1
1    |20*3*2 = 120
*/