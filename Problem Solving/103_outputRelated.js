//output related
//what will be the output of the bellow codes? 
// - output related concepts

// 1.
// function add(a,b){
//     varName = "string";
//     console.log(a+b);
// }
// console.log(varName); //Will we get name or error?
// add(5,6);

// 2.
// function countBy(x, n){
//     let arr = Array(10);
//     console.log(arr);//[ <10 empty items> ]
//    }
// countBy();

// 3. let output = true + 1;
// let output = true + 1;
// console.log(output); //2

// 4. let output = null +/- 1;
// let output = null + 1; //1
//  let output = null - 1; //-1
//  console.log(output);

// 5. let output = ([] + []); //js try to check it's first string or not?
// let output = ([] + []);
// console.log(output); //empty

// 6. let output = ({} + []);
// let output = ({} + []);
// console.log(output); //[object object]

// 7. let output = ("" + []);
//  let output = ("" + []);
//  console.log(output); //empty

// 8. uses of tagged template literal: when use `` then before function call, and pass as argu.
// function myFunction(){
//     return "India";
// }
// const string = myFunction `hello`;
// console.log(string); //India

// 9.
// function b(){
//     //here this means argu. of x obj
//     console.log(`The length is ${this.length}`); //The length is 2
// }
// let x = {
//     length: 10,
//     method: function(b){
//         arguments[0]();//that func. call
//     }
// };
// x.method(b, 5);

// 10.
//let test = "pranav";
//console.log(test["constructor"]); //return that string

// 11. access x[x] constructor, String[01] = 1 coverting string so return 1
// const x = "constructor";
// console.log(x[x](01)); //1

// 12. different base conversion calculate problem sometimes
// let output = 0.1 + 0.2;
// console.log(output); //0.3000000000004 - it's nor exactly right

// console.log(0.1 + 0.4); //0.5
 
// 13. what will be output of updatedNumb?
// var numb = 20;
// var updatedNumb = numb+
// console.log(numb); //20
// console.log(updatedNumb); //NaN

// 14. what will be the output?
// let twoEnto = 3**3; //3*3*3 = 27
// console.log(twoEnto); //27

// 15. interview tricky question, 5 means_
// setTimeout(() => {
//     console.log("print and wait");
// },0) //print at last

// setTimeout(() => {
//     console.log("print and wait");
// },5) //will be print min 5s or after but not before of 5ms,(not gurrenty 5ms bcz hater kaj ses hobe then print)

//16. ("India").__proro__.__proro__.__proro__
//__proto return from where created the string
//here parenting __proto__.__proto__.__proto__ so null
//console.log(("India").__proto__.__proto__.__proto__); //null

//17. Undefined
// const {a: m} = {a: 10};
// console.log(a);

//18.
// const {a} = {a: 10};
// console.log(a);