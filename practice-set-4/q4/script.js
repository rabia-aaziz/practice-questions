let costOfApples = 10;
let costOfBananas =15;
let costOfMangos =15;

let noOfApples ;
let noOfBananas ;
let noOfMangos ;

function cost() {

noOfApples  = parseInt (document.querySelector ("#input1") .value);
noOfBananas = parseInt (document.querySelector ("#input2") .value);
noOfMangos  = parseInt (document.querySelector ("#input3") .value);

console.log(costOfApples);
console.log(costOfBananas);
console.log(costOfMangos);

let cost = noOfApples * costOfApples + noOfBananas* costOfBananas + noOfMangos * costOfMangos;
// alert (cost);

let paragraph = document.querySelector("p");
paragraph.innerHTML = " Cost is" + cost;
}
