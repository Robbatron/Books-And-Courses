type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Robbie",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);

console.log(myself);