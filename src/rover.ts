import { s } from "vitest/dist/reporters-1evA5lom.js";

export class Rover {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }

  move_forward() {
    switch (this.direction) {
      case "N":
        this.y++;
        break;
      case "E":
        this.x++;
        break;
      case "S":
        this.y--;
        break;
      case "W":
        this.x--;
        break;
    }
  }

  move_backward() {
    switch (this.direction) {
      case "N":
        this.y--;
        break;
      case "E":
        this.x--;
        break;
      case "S":
        this.y++;
        break;
      case "W":
        this.x++;
        break;
    }
  }
}
