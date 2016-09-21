let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
};

let deck = new Map( /*[['as', cardAce], ['kc', cardKing]]*/ );
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck.size);

deck.set('as', cardAce); // set!

console.log(deck.size); // size doesn't change

deck.delete('as');

console.log(deck.size); // delete!

console.log(deck.get('as')); // get!