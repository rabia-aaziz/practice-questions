// let customer1 = "hi";
// let customer2 =  "hello";
// let customer3 = "hey";
// let customer4 = "salam";
// let customer5 = "Is Uit Open Today";
// let customer6 = "What are the timings of today's class";
// let customer7 = "Where will be the class conducted";

// if (customer1 == "hi" ||  customer2 ==  "hello" || customer3 == "hey" || customer4 == "salam"){

//     console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
// }

// else if (customer5 == "Is Uit Open Today"){
//     console.log("Yes");
// }

// else if (customer6 == "What are the timings of today's class"){
//     console.log("1:30 - 5:30");
// }

// else if (customer7 == "Where will be the class conducted"){
//     console.log("At CL-1, Usman Institute");
// }

// else{

//     console.log("Sorry, I do not understand your question.");
// }


function askUser(){

    let userInput = document.querySelector("input").value;
    // if (userInput == "hi" ||  userInput ==  "hello" || userInput == "hey" || userInput == "salam" ){
    //     console.log("Thank you for calling TechKaro Customer Service. How may I help you?")
    // } else if(userInput === "" ) {

    // }

    switch(userInput) {
        case "hi":
        case "hello":
        case "hey":
        case "salam":
            console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
            break;
        case "Is UIT open today":
            console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
                    
            
    }
}

