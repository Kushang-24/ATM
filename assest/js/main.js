const validUser = "kushang";
const validPIN = "1234";
let balance = 10000;
function submitbtn() {
    const user = document.getElementById("user").value;
    const pin = document.getElementById("pin").value;

    if (user === validUser && pin === validPIN) {
        Result("successfully login");
        return true;
    } else {
        Result("Invalid user or PIN. Please try again.");
        return false;
    }
}
function checkBalance() {
    if (submitbtn()) {
        Result(`Your balance is ₹${balance}`);
    }
}
function deposit() {
    if (submitbtn()) {
        const amount = parseFloat(prompt('enter your amount'));
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            Result(`Deposit successful. Your new balance is ₹${balance}`);
        } else {
            Result("Invalid amount. Please enter a valid positive number.");
        }
    }
}
function withdraw() {
    if (submitbtn()) {
        const amount = parseFloat(prompt('enter your amount'));
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            Result(`Withdrawal successful. Your new balance is ₹${balance}`);
        } else {
            Result("Invalid amount or insufficient funds.");
        }
    }
}
function exit() {
    Result("Thank you for using the ATM. Have a nice day!");
}
function Result(message) {
    document.getElementById("result").innerHTML = message;
}