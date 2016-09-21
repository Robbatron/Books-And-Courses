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

// Every
const allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});

// Some
const onlySomeComputersCanRunProgram = computers.some(computer => computer.ram > 16);


console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);