import test from 'ava'

import { mapStringToShape } from '../helpers/map-string-to-shape.js'
import { Shapes } from '../tetris-solver.js'

import type { Shape } from '../tetris-solver.js'

const validShapes: Array<[string, Shape]> = [
  ['O', Shapes.O],
  ['I', Shapes.I],
  ['S', Shapes.S],
  ['Z', Shapes.Z],
  ['L', Shapes.L],
  ['J', Shapes.J],
  ['T', Shapes.T],
]
const invalidShapes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

test('should return the correct shape for valid inputs', (t) => {
  for (const [input, expected] of validShapes) {
    const result = mapStringToShape(input)
    t.is(result, expected, `Expected ${input} to map to ${expected}`)
  }
})

test('should throw an error for invalid inputs', (t) => {
  for (const input of invalidShapes) {
    const error = t.throws(() => {
      mapStringToShape(input)
    })
    t.is(error?.message, `Invalid shape: ${input} encountered`)
  }
})
