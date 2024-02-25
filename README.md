# Smallest Circle (Typescript)

Iterative and recursive two-dimensional implementations of Welzl's algorithm for computing the smallest circle that encloses a set of points.

This problem is also known as the smallest enclosing circle problem, minimum covering circle problem, or bounding circle problem.
The implementation is based on the following work(s):

    Welzl, E. (1991). Smallest enclosing disks (balls and ellipsoids).
    In New results and new trends in computer science (pp. 359-370).
    Springer, Berlin, Heidelberg.

Welzl's algorithm solves this problem in expected O(n) runtime.
The original algorithm was formulated as recursive program, leading to a call stack overflow for a moderately large amount of points.
Thus, the iterative implementation in this crate should be preferred.
However, the recursive version is provided for demonstration purposes.

*Please note that the expected runtime only holds for randomized inputs (i.e., you may want to shuffle your input stream in advance).*

This is a port of the corresponding Rust implementation [rust-smallest-enclosing-circle](https://github.com/wakefullynx/rust-smallest-enclosing-circle).

## Install

```sh
npm install smallest-circle
```

## Usage Examples

The `smallestCircle` function takes an array of points and returns an object specifying the smallest enclosing circle for the given input. 
You can use the provided `circleCenter` and `circleRadius` methods to determine the circle's center point and radius.
Optionally randomize your input data with the provided in-place `shuffle` function.

```ts
import { circleCenter, circleRadius, smallestCircle, shuffle } from 'smallest-circle'

const points = [[0, 0], [8, 0], [2.5, 3], [1.5, -2], [4, 1], [7, -1]]
shuffle(points)
const circle = smallestCircle(points)
const center = circleCenter(circle)
const radius = circleRadius(circle)

console.log(center) // [ 4, 0 ]
console.log(radius) // 4
```


The API for the recursive version is identical (however it is discouraged to be used in real-world applications for its tendency to exceed call stack size):
```ts
import { circleCenter, circleRadius, shuffle, smallestCircleRecursive } from 'smallest-circle'

const points = [[0, 0], [8, 0], [2.5, 3], [1.5, -2], [4, 1], [7, -1]]
shuffle(points)
const circle = smallestCircleRecursive(points)
const center = circleCenter(circle)
const radius = circleRadius(circle)

console.log(center) // [ 4, 0 ]
console.log(radius) // 4
```
