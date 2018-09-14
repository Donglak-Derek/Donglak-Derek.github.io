const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// Add Leading zero to numbers 9 or below (purely for aesthetics) / make a num to string
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}


// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60); //min
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //sec
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //milli sec
}


// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);//substring(starting position(included), ending position)

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890"; // green
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3"; // blue
        } else {
            testWrapper.style.borderColor = "#E95D0F"; // orange
        }
    }
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);// setInterval(function, milliseconds);
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);


// to do list
// add word for time => search and calculate/ how fast typing
// count errors
// add array of different text
// high score board

