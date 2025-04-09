# syntax=docker/dockerfile:1.2

##
## Stage 1: Build
##
FROM node:23.11.0-slim AS builder
RUN npm install --global npm@10.8.2

WORKDIR /app

# Copy only the necessary files for dependency resolution
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
COPY --chown=node:node tsconfig.json .

# Install dependencies
RUN npm ci --no-audit

# Copy source code
COPY --chown=node:node src ./src

# Build the project
RUN npm run build

##
## Stage 2: Runtime
##
FROM node:23.11.0-slim

WORKDIR /app

# Copy only the built output and required files
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/package.json .
COPY --from=builder --chown=node:node /app/package-lock.json .

USER node

ENTRYPOINT ["node", "--enable-source-maps", "./build/input-parser.js"]
