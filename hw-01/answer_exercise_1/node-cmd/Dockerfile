FROM node:alpine3.10

RUN apk update

WORKDIR /app

COPY ./src /app

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
