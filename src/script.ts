const myFunc = (a: string, b: string, c = "true"): string => {
  return a + b;
};

// c? : mane holo optional value

console.log(myFunc("foo ", "bar", "check"));

// ----------------------------------------------------------------
// custom type , zate same jinish barbar na likha lage.
type stringOrNum = string | number;
type userType = { name: string; age: number };
const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `User id is ${id}, User name is ${user.name}, User age is ${user.age}`
  );
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};

sayHello({ name: "Ajoy", age: 24 });

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// amra chaile function er signature decleare korte pari,
// zeita bole dile ovabei declare kora lagbe func ta

let add: (x: number, y: number) => number; // mane parameters & return type [number, number] e hote hobe

add = (num1: number, num2: number) => {
  return num1 + num2;
};

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// module typescript feature
import { Player } from "./classes/Player.js";

const player = new Player("Ajoy", 24, "Bangladesh");
console.log(player.country);

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// Interface practice

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
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

import { isPlayer } from "./interfaces/isPlayer.js";

let sakib : isPlayer;
sakib = new Player("sakib", 36, "Bangladesh")

const players : isPlayer[] = [];

// ----------------------------------------------------------------
