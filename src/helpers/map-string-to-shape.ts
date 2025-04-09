import never from '../utils/never.js'
import { Shapes } from '../tetris-solver.js'

import type { Shape } from '../tetris-solver.js'

export function mapStringToShape(shape: string): Shape {
  switch (shape) {
    case 'O': {
      return Shapes.O
    }
    case 'I': {
      return Shapes.I
    }
    case 'S': {
      return Shapes.S
    }
    case 'Z': {
      return Shapes.Z
    }
    case 'L': {
      return Shapes.L
    }
    case 'J': {
      return Shapes.J
    }
    case 'T': {
      return Shapes.T
    }
    default: {
      never(`Invalid shape: ${shape} encountered`)
    }
  }
}
