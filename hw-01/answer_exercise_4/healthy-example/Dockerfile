FROM node:alpine3.10

RUN apk update

RUN apk --no-cache add curl

WORKDIR /app

COPY ./src /app

RUN npm install

EXPOSE 8080

HEALTHCHECK --interval=45s --timeout=5s --start-period=30s --retries=2  \
    CMD curl --fail http://localhost:8080 || exit 1 

CMD ["npm", "start"]
