let scopedMyName: string = "Robbie";
let scopedMyAge: number = 24;

let anything;
anything = 12;

function ControlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result; // might not ever get assigned, so with strictNullChecks in your tsconfig file, tsc will throw an error
}