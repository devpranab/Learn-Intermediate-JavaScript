//weather api

//function 1
document.getElementById('search-btn').addEventListener('click', () => {
    const inputLocation = document.getElementById('input-location').value;
    weatherUpdate(inputLocation); //it function will overwrite to default kolkata
})

//function 2
function weatherUpdate(city) {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35867d2a327558e20ecbdd512213b910&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('location').innerText = data.name;
            document.getElementById('wheather').innerText = data.weather[0].main;
            document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => console.log(error));
}

weatherUpdate('Kolkata');


/*
weather api website
openweathermap.org
user id: wpranab
password: weather@apipranab
api.openweathermap.org/data/2.5/weather?q=${city}&appid=35867d2a327558e20ecbdd512213b910&units=metric
*/