import Dot from "../helpers/dot";
import { IGettingAreaAndPerimeter } from "../interfaces";

/**
 * Represents a triangle using its side lengths.
 */
export class Triangle implements IGettingAreaAndPerimeter {
  /**
   * Creates a triangle instance.
   * @param a - First side of the triangle.
   * @param b - Second side of the triangle.
   * @param c - Third side of the triangle.
   */
  constructor(
    public readonly a: number,
    public readonly b: number,
    public readonly c: number
  ) {
    if (!this.isValidShape()) throw new Error("Invalid triangle");
  }

  /**
   * Determines if the given sides can form a valid triangle.
   */
  private isValidShape() {
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a
    );
  }

  /**
   * Calculates and returns the area of the triangle.
   */
  public getArea(): number {
    const semiperimeter = this.getPerimeter() / 2;
    return Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c)
    );
  }

  /**
   * Calculates and returns the perimeter of the triangle.
   */
  public getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}

/**
 * Represents a triangle using three Dot points as its vertices.
 */
export class TriangleWithDots implements IGettingAreaAndPerimeter {
  public readonly sideAB: number;
  public readonly sideBC: number;
  public readonly sideCA: number;

  /**
   * Creates a triangle instance using three Dot points.
   * @param a - First vertex of the triangle.
   * @param b - Second vertex of the triangle.
   * @param c - Third vertex of the triangle.
   */
  constructor(
    public readonly a: Dot,
    public readonly b: Dot,
    public readonly c: Dot
  ) {
    [this.sideAB, this.sideBC, this.sideCA] = this.getSidesLength();
    if (!this.isValidShape()) throw new Error("Invalid triangle");
  }

  /**
   * Determines the length of the sides of the triangle using Dot points.
   */
  private getSidesLength(): [number, number, number] {
    return [
      Dot.getDistance(this.a, this.b),
      Dot.getDistance(this.b, this.c),
      Dot.getDistance(this.a, this.c),
    ];
  }

  /**
   * Determines if the given sides (formed from Dot points) can form a valid triangle.
   */
  private isValidShape() {
    return (
      this.sideAB + this.sideBC < this.sideCA &&
      this.sideAB + this.sideCA < this.sideBC &&
      this.sideBC + this.sideCA < this.sideAB
    );
  }

  /**
   * Calculates and returns the area of the triangle formed by Dot points.
   */
  public getArea(): number {
    const semiperimeter = this.getPerimeter() / 2;
    return Math.sqrt(
      semiperimeter *
        (semiperimeter - this.sideAB) *
        (semiperimeter - this.sideBC) *
        (semiperimeter - this.sideCA)
    );
  }

  /**
   * Calculates and returns the perimeter of the triangle formed by Dot points.
   */
  public getPerimeter(): number {
    return this.sideAB + this.sideBC + this.sideCA;
  }
}
