let homeCount = 0; // set team one counter to one
let homeCounter = document.getElementById("homeCounter-el")
let guestCount=0;
let guestCounter = document.getElementById("guestCounter-el")

function increaseHome1(){

    homeCount += 1;
    homeCounter.textContent = homeCount;

}

function increaseHome2(){

    homeCount += 2;
    homeCounter.textContent = homeCount;

}

function increaseHome3(){

    homeCount += 3;
    homeCounter.textContent = homeCount;

}

function increaseGuest1(){

    guestCount += 1;
    guestCounter.textContent = guestCount;

}

function increaseGuest2(){

    guestCount += 2;
    guestCounter.textContent = guestCount;

}

function increaseGuest3(){

    guestCount += 3;
    guestCounter.textContent = guestCount;

}

