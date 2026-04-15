// Benedict Kim
var readLineSync = require('readline-sync');

var n = readLineSync.questionInt("How many Fibonacci numbers do you want to generate? ");
while (n <= 0) {
    console.log("Invalid. Please enter a number greater than 0.");
    n = readLineSync.questionInt("How many Fibonacci numbers do you want to generate? ");
}

var fibs = [0, 1];

for (var i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
}

var oddFibs = [];

for (var i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 !== 0) {
        oddFibs.push(fibs[i]);
    }
}

console.log("Full sequence: [" + fibs.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + oddFibs.join(", ") + "]");