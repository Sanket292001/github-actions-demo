# Dockerfile to build the express webapi docker image
FROM node:18.15.0

WORKDIR /app

COPY . . 

RUN npm i

CMD [ "npm", "start" ]