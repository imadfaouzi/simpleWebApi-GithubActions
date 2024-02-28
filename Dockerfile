FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]