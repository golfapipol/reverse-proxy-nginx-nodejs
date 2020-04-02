FROM node:12-alpine
WORKDIR /app
ADD package*.json /app/
RUN npm install
ADD . .
CMD node index.js