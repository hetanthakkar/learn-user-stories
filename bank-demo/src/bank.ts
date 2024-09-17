// Represents a type definition for all bank accounts in the system
interface BankAccount {
    name: string;
    phoneNumber: number;
    accountNumber: string;
    balance: number;
}

/**
 * Class for managing a bank with functionality to create and manage accounts.
 */
export default class Bank {

    // A private variable that stores all bank accounts
    private accounts: BankAccount[] = [];

    /**
     * Checks whether an account with the specified account number exists.
     * @param {string} accountNumber - The number of the account to verify.
     * @returns {BankAccount | undefined} - The account if found, otherwise undefined.
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber == accountNumber);
    }

    /**
     * Creates a new account with the provided name, phone number and account number.
     * @param {string} name - The name of the account holder.
     * @param {number} phoneNumber - The phone number of the account holder.
     * @param {string} accountNumber - The account number for the new account.
     * @returns {BankAccount} - The newly created account.
     */
    public createAccount(name: string, phoneNumber: number, accountNumber: string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if (isAccExists) {
            throw new Error('Account already exists');
        }
        const account: BankAccount = {
            name,
            phoneNumber,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposit money to the specified account.
     * @param {number} depositAmount - The amount to deposit into the account.
     * @param {string} accountNumber - The number of the account to deposit money into.
     * @returns {BankAccount} - The account with the updated balance.
     */
    public depositMoney(depositAmount: number, accountNumber: string): BankAccount {
        if (depositAmount <= 0) {
            throw new Error('Deposit amount must be greater than zero');
        }
        const account = this.isAccountExists(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }
        account.balance += depositAmount;
        return account;
    }

    /**
     * Withdraws money from the specified account.
     * @param {number} withdrawAmount - The amount to withdraw from the account.
     * @param {string} accountNumber - The number of the account to withdraw money from.
     * @returns {BankAccount} - The account with the updated balance.
     */
    public withdrawMoney(withdrawAmount: number, accountNumber: string): BankAccount {
        if (withdrawAmount <= 0) {
            throw new Error('Withdraw amount must be greater than zero');
        }
        const account = this.isAccountExists(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        } else if (account.balance < withdrawAmount) {
            throw new Error('Withdraw amount exceeds available balance.');
        }
        account.balance -= withdrawAmount;
        return account;
    }

}