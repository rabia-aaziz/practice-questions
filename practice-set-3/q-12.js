let perAppleCost = 10;
let perMangoCost = 15;
let perBananaCost = 8;
let aliOwns = 100;

let noOfApples = 4;
let noOfMangoes = 5;
let noOfBananas = 3;

let totalCost = noOfApples * perAppleCost + noOfMangoes * perMangoCost + noOfBananas * perBananaCost;

if (totalCost <= aliOwns) {
    console.log ("Shopping SUCCESS");
} else {
    console.log ("Shopping FAILED! Not enough money");    
}