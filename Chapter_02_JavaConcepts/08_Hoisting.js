// console.log(a);
// var a = "Pramod";
// console.log(a);

// ---- Phase 1: Memory Creation ----
// var a  = undefined;
// var b  = undefined;

// ---- Phase 2: Execution ----
console.log(a); // undefind
var a = "Pramod";
console.log(a); // changed

// Hoisting does NOT physically move your code.
// It is a mental model to understand how the JS engine handles declarations during compilation.
//Hoisting only works with Var


console.log(greeting);   // Output: undefined
var greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"dasdasd

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"

console.log(ab);
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
var ab = "abc";