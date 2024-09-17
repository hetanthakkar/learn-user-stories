import Bank from '../src/bank'; 

const bank = new Bank();

// Account Creation User Story

// Scenario 1: Successfully create a bank account
const acc = bank.createAccount('Hetan Thakkar', 8572008726, '1234567890');
if(acc.accountNumber === '1234567890'){
    console.log('Create a bank account passed.');
} else {
    console.log('Create a bank account failed.');
}

// Scenario 2: Attempt to create a duplicate bank account
try {
    bank.createAccount('Hetan Thakkar', 8572008726, '1234567890');
    console.log('Create a duplicate bank account failed.');
}
catch (_) {
    console.log('Create a duplicate bank account passed.');
}