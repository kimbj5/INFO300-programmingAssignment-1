// Benedict Kim
const readlineSync = require('readline-sync');

// Fixed: used Number() to convert string input to integers for math operations
let start = readlineSync.questionInt("Enter start number: ");
let end = readlineSync.questionInt("Enter end number: ");

let count = 0;

for (let i = start; i <= end; i++) {
    // Fixed: used % (modulo) to check if the remainder is 0 for even numbers
    if (i % 2 === 0) {
        // Fixed: used ++ to correctly increment the count
        count++;
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);