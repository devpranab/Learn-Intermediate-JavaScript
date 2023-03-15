/*
01. GitHub Finder with Fetch API
02. Fetch User Info from API
03. Show User Profile
04. Show Alert and Clear Profile
*/
//Select ui elements
const searchBtn = document.getElementById("searchBtn");
const searchUser = document.getElementById("searchUser");
const ui = new UI();//access

//addEventListener
searchBtn.addEventListener("click", getApi);

//Define function
function getApi(){
    const userText = searchUser.value;
    if(userText != ""){//if value have
        //alert(userText)
        //use fetch api start
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            console.log(data);

            //error message start
            if(data.message == "Not Found"){ //message is http built-in property
                //show alert
                ui.showAlert("User not Found!", "alert alert-danger");

            }else{
                //show profile
                ui.showProfile(data);//pass data of fetch api (data+user)
            }
            //error message end
        })
        //fetch api end
    }else{
        //if use no input clear profile
        ui.clearProfile();
    }
}
