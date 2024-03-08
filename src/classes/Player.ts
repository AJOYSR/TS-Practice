import { isPlayer } from "../interfaces/isPlayer.js";

export class Player implements isPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`Player ${this.name} from ${this.country} is playing`);
  }
}
