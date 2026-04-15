// Benedict Kim
var readLineSync = require('readline-sync');

var n = readLineSync.questionInt("Enter a positive number (up to 1000): ");
while (n <= 0 || n > 1000) {
    console.log("Invalid. Please enter a positive number up to 1000.");
    n = readLineSync.questionInt("Enter a positive number (up to 1000): ");
}

var primes = [];

for (var i = 2; i <= n; i++) {
    var isPrime = true;
    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}

console.log("Primes up to " + n + ": " + "[" + primes.join(", ") + "]");

var largestGap = 0;
var largestGapStart = 0;
var largestGapEnd = 0;
var totalGap = 0;

for (var i = 0; i < primes.length - 1; i++) {
    var gap = primes[i + 1] - primes[i];
    totalGap += gap;
    if (gap > largestGap) {
        largestGap = gap;
        largestGapStart = primes[i];
        largestGapEnd = primes[i + 1];
    }
}

var averageGap = totalGap / (primes.length - 1);

console.log("The largest gap is " + largestGap + ", between " + largestGapStart + " and " + largestGapEnd);
console.log("The average gap is " + averageGap.toFixed(2));