FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
RUN npm install -g db-migrate db-migrate-pg 
RUN db-migrate up -e prod
CMD [ "node", "app.js" ]

# EXPOSE 3003