// Refactoring Keyword Functions

//The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  

//Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:

//If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
//If the function has a single argument, the parentheses around the argument list can be removed

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}