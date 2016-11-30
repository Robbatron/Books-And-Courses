// Consider we have this library...

const MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    }
};

// Now we want to change the method name to "multiply" but we cannot because our library is being used by a lot of apps and changing the name would break a lot of things. So, how would we go about changing the name?

const MathLibrary2 = {
    calculateProduct(...rest) {
            console.log('Please use the multiply method instead');
            return this.multiply(...rest);
        },
        multiply(a, b) {
            return a * b;
        }
};

// Now we do not have duplicate logic in our code base.