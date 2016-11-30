function* select() {
    yield 'House';
    yield 'Garage';
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());