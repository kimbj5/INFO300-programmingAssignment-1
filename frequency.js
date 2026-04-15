// Benedict Kim
var readLineSync = require('readline-sync');

var input = readLineSync.question("Enter a string: ");
var str = input.toLowerCase();

var counts = [];
for (var i = 0; i < 26; i++) {
    counts.push(0);
}

for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
        counts[code - 97]++;
    }
}

var originalCounts = counts.slice();

console.log("Letter frequencies:");
for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
        var slot = code - 97;
        if (counts[slot] > 0) {
            console.log(String.fromCharCode(slot + 97) + ": " + counts[slot]);
            counts[slot] = -1;
        }
    }
}

var firstRepeat = "";
for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
        var slot = code - 97;
        if (originalCounts[slot] > 1) {
            firstRepeat = String.fromCharCode(slot + 97);
            break;
        }
    }
}

console.log("First repeated letter: " + firstRepeat);