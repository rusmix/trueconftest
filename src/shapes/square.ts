import { IGettingAreaAndPerimeter } from "../interfaces";
import Dot from "../helpers/dot";

// Note: В этом коде квадрат не наследуется от прямоугольника из-за различий в свойствах
// и потому что квадрату нельзя назначить разные стороны, в то время как это возможно для прямоугольника.

/**
 * Represents a square using its side length.
 */
export class Square implements IGettingAreaAndPerimeter {
  /**
   * Creates a square instance.
   * @param a - Side length of the square.
   */
  constructor(public readonly a: number) {}

  /**
   * Calculates and returns the area of the square.
   */
  public getArea(): number {
    return this.a ** 2;
  }

  /**
   * Calculates and returns the perimeter of the square.
   */
  public getPerimeter(): number {
    return this.a * 4;
  }
}

/**
 * Represents a square using four Dot points as its vertices.
 */
export class SquareWithDots implements IGettingAreaAndPerimeter {
  public readonly side: number; // Length of a side of the square

  /**
   * Creates a square instance using four Dot points.
   * @param a - First vertex of the square.
   * @param b - Second vertex of the square.
   * @param c - Third vertex of the square.
   * @param d - Fourth vertex of the square.
   */
  constructor(
    public readonly a: Dot,
    public readonly b: Dot,
    public readonly c: Dot,
    public readonly d: Dot
  ) {
    if (!this.isValidShape()) throw new Error("Invalid square");
    this.side = Dot.getDistance(a, b);
  }

  /**
   * Determines if the given Dot points can form a valid square.
   */
  isValidShape(): boolean {
    const [sideAB, sideBC, sideCD, sideDA] = this.getSidesLength();

    const diagonalAC = Dot.getDistance(this.a, this.c);
    const diagonalBD = Dot.getDistance(this.b, this.d);

    return (
      sideAB === sideBC &&
      sideBC === sideCD &&
      sideCD === sideDA &&
      diagonalAC === diagonalBD
    );
  }

  /**
   * Determines the length of the sides of the square using Dot points.
   */
  private getSidesLength(): [number, number, number, number] {
    return [
      Dot.getDistance(this.a, this.b),
      Dot.getDistance(this.b, this.c),
      Dot.getDistance(this.c, this.d),
      Dot.getDistance(this.d, this.a),
    ];
  }

  /**
   * Calculates and returns the area of the square formed by Dot points.
   */
  public getArea(): number {
    return this.side ** 2;
  }

  /**
   * Calculates and returns the perimeter of the square formed by Dot points.
   */
  public getPerimeter(): number {
    return this.side * 4;
  }
}
