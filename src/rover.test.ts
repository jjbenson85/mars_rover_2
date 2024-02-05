import { describe, it, expect } from "vitest";
import { Rover } from "./rover";
import { i } from "vitest/dist/reporters-1evA5lom.js";

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
  it("should move forward east", () => {
    const rover = new Rover();
    rover.direction = "E";
    rover.move_forward();
    expect(rover).toEqual({ x: 1, y: 0, direction: "E" });
  });
  it("should move forward south", () => {
    const rover = new Rover();
    rover.direction = "S";
    rover.move_forward();
    expect(rover).toEqual({ x: 0, y: -1, direction: "S" });
  });
    it("should move forward west", () => {
      const rover = new Rover();
      rover.direction = "W";
      rover.move_forward();
      expect(rover).toEqual({ x: -1, y: 0, direction: "W" });
    });

    it("should move backward", () => {
      const rover = new Rover();
      rover.move_backward();
      expect(rover).toEqual({ x: 0, y: -1, direction: "N" });
    });
    it("should move backward east", () => {
      const rover = new Rover();
      rover.direction = "E";
      rover.move_backward();
      expect(rover).toEqual({ x: -1, y: 0, direction: "E" });
    });
    it("should move backward south", () => {
      const rover = new Rover();
      rover.direction = "S";
      rover.move_backward();
      expect(rover).toEqual({ x: 0, y: 1, direction: "S" });
    });
    it("should move backward west", () => {
      const rover = new Rover();
      rover.direction = "W";
      rover.move_backward();
      expect(rover).toEqual({ x: 1, y: 0, direction: "W" });
    });

    it("should rotate right", () => {
      const rover = new Rover();
      rover.rotate_right();
      expect(rover).toEqual({ x: 0, y: 0, direction: "E" });
    });
    it("should rotate right south", () => {
      const rover = new Rover();
      rover.direction = "S";
      rover.rotate_right();
      expect(rover).toEqual({ x: 0, y: 0, direction: "W" });
    });
        
});
