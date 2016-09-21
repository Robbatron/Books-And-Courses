// We can take this...

//function createBookShop(inventory) {
//    return {
//        inventory: inventory,
//        inventoryValue: function () {
//            return this.inventory.reduce((total, book) => total + book.price, 0);
//        },
//        priceForTitle: function (title) {
//            return this.inventory.find(book => book.title === title).price;
//        }
//    };
//}
//
//const inventory = [
//    {
//        title: 'Harry Potter',
//        price: 10
//    },
//    {
//        title: 'Eloquent Javascript',
//        price: 15
//    }
//];
//
//const bookShop = createBookShop(inventory);
//
//console.log(bookShop.inventoryValue());
//console.log(bookShop.priceForTitle('Harry Potter'));

// And convert it to this...

function createBookShop(inventory) {
    return {
        inventory, // same as inventory: inventory
        inventoryValue() { // omit the colon and the function keyword
                return this.inventory.reduce((total, book) => total + book.price, 0);
            },
            priceForTitle(title) { // omit the colon and the function keyword
                return this.inventory.find(book => book.title === title).price;
            }
    };
}

const inventory = [
    {
        title: 'Harry Potter',
        price: 10
    },
    {
        title: 'Eloquent Javascript',
        price: 15
    }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));