import test from 'ava'

import { parseLineToMoves } from '../helpers/parse-line-to-moves.js'

import { Shapes } from '../tetris-solver.js'
import type { Move } from '../tetris-solver.js'

const validInputs: Array<[string, Move[]]> = [
  ['O0,O2,O4,O6', [[Shapes.O, 0], [Shapes.O, 2], [Shapes.O, 4], [Shapes.O, 6]]],
  ['I1,I3,I5,I7', [[Shapes.I, 1], [Shapes.I, 3], [Shapes.I, 5], [Shapes.I, 7]]],
  ['S2,S4,S6,S8', [[Shapes.S, 2], [Shapes.S, 4], [Shapes.S, 6], [Shapes.S, 8]]],
]

test('parses valid inputs correctly', (t) => {
  for (const [input, expected] of validInputs) {
    const result = parseLineToMoves(input)
    t.deepEqual(result, expected, `Expected ${input} to parse to ${JSON.stringify(expected)}`)
  }
})
