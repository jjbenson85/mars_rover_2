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

  rotate_right() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
  }

  rotate_left() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
    }
  }
}
