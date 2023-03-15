function digiClock() {
    let date = new Date();//return current time
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds();//0-59
    let timeFormat = "AM";
    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormat = "PM";
    }
    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;

    let finalTime = `${hours}: ${minutes}:${seconds}`;
    // console.log(finalTime);
    document.getElementById("time").innerText = finalTime;
    document.getElementById("format").innerText = timeFormat;
}

setInterval(digiClock, 1000);



