## How to use this image

### Create a Dockerfile in your Node.js app project

    # specify the node base image with your desired version node:<version>
        1: FROM node:18
        2: WORKDIR /app
        3: COPY package.json /app
        4: RUN npm install
        5: COPY . /app
        6: CMD  node app.js 
    # replace this with your application's default port
        7: EXPOSE 3003
        
    # Build application/ create image
        8: docker build -t docker-with-nodejs .

    # Run this app 
        9: docker run -it -p 3003:3003 docker-with-nodejs
            a: -p means port: 1st pro si docker expose to host and 2nd post is for use docer internal port. docker-with-nodejs is image name, 3003:3002 its means when localhost git the port 3003 then its go to docker internal port 3002. besically its binding port host with docker port,