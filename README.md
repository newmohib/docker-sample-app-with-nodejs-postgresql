## How to use this image

### Build and run
    crate img/ Build
        1: docker build -t app-name .
    run img
        1: docker run app-name
### Create and Push Repository to docker hub
    Create a Repository
        1: docker-nodejs-sample-app
    Add Repository
        1: docker tag local-image:tagname new-repo:tagname
            a: docker tag docker-nodejs-sample-app:latest newmohib/docker-nodejs-sample-app:nodejs-sample-app
    Push Repository
        1: docker push new-repo:tagname
            a: docker push newmohib/docker-nodejs-sample-app:nodejs-sample-app
    Pull Repository
        1: docker pull newmohib/docker-nodejs-sample-app:nodejs-sample-app
    stop all container
        1: docker ps -a
    remove all container and stop
        1: docker container rm -f $( docker container ls -aq )
    remove all image
        1: docker image rm -f $(docker image ls -q)
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


## Initialize Docker

    1: what is Docker ?
    2: Virtual Machines vs Containers
    3: Architecture of Docker
    4: installing Docker
    5: Developmetn Workflow

#### what is Docker ?
    A platform for building, running and shipping applications in a consistent manner so if your application works on your development machine it can run and function the same way ton other machines.
#### what is container
    as isolated environment for running an application.
#### kernel ?
    A kernel manages applictions and hardware resources.


## Docker Compose

     
