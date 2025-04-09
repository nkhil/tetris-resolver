# syntax=docker/dockerfile:1.2

FROM node:23.11.0-slim
RUN npm install --global npm@10.8.2

WORKDIR /app
COPY --chown=node:node package.json .
COPY --chown=node:node tsconfig.json .
COPY --chown=node:node package-lock.json .
COPY --chown=node:node src ./src

RUN npm ci --no-audit
RUN npm run build

USER node
ENTRYPOINT ["node", "--enable-source-maps", "./build/input-parser.js"]
