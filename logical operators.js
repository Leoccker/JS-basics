//logical and (&&)
// Returns true if both operands are true; otherwise, returns false.
// Example
console.log(true && true); // true
console.log(true && false); // false

// logical OR
//returns true if both are true
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); // true


// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused:', applicationRefused); // false

