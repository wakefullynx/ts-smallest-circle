import { circleCenter, circleRadius, circumcircle, smallestCircle, smallestCircleRecursive } from '../src'

describe('iterative', () => {
    test('basic_collinear', () => {
        const r = smallestCircle([[0, 0], [1, 0], [2, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_duplicate', () => {
        const r = smallestCircle([[0, 0], [1, 0], [1, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_duplicate2', () => {
        const r = smallestCircle([[1, 0], [0, 0], [1, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_empty', () => {
        const r = smallestCircle([])
        expect(circleCenter(r)).toEqual(undefined)
        expect(circleRadius(r)).toEqual(undefined)
    })

    test('basic_single', () => {
        const r = smallestCircle([[0, 0]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(0)
    })

    test('basic_double', () => {
        const r = smallestCircle([[0, 0], [1, 0]])
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_double_duplicate', () => {
        const r = smallestCircle([[1, 0], [1, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(0)
    })

    test('basic_opposite_zero', () => {
        const r = smallestCircle([[1, 0], [-1, 0]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small', () => {
        const r = smallestCircle([[0, 0], [1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small2', () => {
        const r = smallestCircle([[1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [0, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small3', () => {
        const r = smallestCircle([[0, 0], [1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_cocircular', () => {
        const r = smallestCircle([[1, 0], [0, 1], [-1, 0], [0, -1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_multiple', () => {
        const r = smallestCircle([[-1, -1], [-1, -1], [-1, -1], [-1, -1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 1], [1, 1], [1, 1], [1, 1], [-1, -1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(Math.SQRT2)
    })

    test('basic_multiple2', () => {
        const r = smallestCircle([[-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(Math.SQRT2)
    })

    test('basic_triangle', () => {
        const r = smallestCircle([[0, 0], [1, 0], [1, 1], [1, 1]])
        expect(circleCenter(r)).toEqual([0.5, 0.5])
        expect(circleRadius(r)).toEqual(Math.SQRT1_2)
    })
})


describe('recursive', () => {
    test('basic_collinear', () => {
        const r = smallestCircleRecursive([[0, 0], [1, 0], [2, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_duplicate', () => {
        const r = smallestCircleRecursive([[0, 0], [1, 0], [1, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_duplicate2', () => {
        const r = smallestCircleRecursive([[1, 0], [0, 0], [1, 0]])
        expect(r).toBeDefined()
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_empty', () => {
        const r = smallestCircleRecursive([])
        expect(circleCenter(r)).toEqual(undefined)
        expect(circleRadius(r)).toEqual(undefined)
    })

    test('basic_single', () => {
        const r = smallestCircleRecursive([[0, 0]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(0)
    })

    test('basic_double', () => {
        const r = smallestCircleRecursive([[0, 0], [1, 0]])
        expect(circleCenter(r)).toEqual([0.5, 0])
        expect(circleRadius(r)).toEqual(0.5)
    })

    test('basic_double_duplicate', () => {
        const r = smallestCircleRecursive([[1, 0], [1, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(0)
    })

    test('basic_opposite_zero', () => {
        const r = smallestCircleRecursive([[1, 0], [-1, 0]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small', () => {
        const r = smallestCircleRecursive([[0, 0], [1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small2', () => {
        const r = smallestCircleRecursive([[1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [0, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_small3', () => {
        const r = smallestCircleRecursive([[0, 0], [1e-12, 0], [0.5, 0], [1, 0], [1.1, 0], [1.5, 0], [2 - 1e-12, 0], [2, 0]])
        expect(circleCenter(r)).toEqual([1, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_cocircular', () => {
        const r = smallestCircleRecursive([[1, 0], [0, 1], [-1, 0], [0, -1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(1)
    })

    test('basic_multiple', () => {
        const r = smallestCircleRecursive([[-1, -1], [-1, -1], [-1, -1], [-1, -1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 1], [1, 1], [1, 1], [1, 1], [-1, -1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(Math.SQRT2)
    })

    test('basic_multiple2', () => {
        const r = smallestCircleRecursive([[-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1], [-1, -1], [0, 0], [1, 1]])
        expect(circleCenter(r)).toEqual([0, 0])
        expect(circleRadius(r)).toEqual(Math.SQRT2)
    })

    test('basic_triangle', () => {
        const r = smallestCircleRecursive([[0, 0], [1, 0], [1, 1], [1, 1]])
        expect(circleCenter(r)).toEqual([0.5, 0.5])
        expect(circleRadius(r)).toEqual(Math.SQRT1_2)
    })
})


describe('box', () => {
    test('half-box lower right', () => {
        expect(circumcircle(-1, -1, 1, -1, 1, 1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box lower right reversed', () => {
        expect(circumcircle(-1, -1, 1, 1, 1, -1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box upper right', () => {
        expect(circumcircle(-1, 1, 1, -1, 1, 1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box upper right reversed', () => {
        expect(circumcircle(-1, 1, 1, 1, 1, -1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box lower left', () => {
        expect(circumcircle(-1, -1, 1, -1, -1, 1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box lower left reversed', () => {
        expect(circumcircle(-1, -1, -1, 1, 1, -1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box upper left', () => {
        expect(circumcircle(-1, -1, 1, 1, -1, 1)).toEqual([0, 0, Math.SQRT2])
    })

    test('half-box upper left reversed', () => {
        expect(circumcircle(-1, -1, -1, 1, 1, 1)).toEqual([0, 0, Math.SQRT2])
    })
})

describe('degenerate', () => {
    test('collinear#1', () => {
        expect(circumcircle(0, 0, 0, 0, 0, 0)).toEqual(undefined)
    })

    test('collinear#2', () => {
        expect(circumcircle(1, 1, 1, 1, 1, 1)).toEqual(undefined)
    })

    test('pair#1', () => {
        expect(circumcircle(1, 1, 1, 1, 0, 0)).toEqual(undefined)
    })

    test('pair#2', () => {
        expect(circumcircle(1, 1, 0, 0, 1, 1)).toEqual(undefined)
    })

    test('pair#3', () => {
        expect(circumcircle(0, 0, 1, 1, 1, 1)).toEqual(undefined)
    })
})

describe('various', () => {
    test('equilateral', () => {
        expect(circumcircle(0, 0, 1, 0, 0.5, Math.sqrt(3) / 2)).toEqual([0.5, Math.sqrt(3) / 2 - Math.sqrt(3) / 3, Math.sqrt(3) / 3])
    })

    test('small', () => {
        const a = Number.EPSILON
        expect(circumcircle(-a, -a, a, -a, a, a)).toEqual([0, 0, a * Math.SQRT2])
    })

    test('smallshifted#1', () => {
        const shift = 1
        const a = Number.EPSILON
        expect(circumcircle(-a + shift, -a + shift, a + shift, -a + shift, a + shift, a + shift)).toEqual([shift, shift, a * Math.SQRT2])
    })

    test('smallshifted#2', () => {
        const shift = 1e2
        const a = 1e6 * Number.EPSILON
        expect(circumcircle(-a + shift, -a + shift, a + shift, -a + shift, a + shift, a + shift)).toEqual([shift, shift, a * Math.SQRT2])
    })
})