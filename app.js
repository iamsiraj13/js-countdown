let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");
 
// count down function 


function countDown(){
    const futureDate = new Date("1 jan 2023")
    const currentDate = new Date();
    const myDate = futureDate - currentDate;
    
    let days = Math.floor(myDate /1000 / 60 / 60 / 24);
    let hours = Math.floor( myDate /1000 / 60/ 60 ) % 24;
    let minutes = Math.floor( myDate /1000 / 60) % 60;
    let seconds = Math.floor( myDate /1000 ) % 60;
    

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes;
    secondsItem.innerHTML = seconds;

}

countDown();

setInterval( countDown, 1000)