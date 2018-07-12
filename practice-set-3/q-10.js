let myAbsents = 1; 
if (myAbsents < 0 ) {
    console.log("INVALID NUMBER. No. of absents cannot be negative");
} else if (myAbsents <= 2) {
    console.log("Congrats! You are eligible for the award");
} else {
    console.log("Sorry, but you have been absent too many times. You are ineligible for the awards :( ");
}