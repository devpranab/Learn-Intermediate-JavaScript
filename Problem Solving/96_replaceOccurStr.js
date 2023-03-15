//replace all occurances of a string

const whatReact = "React is js framework & this framework is the most popular front-end framework right now";

//replace all occurances of "framework" with "library"
console.log(whatReact.replace(/framework/g, "library"));
//"React is js library & this library is the most popular front-end library right now";