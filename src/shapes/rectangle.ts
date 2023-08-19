import { IGettingAreaAndPerimeter } from "../interfaces";
import Dot from "../helpers/dot";

/**
 * Represents a rectangle using its length and width.
 */
export class Rectangle implements IGettingAreaAndPerimeter {
  /**
   * Creates a rectangle instance.
   * @param length - The length of the rectangle.
   * @param width - The width of the rectangle.
   */
  constructor(public readonly length: number, public readonly width: number) {}

  /**
   * Calculates and returns the area of the rectangle.
   */
  public getArea(): number {
    return this.length * this.width;
  }

  /**
   * Calculates and returns the perimeter of the rectangle.
   */
  public getPerimeter(): number {
    return (this.length + this.width) * 2;
  }
}

/**
 * Represents a rectangle using four Dot points as its vertices.
 */
export class RectangleWithDots implements IGettingAreaAndPerimeter {
  public readonly length: number;
  public readonly width: number;

  /**
   * Creates a rectangle instance using four Dot points.
   * @param a - First vertex of the rectangle.
   * @param b - Second vertex of the rectangle.
   * @param c - Third vertex of the rectangle.
   * @param d - Fourth vertex of the rectangle.
   */
  constructor(
    public readonly a: Dot,
    public readonly b: Dot,
    public readonly c: Dot,
    public readonly d: Dot
  ) {
    if (!this.isValidShape()) throw new Error("Invalid rectangle");
    [this.length, this.width] = this.getSidesLength();
  }

  /**
   * Determines if the given Dot points can form a valid rectangle.
   */
  protected isValidShape(): boolean {
    const diagonalAC = Dot.getDistance(this.a, this.c);
    const diagonalBD = Dot.getDistance(this.b, this.d);

    return diagonalAC === diagonalBD && Dot.areDotsAdjacent(this.a, this.b);
  }

  /**
   * Determines the length and width of the rectangle using Dot points.
   */
  private getSidesLength(): [number, number] {
    return [Dot.getDistance(this.a, this.b), Dot.getDistance(this.b, this.c)];
  }

  /**
   * Calculates and returns the area of the rectangle formed by Dot points.
   */
  public getArea(): number {
    return this.length * this.width;
  }

  /**
   * Calculates and returns the perimeter of the rectangle formed by Dot points.
   */
  public getPerimeter(): number {
    return 2 * (this.length + this.width);
  }
}
