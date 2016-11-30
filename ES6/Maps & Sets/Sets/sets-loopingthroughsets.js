let set = new Set([1, 1, 1]);

set.add(2);

for (element of set.entries()) {
    console.log(element);
}

// [1, 1]
// [2, 2]

for (element of set.keys()) {
    console.log(element);
}

// 1
// 2

for (element of set.values()) {
    console.log(element);
}

// 1
// 2

// does this make much sense? no. 
// - the keys() and values() methods are still there though. for REASONS!