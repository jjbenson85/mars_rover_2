export class Rover {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }
}
