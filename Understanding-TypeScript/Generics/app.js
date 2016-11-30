// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Robbie").length);
console.log(echo(24).length); // undefined
console.log(echo({ name: "Robbie", age: 24 }).length); // undefined
// the issue is that we don't know the type
// Better Generic Way
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Robbie").length);
console.log(betterEcho(24).length); // now we get an error the number doesn't have the length property!
console.log(betterEcho({ name: "Robbie", age: 24 }).length); // we get better IDE support and avoid mistakes
// Built-In Generics
const testResults1 = [1.94, 2.33];
testResults1.push(-2.99);
// testResults.push("string"); // now we get support saying that pushing a string won't work
console.log(testResults1);
// Arrays
function printAll(args) {
    args.forEach(element => console.log(element));
}
printAll(["Apple", "Banana"]);
// Generic Types 
const echo2 = betterEcho;
console.log(echo2("something"));
// Generic Class
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// Constraints
class SimpleMath1 {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath1 = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "30";
console.log(simpleMath.calculate()); // 300
// Using More Than 1 Generic Type 
class SimpleMath2 {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath2 = new SimpleMath2();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "40";
console.log(simpleMath.calculate()); // 400
