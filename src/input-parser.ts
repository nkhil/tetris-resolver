import * as fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import { TetrisSolver } from './tetris-solver.js'
import { parseLineToMoves } from './helpers/parse-line-to-moves.js'

function processGamesFile(filePath: string): void {
  const file = fs.readFileSync(path.resolve(filePath), 'utf8')
  const lines = file.trim().split('\n')

  for (const line of lines) {
    const moves = parseLineToMoves(line)
    const tetrisSolver = new TetrisSolver()
    const finalHeight = tetrisSolver.processMoves(moves)
    console.log(finalHeight)
  }
}

const fileArgument = process.argv[2]

if (!fileArgument) {
  console.error('Please provide a file path as argument.')
  process.exit(1)
}

processGamesFile(fileArgument)
