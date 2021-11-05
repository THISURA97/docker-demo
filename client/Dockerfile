FROM node:14-alpine

# Create app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000
CMD ["npm", "run", "start"]