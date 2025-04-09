
const DEFAULT_WIDTH = 10
const DEFAULT_HEIGHT = 100

export enum Shapes {
  O = 'O',
  I = 'I',
  S = 'S',
  Z = 'Z',
  L = 'L',
  J = 'J',
  T = 'T',
}

export type Shape = keyof typeof Shapes

export type Move = [Shape, number]

export type TetrisGameArgs = {
  height?: number
  width?: number
}

export class TetrisSolver {
  #shapeDimensions: Record<Shape, Array<[number, number]>> = {
    [Shapes.O]: [[0, 0], [1, 0], [0, 1], [1, 1]],
    [Shapes.I]: [[0, 0], [0, 1], [0, 2], [0, 3]],
    [Shapes.T]: [[0, 0], [1, 0], [2, 0], [1, 1]],
    [Shapes.J]: [[1, 0], [1, 1], [0, 2], [1, 2]],
    [Shapes.L]: [[0, 0], [0, 1], [0, 2], [1, 2]],
    [Shapes.S]: [[1, 0], [2, 0], [0, 1], [1, 1]],
    [Shapes.Z]: [[0, 0], [1, 0], [1, 1], [2, 1]],
  }
  #grid: number[][]
  #gridHeight: number
  #gridWidth: number

  constructor(args: TetrisGameArgs = {}) {
    const height = args.height ?? DEFAULT_HEIGHT
    const width = args.width ?? DEFAULT_WIDTH

    this.#grid = this.createGrid({
      height,
      width,
    })

    this.#gridHeight = height
    this.#gridWidth = width
  }

  processMoves(moves: Array<Move>): number {
    for (const move of moves) {
      const [shape, xCoordinate] = move
      this.#dropPiece(shape, xCoordinate)
    }
    return this.#getMaxHeight()
  }

  #getMaxHeight(): number {
    let count = 0

    for (let row = this.#gridHeight - 1; row >= 0; row--) {
      const hasBlock = this.#grid[row].some(cell => cell === 1)

      if (hasBlock) {
        count++
      }
    }

    return count
  }

  #dropPiece(shape: Shape, xCoordinate: number) {
    let yCoordinate = 0
    while (this.#canPlaceShapeAt(shape, xCoordinate, yCoordinate)) {
      /**
       * Check if the piece can be placed at the current coordinates
       * If it can, move down the piece (i.e. increment yCoordinate)
       * to the next lowest position
       */

      yCoordinate++
    }

    /**
     * If `canPlaceShapeAt` resolves to false, it means yCoordinate
     * is now at the first invalid position, so we need to decrement
     * yCoordinate to get the last valid position
     */
    yCoordinate--

    /** If yCoordinate is less than 0, it means the piece cannot be placed
     * within the grid, so we return early
     */
    if (yCoordinate < 0) return


    this.#placeShape(shape, xCoordinate, yCoordinate)

    /** Clear any full rows */
    this.#clearFullRows()
  }

  #canPlaceShapeAt(shape: Shape, xOffset: number, yOffset: number): boolean {
    const shapeDimensions = this.#shapeDimensions[shape]

    return shapeDimensions.every(([dx, dy]) => {
      const x = xOffset + dx;
      const y = yOffset + dy;

      return (
        this.isWithinGrid(x, y) &&
        this.#isEmptyCell(x, y)
      )
    })
  }

  #isEmptyCell(x: number, y: number): boolean {
    return this.#grid[y][x] === 0
  }

  #placeShape(shape: Shape, xOffset: number, yOffset: number): void {
    const shapeDimensions = this.#shapeDimensions[shape]

    shapeDimensions.forEach(([dx, dy]) => {
      const x = xOffset + dx
      const y = yOffset + dy
      this.#grid[y][x] = 1
    })
  }

  #clearFullRows(): void {
    const nonFullRows = this.#grid.filter(row => !row.every(cell => cell === 1))

    if (nonFullRows.length === this.#gridHeight) {
      /** Return early if there are no full rows to clear */
      return
    }

    const fullRowCount = this.#gridHeight - nonFullRows.length
    const blankGridRows = Array.from({ length: fullRowCount }, () => Array(this.#gridWidth).fill(0))

    this.#grid = [...blankGridRows, ...nonFullRows]
  }

  private isWithinGrid(x: number, y: number): boolean {
    return x >= 0 && x < this.#gridWidth &&
      y >= 0 && y < this.#gridHeight
  }

  private createGrid({ height, width }: { height: number, width: number }): number[][] {
    return Array.from({ length: height }, () => Array(width).fill(0));
  }
}
