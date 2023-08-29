# docker_and_kubernetes_projects_udemy
# After creating the files, index.js and package.json run on the terminal the commands node -v ( Results: v18.17.0 )
# and npm -v ( Results: 9.6.7 ) and then npm install, this will install packages and dependencies for express
# the results will be creation of node_modules/ and package-lock.json
# run on CLI node index.js and npm run start and on browser type localhost:3000 to see your app

# Now, we see our app is running, lets delete index.js and package.json and write a Dockerfile
# Run the dockerfile by typing: 

# docker build -t nopeapp:v1 .

# Docker run --name my-node-app -p 3000:3000 nopeapp:v1
# Docker run -itd --name my-node-app -p 8000:3000 nopeapp:v1 # type on browser: localhost:8000

# Command to delete docker images: Docker -rmi [image ID / Name ]
# Command to remove exited containers : Docker rm `docker ps -q -f status=exited`

# Bind mount : docker run -itd -p 8000:3000 -v $(pwd):/usr/scr/app --name nodeapp nodeapp:v2
# Bind mount : docker run -itd -p 8000:3000 -v ~/Desktop/docker_and_kubernetes_projects_udemy/Dockerfile:/usr/scr/app --name nodeapp_2 nodeapp:v2

# to correct the error with node module, we fix it by asking the system to leave the node_modules untouched

# docker run -itd -p 8001:3000 -v ~/Desktop/docker_and_kubernetes_projects_udemy/Dockerfile:/usr/scr/app -v /usr/scr/app/node_modules --name nodeapp_3 nodeapp:v2

# Note that at this moment, changes in index.js are not in the container. Let's login to container and confirm

# logging to container fails with  docker exec -it nodeapp_3 /bin/sh so correct command is  docker exec -it nodeapp_3 sh

# So the issue is that each time we made changes in a node app, we need to restart it by npm run start

# we solve the issue y using the nodemon in the package.json file "devDependencies": { "nodemon": "2.0.1" } and  "start:dev": "nodemon index" and also create a docker in dev coz the init docker cannot be run with start:dev but only with start

# After doing that and running the cmde, conta got exited for no reasons and i had to delete images and build again 


