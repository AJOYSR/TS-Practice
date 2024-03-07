"use strict";
const myFunc = (a, b, c = "true") => {
    return a + b;
};
// c? : mane holo optional value
console.log(myFunc("foo ", "bar", "check"));
const userDetails = (id, user) => {
    console.log(`User id is ${id}, User name is ${user.name}, User age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
sayHello({ name: "Ajoy", age: 24 });
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// amra chaile function er signature decleare korte pari, 
// zeita bole dile ovabei declare kora lagbe func ta
let add; // mane parameters & return type [number, number] e hote hobe
add = (num1, num2) => {
    // return num1 + num2;
    console.log(num1);
};
// ----------------------------------------------------------------
