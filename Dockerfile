FROM node:alpine
COPY . /app
WORKDIR /app
CMD  node app.js 
EXPOSE 3003