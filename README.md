
# Tetris Solver

Tetris solver is a [Tetris](https://en.wikipedia.org/wiki/Tetris) game resolver built using Node.js.

## Built using

This project has been buils using:

- Node.js
- Typescript
- [Ava](https://github.com/avajs/ava) (test runner)

## Installation

In order to run this project locally, you will need [Node.js](https://nodejs.org/en) v20. It also supports [Volta](https://volta.sh/) to help manage Node versions.

1. Install dependencies

```bash
npm install # installs dependencies
```

2. Build the project

```bash
npm run build

# You may also use build:watch mode for development
npm run build:watch
```

## Usage

### [Running locally]
This directory comes with games.txt in the project root supplied with some inputs. Please free to modify or replace it with your own alternate (legal) inputs.

```bash
npm run process
```

Running the `process` command will use the existing games.txt file and return the output (separated by `\n`) in the command line.

You may also invoke this program via the command line. Here's how you can achieve this:

```bash
node ./build/input-parser.js <input>.txt > <output>.txt
```

### [Running via Docker]

**Note**: Ensure you have the Docker daemon running before the next step.

```bash
npm run process:docker
```

The `process:docker` command uses the `games.txt` on the host machine. Feel free to modify the games.txt file to supply custom (legal) inputs.
