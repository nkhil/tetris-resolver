
# Tetris Solver

Tetris solver is a [Tetris](https://en.wikipedia.org/wiki/Tetris) game resolver built using Node.js.

## Built using

This project has been buils using:

- Node.js
- Typescript
- [Ava](https://github.com/avajs/ava) (test runner)

## Installation

In order to run this project locally, you will need [Node.js](https://nodejs.org/en) v20. It also supports [Volta](https://volta.sh/) to help manage Node versions. You can also use [Docker](https://www.docker.com/) - please see the 'Running via Docker' section below.

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
## Tests

Ensure that you build the project with `npm run build` or `npm run build:watch` before running tests

```bash
npm run test
```

## Usage

### [Running locally]
This directory comes with games.txt in the project root supplied with some inputs. Please free to modify or replace it with your own alternate (legal) inputs.

```bash
npm run process
```

Running the `process` command will use the existing games.txt file and return the output (separated by `\n`) in the command line.

You may also invoke this program via the command line. Here's an easy command to achieve this:

```bash
node ./build/input-parser.js <input>.txt > <output>.txt
```

### [Running via Docker]

**Note**: Ensure you have the Docker daemon running before the next step.

```bash
npm run process:docker
```

The `process:docker` command uses the supplied `games.txt` on the host machine. Feel free to modify the games.txt file to supply custom (legal) inputs. Note that the `games.txt` file is currently not copied into the Docker container, so you can make changes to it on the fly.

## Further considerations

I believe the current state of the project is feature complete in line with the requirements listed in `dfns_code_exercise.pdf`.

As requested, I have avoided any external dependencies, and this program only uses the Node standard library at runtime. The dev dependencies I've used have been for linting, testing, and compiling the Typescript code.

As the requirements mentioned this should be treated as production code, I've decided to include a multi-stage Dockerfile which should help containerize and deploy this if needed.

I've tried to keep my code functional (i.e. avoid mutations etc).

As the requirements mention a grid of 10 squares wide & 100 squares tall, I've made some decisions around data structures, hard-coded default values (Vs using environment variables).

If we ever wanted to accommodate larger grids (for eg: 10,000 squares wide, 100,000 squares tall), we may run into performance issues. I have ideas about performance and efficiency if this were the case. However, I am not a fan of over-engineering / pre-optimizations. I'd welcome the opportunity to have a discussion about this.
