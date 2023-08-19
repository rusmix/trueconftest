/**
 * Interface representing a dot in a 2D plane.
 */
export interface IDot {
  x: number; // X-coordinate of the dot.
  y: number; // Y-coordinate of the dot.
}

/**
 * Represents a dot in a 2D plane with utility functions.
 */
export default class Dot implements IDot {
  /**
   * Constructs a new Dot instance.
   * @param x - X-coordinate of the dot.
   * @param y - Y-coordinate of the dot.
   */
  constructor(public readonly x: number, public readonly y: number) {}

  /**
   * Computes the distance between two dots in a 2D plane.
   * @param a - First dot.
   * @param b - Second dot.
   * @returns Distance between `a` and `b`.
   */
  public static getDistance(a: Dot, b: Dot) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  /**
   * Checks if two dots are adjacent either horizontally or vertically.
   * Note: Dots on the same horizontal line but with different X-coordinates are considered adjacent.
   *       Similarly, dots on the same vertical line but with different Y-coordinates are considered adjacent.
   * @param a - First dot.
   * @param b - Second dot.
   * @returns `true` if dots are adjacent, otherwise `false`.
   */
  public static areDotsAdjacent(a: Dot, b: Dot): boolean {
    const horizontalCheck = a.y === b.y && a.x !== b.x;
    const verticalCheck = a.x === b.x && a.y !== b.y;

    return horizontalCheck || verticalCheck;
  }
}
