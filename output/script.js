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
    return num1 + num2;
};
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// module typescript feature
import { Player } from "./classes/Player.js";
const player = new Player("Ajoy", 24, "Bangladesh");
console.log(player.country);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 20,
    length: 30,
});
let threeDOptions = {
    width: 20,
    length: 30,
    height: 40,
};
drawRectangle(threeDOptions); // evabe pathaite partesi, karon Reference pathacci
let sakib;
sakib = new Player("sakib", 36, "Bangladesh");
const players = [];
// ----------------------------------------------------------------
