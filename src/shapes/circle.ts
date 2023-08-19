import Dot from "../helpers/dot";
import { IGettingAreaAndPerimeter } from "../interfaces";

/**
 * Represents a circle using its radius.
 */
export class Circle implements IGettingAreaAndPerimeter {
  /**
   * Creates a circle instance.
   * @param radius - The radius of the circle.
   */
  constructor(public readonly radius: number) {}

  /**
   * Calculates and returns the area of the circle.
   */
  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  /**
   * Calculates and returns the circumference (perimeter) of the circle.
   */
  public getPerimeter(): number {
    return this.radius * 2 * Math.PI;
  }
}

/**
 * Represents a circle using its radius and a Dot point as its centre.
 */
export class CircleWithDots implements IGettingAreaAndPerimeter {
  /**
   * Creates a circle instance with a centre.
   * @param radius - The radius of the circle.
   * @param centre - The central Dot point of the circle.
   */
  constructor(public readonly radius: number, public readonly centre: Dot) {}

  /**
   * Calculates and returns the area of the circle.
   */
  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  /**
   * Calculates and returns the circumference (perimeter) of the circle.
   */
  public getPerimeter(): number {
    return this.radius * 2 * Math.PI;
  }
}
