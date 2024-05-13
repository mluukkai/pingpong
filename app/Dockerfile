FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=3000

EXPOSE 3000

CMD [ "node", "index.js" ]

# TAG=27 && docker build --platform linux/amd64 -t mluukkai/ping-pong:$TAG . && docker push mluukkai/ping-pong:$TAG
