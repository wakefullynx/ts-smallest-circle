import { circumcircle } from '../src'

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