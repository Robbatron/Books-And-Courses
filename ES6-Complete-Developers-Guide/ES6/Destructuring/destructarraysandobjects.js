const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
]

// always goes from outside in...
// 1) gives you first element in array
// then once we have access to that object
// 2) braces part of destructuring kicks in and you can access the location part of the object
const [{location}] = companies;
console.log(a);

// Another example

const Google = {
    locations: ['Mountain View', 'New York', 'London'];
};

const { locations: [ location ] } = Google; // Mountain View
