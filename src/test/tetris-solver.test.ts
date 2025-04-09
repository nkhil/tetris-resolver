import test from 'ava'

import { TetrisSolver, Shapes } from '../tetris-solver.js'

import type { Move } from '../tetris-solver.js'

type Assertion = {
  moves: Array<Move>
  expected: number
}

const ASSERTIONS: Array<Assertion> = [
  {
    moves: [
      [Shapes.O, 0],
      [Shapes.O, 2],
      [Shapes.O, 4],
      [Shapes.O, 6],
      [Shapes.O, 8],
    ],
    expected: 0,
  },
  {
    moves: [
      [Shapes.L, 0],
      [Shapes.J, 2],
      [Shapes.O, 4],
      [Shapes.L, 6],
      [Shapes.J, 8],
    ],
    expected: 2,
  },
  {
    moves: [
      [Shapes.T, 0],
      [Shapes.Z, 3],
      [Shapes.T, 5],
      [Shapes.J, 8],
    ],
    expected: 3,
  },
  {
    moves: [
      [Shapes.T, 0],
      [Shapes.Z, 3],
      [Shapes.T, 5],
      [Shapes.O, 2],
      [Shapes.O, 8],
    ],
    expected: 3,
  },
  {
    moves: [
      [Shapes.I, 1],
    ],
    expected: 4,
  },
]

for (const { moves, expected } of ASSERTIONS) {
  test(`can process move(s): ${moves} correctly`, (t) => {
    const solver = new TetrisSolver()
    const result = solver.processMoves(moves)
    t.is(result, expected, `Expected ${expected} for moves: ${moves}`)
  })
}
