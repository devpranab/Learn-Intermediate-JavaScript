//Dummy text
const dummyText = ["01 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "02 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "03 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "04 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "05 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "06 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "07 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "08 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis.", "09 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas illum ratione delectus? Non aut facilis fugiat labore laborum commodi quis."];

// Selecting elements
const form = document.getElementById("form")
const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

//addEventListener
form.addEventListener("submit", function(e){
//console.log("ok");
e.preventDefault();

const value =  parseInt(numberInput.value);
//console.log(typeof value);

const random = Math.floor(Math.random()* dummyText.length);
console.log(random);

//for - 0,empty,negative,greater than 9,string
if(isNaN(value) || value <= 0 || value > 9){
    output.innerHTML = `<p>${dummyText[random]}</p>`;
}else{
    const sliceArray = dummyText.slice(0, value);
    console.log(sliceArray);
    const finalArray = sliceArray.map(function(item){
        return `<p>${item}</p>`;
    }).join("");
    //console.log(finalArray);
    
    //displaying final dummy text
    output.innerHTML = finalArray;
}

});