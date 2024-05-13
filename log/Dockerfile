FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir files

COPY index.js .

CMD [ "node", "index.js" ]

# TAG=11 && docker build --platform linux/amd64  -t mluukkai/log-output:$TAG . && docker push mluukkai/log-output:$TAG