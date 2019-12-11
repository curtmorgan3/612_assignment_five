FROM node:12

# Create app directory
WORKDIR ./app

# Copying package.json and package-lock.json using a wildcard
COPY package.json ./
COPY package-lock.json ./
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm", "start"]