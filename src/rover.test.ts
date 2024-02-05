import { describe, it, expect } from "vitest";
import { Rover } from "./rover";

describe("Rover", () => {
  it("should initialise", () => {
    const rover = new Rover();
    expect(rover).toEqual({ x: 0, y: 0, direction: "N" });
  });
  it("should move forward", () => {
    const rover = new Rover();
    rover.move_forward();
    expect(rover).toEqual({ x: 0, y: 1, direction: "N" });
  });

});
