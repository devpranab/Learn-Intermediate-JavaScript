//all img
var allImg = ["image/40.png", "image/41.png", "image/42.png"];
var imgTag = document.querySelector("img");

var count = 0;

//define function
function nextFunction(){
    console.log("next button click");
     count++;
    if(count >= allImg.length){
        count = 0;
        imgTag.src = allImg[count];

    }else{
        imgTag.src = allImg[count];
    }
    
}

function previousFunction(){
    console.log("previous button click");
    count--;
    if(count < 0){
        count = allImg.length - 1;
        imgTag.src = allImg[count];

    }else{
        imgTag.src = allImg[count];
    }

}
