//define button elements
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

//define content elements
const content1 = document.getElementById("content-one");
const content2 = document.getElementById("content-two");
const content3 = document.getElementById("content-three");
const content4 = document.getElementById("content-four");

//addEventListener
btn1.addEventListener("click", openPage1);
btn2.addEventListener("click", openPage2);
btn3.addEventListener("click", openPage3);
btn4.addEventListener("click", openPage4);

//define function
function openPage1(){
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    btn1.style.color ="red";
    btn2.style.color ="black";
    btn3.style.color ="black";
    btn4.style.color ="black";
}
function openPage2(){
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    btn2.style.color ="red";
    btn1.style.color ="black";
    btn3.style.color ="black";
    btn4.style.color ="black";

}
function openPage3(){
    content3.style.display = "block";
    content2.style.display = "none";
    content1.style.display = "none";
    content4.style.display = "none";
    btn3.style.color ="red";
    btn4.style.color ="black";
    btn2.style.color ="black";
    btn1.style.color ="black";
}

function openPage4(){
    content4.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    btn4.style.color ="red";
    btn3.style.color ="black";
    btn2.style.color ="black";
    btn1.style.color ="black";
}