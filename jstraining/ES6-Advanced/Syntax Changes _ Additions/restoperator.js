function sumUp(...toAdd) {
    console.log(toAdd); // this is now an array although that is not what we gave the function
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, true)); // 111 lololol (true = 1)