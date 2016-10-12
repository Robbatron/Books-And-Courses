let scopedMyName = "Robbie";
let scopedMyAge = 24;
let anything;
anything = 12;
function ControlMe(isTrue, somethingElse) {
    let result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result; // might not ever get assigned, so with strictNullChecks in your tsconfig file, tsc will throw an error
}
