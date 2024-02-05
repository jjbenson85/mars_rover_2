export class Rover {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }

  move(command: "F" | "B" | "L" | "R") {
    if (command === "F") {
      this.y++;
    } else if (command === "B") {
      this.y--;
    } else if (command === "L") {
      this.direction = "W";
    } else if (command === "R") {
      this.direction = "E";
    }
  }
}
