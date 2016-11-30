const companies = [
  'Google',
  'Facebook',
  'Uber'
];

// destructure an element
const [ name, name2, name3, name4 ] = companies;
console.log(name);
console.log(name2);
console.log(name3);
console.log(name4); // undefined : outside the bounds of an array

// destructure a property
const { length } = companies;
console.log(length);

const [name1, ...rest ] = companies;
console.log(rest);
