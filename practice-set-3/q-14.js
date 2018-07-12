let totalAccountBalance = 10000;
let withdrawal = 15000;

let newBalance = totalAccountBalance - withdrawal;

if (newBalance < totalAccountBalance && newBalance == 0) {
    console.log ("Withdrawal SUCCESS! Your new balance is Rs. " + newBalance);
} else {
    console.log ("Withdrawal FAILED! Sorry, you do not have sufficient balance.");    
}