// Array Destructuring in Practice

//The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
//
//An array for a class has the form [subject, time, teacher]
//
//The resulting data structure should look something like the following:
//
//const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

// const classesAsObject;

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}; // Don't overthing it lol
});
