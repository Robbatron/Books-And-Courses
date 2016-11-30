// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Robbie").length);
console.log(echo(24).length); // undefined
console.log(echo({name: "Robbie", age: 24}).length); // undefined

// the issue is that we don't know the type

// Better Generic Way
function betterEcho<T>(data: T) { // the <T> tells typescript that this is a generic function
    return data;
}

console.log(betterEcho("Robbie").length);
console.log(betterEcho(24).length); // now we get an error the number doesn't have the length property!
console.log(betterEcho({name: "Robbie", age: 24}).length); // we get better IDE support and avoid mistakes

// Built-In Generics
const testResults1: Array<number> = [1.94, 2.33];
testResults1.push(-2.99);
// testResults.push("string"); // now we get support saying that pushing a string won't work
console.log(testResults1);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types 
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("something"));

// Generic Class
class SimpleMath<T> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

// Constraints
class SimpleMath1<T extends number | string> { // can control which values can be passed
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath1 = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "30";
console.log(simpleMath.calculate()); // 300

// Using More Than 1 Generic Type 
class SimpleMath2<T extends number | string, U extends number | string> { 
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath2 = new SimpleMath2<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "40";
console.log(simpleMath.calculate()); // 400