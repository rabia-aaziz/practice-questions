let maths = 100;
let english = 55;
let computerSkills = 90;

if (maths > 50 && english > 50 && computerSkills > 50) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((maths > 50 && english > 50) || computerSkills > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}