//ISO 8601 format for a date including offset from UTC(GMT)
let eventTime = new Date('2024-04-08 23:59:59 GMT+0100').getTime();

const getTimeToEvent = setInterval(function () {
    //current time 
    let currentTime = new Date().getTime();
    //time remaining from now to the event
    let timeToEvent = eventTime - currentTime;

    //Convert the milliseconds to days, hours, minutes and seconds
    let seconds = Math.floor((timeToEvent / 1000) % 60);
    let minutes = Math.floor((timeToEvent / 1000 / 60) % 60);
    let hours = Math.floor((timeToEvent / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));

    document.getElementById('clock').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`

    if (timeToEvent <= 0) {
        clearInterval(getTimeToEvent);
        document.getElementById('clock').innerHTML = 'Wait for the next solar eclipse on August, 12th, 2026'
    }
}, 1000);


