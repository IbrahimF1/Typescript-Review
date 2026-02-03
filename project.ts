// Imports
const promptSync = require("prompt-sync")

/*
1. Deposit some money
2. Determine number of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. Give the user their winnings
7. Play again
*/

// Swapped prompt to userPrompt:
// Typescript includes a reserved global prompt() function for window.prompt()
const userPrompt = promptSync()  

// Retrieve deposit amount from frontpage
const deposit = (): number => {
    while (true) {
        const depositAmount: string = userPrompt("Enter a deposit amount: ")
        const numberDepositAmount: number = Number.parseFloat(depositAmount)

        if (Number.isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("❌ Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount
        }
    }
}


// Determine number of lines to bet on
const getNumberOfLines = (): number => {
    while (true) {
        const lines: string = userPrompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines: number = Number.parseFloat(lines)

        if (Number.isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("❌ Invalid number of lines, try again.")
        } else {
            return numberOfLines
        }
    }
}

// Collect a bet amount
const getBet = (balance: number, lines: number): number => {
    while (true) {
        const bet: string = userPrompt("Enter the bet per line: ")
        const numberBet: number = Number.parseFloat(bet)

        if (Number.isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("❌ Invalid bet amount, try again.")
        } else {
            return numberBet
        }
    }
}

let balance = deposit()
const numberOfLines = getNumberOfLines()

const bet = getBet(balance, numberOfLines)