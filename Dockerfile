FROM node:latest

ENV NODE_ENV=production 

WORKDIR .

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 7777


CMD ["node", "server/index.js"]