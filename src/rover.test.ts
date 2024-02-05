import { describe, it, expect } from "vitest";
import { Rover } from "./rover";

describe("Rover", () => {
  it("should initialise", () => {
    const rover = new Rover();
    expect(rover).toEqual({ x: 0, y: 0, direction: "N" });
  });
  it("should move forward", () => {
    const rover = new Rover();
    rover.move("F");
    expect(rover).toEqual({ x: 0, y: 1, direction: "N" });
  });
  it("should move backward", () => {
    const rover = new Rover();
    rover.move("B");
    expect(rover).toEqual({ x: 0, y: -1, direction: "N" });
  });
  it("should turn left", () => {
    const rover = new Rover();
    rover.move("L");
    expect(rover).toEqual({ x: 0, y: 0, direction: "W" });
  });
  it("should turn right", () => {
    const rover = new Rover();
    rover.move("R");
    expect(rover).toEqual({ x: 0, y: 0, direction: "E" });
  });
});
