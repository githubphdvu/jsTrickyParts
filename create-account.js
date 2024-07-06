function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN."
      return `$${amount}`
    },
    deposit(inputPin, newAmount) {
      if (inputPin !== pin) return "Invalid PIN."
      amount += newAmount
      return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`
    },
    withdraw(inputPin, withdrawalAmount) {
      if (inputPin !== pin) return "Invalid PIN."
      if (withdrawalAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
      amount -= withdrawalAmount
      return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN."
      pin = newPin
      return "PIN successfully changed!"
    }
  }
}
const account = createAccount('1234', 100)
console.log(account.checkBalance('1234'))//$100
console.log(account.deposit('1234', 50))//Successfully deposited $50. Current balance: $150.
console.log(account.withdraw('1234', 30))//Successfully withdrew $30. Current balance: $120.
console.log(account.changePin('1234', '5678'))//PIN successfully changed!

console.log(account.checkBalance('5678'))//Invalid PIN.
console.log(account.deposit('5678', 50))//Invalid PIN.
console.log(account.withdraw('5678', 30))//Invalid PIN.
console.log(account.changePin('5678', '9012'))//Invalid PIN.

module.exports = { createAccount }