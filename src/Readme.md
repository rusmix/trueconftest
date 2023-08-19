# Geometry Helper Library

A simple TypeScript library to work with geometrical shapes and their properties.

## Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Dot](#dot)
  - [Shapes](#shapes)
    - [Triangle](#triangle)
    - [Square](#square)
    - [Rectangle](#rectangle)
    - [Circle](#circle)
- [Contributing](#contributing)
- [License](#license)

## Installation

git clone

As simple as it is =)

## Usage

### Dot

A basic representation of a point in a 2D plane. Provides utility functions to compute the distance between two dots and check if two dots are adjacent either horizontally or vertically.

**Example:**

```typescript
import Dot from "./path-to-Dot-file";

const dot1 = new Dot(0, 0);
const dot2 = new Dot(4, 0);

console.log(Dot.getDistance(dot1, dot2)); // Outputs: 4
```
### Shapes

The library provides implementations for multiple geometric shapes:

#### Triangle

Represents a triangle using its three sides. Provides methods to compute its area and perimeter.

#### Square

Represents a square using its side length. Provides methods to compute its area and perimeter. A version with dots as vertices is also available.

#### Rectangle

Represents a rectangle using its length and width. Provides methods to compute its area and perimeter. A version with dots as vertices is also available.

#### Circle

Represents a circle using its radius. Provides methods to compute its area and circumference.

## Contributing

We welcome contributions! Please follow the usual GitHub pull request process.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
