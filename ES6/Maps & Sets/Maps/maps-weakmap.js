let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let key1 = {
    a: 1
};
let key2 = {
    b: 2
};

// WeakMap holds weak references to the entries in the map
// - this means that it is able to get rid of those entries if they are not used
// - but in order to use this garbage collector, you need to have reference types as keys (so no strings as keys)

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

// You can not iterate through WeakMaps

// for (entry of deck) {
//   console.log(entry);
// }

console.log(deck.get(key1));