import { mapStringToShape } from './map-string-to-shape.js'
import never from '../utils/never.js'

import type { Move } from '../tetris-solver.js'

export function parseLineToMoves(line: string): Move[] {
  return line
    .split(',')
    .filter(Boolean)
    .map(token => {
      const shape = mapStringToShape(token[0])
      const x = parseInt(token.slice(1), 10)

      if (Number.isNaN(x)) {
        never(`Invalid x coordinate: ${token.slice(1)}`)
      }

      return [shape, x]
    })
}
