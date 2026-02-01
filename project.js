// Imports
var promptSync = require("prompt-sync");
/*
1. Deposit some money
2. Determine number of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. Give the user their winnings
7. Play again
*/
var userPrompt = promptSync();
// Retrieve deposit amount from frontpage
var deposit = function () {
    while (true) {
        var depositAmount = userPrompt("Enter a deposit amount: ");
        var numberDepositAmount = Number.parseFloat(depositAmount);
        if (Number.isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("❌ Invalid deposit amount, try again.");
        }
        else {
            return numberDepositAmount;
        }
    }
};
deposit();
