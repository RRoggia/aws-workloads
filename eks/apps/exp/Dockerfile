FROM node:18-slim

WORKDIR /app
COPY package.json ./
COPY ./src src
RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]