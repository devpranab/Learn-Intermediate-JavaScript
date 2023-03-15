//select elements
const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input  = DragArea.querySelector("input");

//global var
let Myfile ; 

button.onclick  = () => {
    input.click() //click() built-in
}

input.addEventListener("change" ,function(){
    Myfile = this.files[0]; //for first file property - global var
    DragArea.classList.add("active"); 

    // call
    ShowMe()
    
})

DragArea.addEventListener("dragover", (event)=> {
event.preventDefault(); 
DragArea.classList.add("active"); //.active{} class have in css file

DragText.textContent = "Release to Upload File";

} ) 

DragArea.addEventListener("dragleave",  ()=> {
    DragArea.classList.remove("active"); 
    DragText.textContent = "Drag & Drop";
}); 


DragArea.addEventListener("drop", (event)=>{ 
    event.preventDefault();
    Myfile = event.dataTransfer.files[0]; //drop > transfer in files[0] property

    // call
    ShowMe()
})

function ShowMe(){
    let filetype = Myfile.type; //read
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"]; //type

    if(VaildEx.includes(filetype)){
        
      let fileReader  = new FileReader(); //new obj create for file read

      fileReader.onload = () => {
          let imgUrl = fileReader.result; 
          let img  = `<img src="${imgUrl}" alt="">` //imgURL by img tag

          DragArea.innerHTML = img
      }
      fileReader.readAsDataURL(Myfile); //call & read myFile
    }
    else  {
        alert("This file is not file"); 
        DragArea.classList.remove("active");
        DragText.textContent = "Drag & Drop";
    }
}
























// function showFile(){
//     let filetype = Myfile.type 
//     let VaildEx = ["image/jpeg", "image/jpg", "image/png"];
//     if(VaildEx.includes(filetype)){
//         let fileReader = new  FileReader();
//         fileReader.onload = () => {
//             let FileUrl  = fileReader.result;
//             let img = `<img src="${FileUrl}" alt="">`;
//             DragArea.innerHTML = img
//         }
//         fileReader.readAsDataURL(Myfile)
//     }
//     else {
//         alert("Please Upload Jpg Or Png Formet "); 
//         DragArea.classList.remove("active"); 
//         DragText.textContent = "Drag & Drop"
//     }
// }


