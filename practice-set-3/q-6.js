let highScore = 85; 
let userScore = 75; 
if (userScore > highScore) {
   
    console.log("Congratulations!! Your new high score is " + userScore);
} else {
    
   
    console.log("Try Again. You just need " + (highScore - userScore + 1) + " points to win!");
}