var time = new Date().getHours();
var messageText; // the message to display
var wakeUp = 8;
var noon = 12;
var lunchTime = 13;
var partyTime = 17;
var evening = 18;
var napTime = lunchTime+2;
var bedTime = 22;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var bedTimeSelector = document.getElementById("bedTimeSelector");

var updateClock = function () {
    var message = document.getElementById('timeEvent');
    var image = document.getElementById('lolcat');
    image.src = "img/lolcat-default.png";

    if (time == partyTime) {
        messageText = "It's party time! Yay!";
        image.src = "img/lolcat-party-time.png";
    } else if (time == lunchTime) {
        image.src = "img/lolcat-lunch-time.png";
        messageText = "Hooray! It's lunch time!";
    } else if (time == napTime) {
        messageText = "It's time for a cat nap!";
        image.src = "img/lolcat-sleepy-time.png";
    } else if (time == wakeUp) {
        messageText = "Wakey-wakey, darling!";
        image.src = "img/lolcat-wakeup-time.png";
    } else if (time == bedTime) {
        messageText = "It's time to hit the sack!";
        image.src = "img/lolcat-sleepy-time.png";
    } else if (time < noon) {
        messageText = "Good morning, sweetie!";
    } else if (time > evening) {
        messageText = "Good Evening!";
        image.src = "img/lolcat-evening.png";
    } else {
        messageText = "Good afternoon!";
    }
    message.innerText = messageText;
    
    showCurrentTime();
};
//displaying time
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours 
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

//party button
var partyEvent = function () {

    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#222";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};
//the selectors
var wakeUpEvent = function () {
    wakeUp = wakeUpTimeSelector.value;
};

var lunchEvent = function () {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function () {
    napTime = napTimeSelector.value;
};

var bedEvent = function () {
    bedTime = bedTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
bedTimeSelector.addEventListener('change', bedEvent);