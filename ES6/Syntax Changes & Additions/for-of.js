let testResults = [1.23, 1.10, 4.1];

for (let testResult of testResults) {
    console.log(testResult);
}

// Don't use for...in without safeguards that check 
// 1) if object has its own property
// 2) that the key is a base-10 numeric string in its normal string form
for (let test in testResults) {
    console.log(test);
}

// slothily slow
testResults.forEach(function (tr) {
    console.log(tr);
});