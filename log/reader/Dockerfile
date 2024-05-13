FROM node:20

WORKDIR /app
RUN mkdir files
COPY index.js .

CMD [ "node", "index.js" ]

# docker build -t mluukkai/log-reader .; docker push mluukkai/log-reader