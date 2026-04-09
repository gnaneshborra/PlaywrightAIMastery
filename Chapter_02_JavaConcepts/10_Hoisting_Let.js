//console.log(username);
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
let username = "Dutta";
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log(username);

let a = "Pramod";  // As let is a block scoped, it will not be hoisted

if (true) {
    console.log(a); //local varaible , TDZ
    let a = "temp";
}