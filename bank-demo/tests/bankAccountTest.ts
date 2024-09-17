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
