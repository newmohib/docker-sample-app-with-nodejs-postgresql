FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
RUN npm install -g db-migrate db-migrate-pg
CMD [ "node", "index.js" ]