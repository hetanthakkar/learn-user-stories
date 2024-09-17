import Bank from '../src/bank'; 

const bank = new Bank();

// First, create an account for the other tests
const acc = bank.createAccount('Harry Potter', 8501209090, '123456');

// Deposit Money User Story

// Scenario 1: Successfully deposit money into an existing account
try {
    bank.depositMoney(999, '123456');
    console.log('Deposit money passed.');
} catch (error) {
    console.log('Deposit money failed.');
}

// Scenario 2: Try to deposit a negative amount
try {
    bank.depositMoney(-999, '123456');
    console.log('Deposit negative amount scenario failed.');
} catch (error) {
    console.log('Deposit negative amount scenario passed.');
}

// Scenario 3: Try to deposit into a non-existent account
try {
    bank.depositMoney(100, '999999');
    console.log('Deposit to non-existent account scenario failed.');
} catch (error) {
    console.log('Deposit to non-existent account scenario passed.');
}

// Withdraw Money User Story

// Scenario 1: Successfully withdraw money from an existing account
try {
    bank.withdrawMoney(999, '123456');
    console.log('Withdraw money passed.');
} catch (error) {
    console.log('Withdraw money failed.');
}

// Scenario 2: Attempt to withdraw money with insufficient funds
try {
    bank.withdrawMoney(999, '123456');
    console.log('Withdraw insufficient money failed.');
} catch (error) {
    console.log('Withdraw insufficient money passed.');
}

// Scenario 3: Attempt to withdraw invalid amount
try {
    bank.withdrawMoney(-999, '123456');
    console.log('Withdraw invalid amount failed.');
} catch (error) {
    console.log('Withdraw invalid amount money passed.');
}

// Scenario 4: Try to withdraw from a non-existent account
try {
    bank.withdrawMoney(100, '999999');
    console.log('Withdraw from non-existent account scenario failed.');
} catch (error) {
    console.log('Withdraw from non-existent account scenario passed.');
}

// Check Account Balance User Story

// Scenario 1: Successfully check balance of an account
const account = bank.createAccount('James Smith', 30, '1234');
try {
    const balance = bank.checkBalance('1234');
    if(balance === account.balance) {
        console.log('Balance Check passed.');
    } else {
        console.log('Balance Check failed.');
    }
} catch (error) {
    console.log('Balance Check failed.');
}

// Scenario 2: Check Balance of Invalid Account
try {
    bank.checkBalance('9898989');
    console.log('Can\'t fetch balance of an invalid account');
} catch (error) {
    console.log('Balance check of invalid account passed.');
}