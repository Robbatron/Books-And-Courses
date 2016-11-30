// The 'rest' operator is used in function arguments to gather variables.

// The 'spread' operator is meant to 'flatten' or 'spread' them out.

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//defaultColors.concat(userFavoriteColors);

// ES6 concat arrays
console.log([...fallColors, ...defaultColors, ...userFavoriteColors]);

// Can add in new elements at the same time you join in arrays!
console.log(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) // if milk is not on the list 
        return ['milk', ...items]; // add it with the other items
    return items; // else return the list that already had milk in it
}

console.log(validateShoppingList('orange', 'bread', 'eggs'));