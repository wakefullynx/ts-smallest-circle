import { incircle, orient2d } from 'robust-predicates'
import * as seedrandom from 'seedrandom'

export type Point = [number, number]
export type Vector = [number, number]

export type Circle = {
    points: [Point] | [Point, Point] | [Point, Point, Point]
    counterclockwise: boolean
    surrogate: undefined | Point
}

const enum State {
    S0,
    S1,
    S2,
    S3,
    S4
}

type StackElement = {
    state: State,
    element?: Vector
}

/**
 * For details see:
 * Welzl, E. (1991). Smallest enclosing disks (balls and ellipsoids).
 * In New results and new trends in computer science (pp. 359-370).
 * Springer, Berlin, Heidelberg.
 */

function smallestCircle(points: Vector[], seed?: string | undefined): Circle | undefined {
    /**
     * This function is a (naive) iterative rewrite of Welzl's recursive
     * minidisk algorithm.
     */

    const p: Vector[] = points.slice()
    shuffle(p, seed)
    const r: Vector[] = []

    const stack: StackElement[] = [{
        state: State.S0
    }]

    let circle: Circle | undefined

    while (stack.length > 0) {
        const current = stack.pop()!

        switch (current.state) {

            case State.S0:
                if (p.length === 0 || r.length === 3) {
                    circle = createCircle(r)
                } else {
                    stack.push({
                        state: State.S1
                    })
                }
                break

            case State.S1:
                const element = p.pop()

                stack.push({
                    state: State.S2,
                    element
                })

                stack.push({
                    state: State.S0
                })
                break

            case State.S2:
                stack.push({
                    state: State.S3,
                    element: current.element
                })

                if (!isInsideCircle(current.element!, circle)) {
                    r.push(current.element!)

                    stack.push({
                        state: State.S4
                    })

                    stack.push({
                        state: State.S0
                    })
                }

                break

            case State.S3:
                p.push(current.element!)
                break

            case State.S4:
                r.pop()
                break
        }
    }

    return circle
}

function smallestCircleRecursive(points: Vector[], seed?: string | undefined) {

    function recursion(p: Vector[], r: Vector[]): Circle | undefined {
        if (p.length === 0 || r.length === 3) {
            return createCircle(r)
        } else {
            const remainder = p.slice()
            const element = remainder.pop()!
            let circle = recursion(remainder, r)
            if (!isInsideCircle(element, circle)) {
                const x = r.slice()
                x.push(element)
                circle = recursion(remainder, x)
            }
            return circle
        }
    }

    return recursion(points, [])
}

function isInsideCircle(p: Point, c: Circle | undefined): boolean {
    const [px, py] = p
    if (c === undefined) {
        return false
    } else if (c.points.length === 1) {
        const [ax, ay] = c.points[0]
        return ax === px && ay === py
    } else if (c.points.length === 2) {
        const [ax, ay] = c.points[0]
        const [bx, by] = c.points[1]
        const [cx, cy] = c.surrogate!
        return incircle(ax, ay, bx, by, cx, cy, px, py) < 0 !== c.counterclockwise
    } else {
        const [ax, ay] = c.points[0]
        const [bx, by] = c.points[1]
        const [cx, cy] = c.points[2]
        return incircle(ax, ay, bx, by, cx, cy, px, py) < 0 !== c.counterclockwise
    }
}

function createCircle(r: Vector[]): Circle | undefined {
    if (r.length === 1) {
        return {
            points: [r[0]],
            counterclockwise: false,
            surrogate: undefined
        }
    } else if (r.length === 2) {
        const [ax, ay] = r[0]
        const [bx, by] = r[1]

        const [mx, my] = [0.5 * (ax + bx), 0.5 * (ay + by)]
        const [px, py] = [mx - my + ay, my + mx - ax]

        return {
            points: [[ax, ay], [bx, by]],
            counterclockwise: orient2d(ax, ay, bx, by, px, py) < 0,
            surrogate: [px, py]
        }
    } else if (r.length === 3) {
        const [ax, ay] = r[0]
        const [bx, by] = r[1]
        const [cx, cy] = r[2]
        return {
            points: [[ax, ay], [bx, by], [cx, cy]],
            counterclockwise: orient2d(ax, ay, bx, by, cx, cy) < 0,
            surrogate: undefined
        }
    }

    return undefined
}

export function circumcircle(ax: number, ay: number, bx: number, by: number, cx: number, cy: number): [number, number, number] | undefined {
    let orientation = orient2d(ax, ay, bx, by, cx, cy)

    if (orientation > 0) {
        orientation = -orientation;
        [bx, by, cx, cy] = [cx, cy, bx, by]
    } else if (orientation === 0) {
        return undefined
    }

    const denominator = 2 * -orientation

    const acx = ax - cx
    const acy = ay - cy
    const bcx = bx - cx
    const bcy = by - cy
    const acxs = acx * acx
    const acys = acy * acy
    const bcxs = bcx * bcx
    const bcys = bcy * bcy
    const abx = ax - bx
    const aby = ay - by
    const abxs = abx * abx
    const abys = aby * aby

    const acxys = acxs + acys
    const bcxys = bcxs + bcys
    const abxys = abxs + abys

    return [cx + (acxys * bcy - bcxys * acy) / denominator,
    cy + (acx * bcxys - bcx * acxys) / denominator,
    Math.sqrt(bcxys * acxys * abxys) / denominator]
}

export function shuffle(array: any[], seed?: string | undefined) {
    const generator = seedrandom.default(seed)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(generator() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}