var computers = [
    {
        name: 'Apple',
        ram: 24
    },
    {
        name: 'Compaq',
        ram: 4
    },
    {
        name: 'Acer',
        ram: 32
    }
];

//var allComputersCanRunProgram = true;
//var onlySomeComputersCanRunProgram = false;
//
//for (let i = 0; i < computers.length; i++) {
//    let computer = computers[i];
//    if (computer.ram < 16)
//        allComputersCanRunProgram = false;
//    else
//        onlySomeComputersCanRunProgram = true;
//}

// Every
const allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});

// Some
const onlySomeComputersCanRunProgram = computers.some(computer => computer.ram > 16);


console.log(allComputersCanRunProgram); // false, because Compaq ram < 16
console.log(onlySomeComputersCanRunProgram); // true, because Apple & Acer pass