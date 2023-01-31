FROM node:18.13.0-slim

WORKDIR /usr/local/src/app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

ENTRYPOINT [ "npm", "run", "serve" ]