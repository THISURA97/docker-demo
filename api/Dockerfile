# Use a Node as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# copy package.json into the container
COPY package.json /app

# install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "run", "start"]
