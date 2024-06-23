# FROM node:current-alpine3.14

# WORKDIR /usr/src/app

# COPY package.json /app

# COPY . .

# RUN npm set progress=false && npm install

# EXPOSE 6006

# CMD ["npm", "run", "dev"]


# Use the official Node.js 18.17.0 (or higher) image as a base image
FROM node:18.17.0 as build

# Set the working directory
WORKDIR /usr/src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm set progress=false && npm run start

# Use the official nginx image to serve the built application
FROM nginx:alpine

# Copy the nginx configuration file
COPY . .

# Expose port 80
EXPOSE 6060

# Start nginx
CMD ["npm", "run", "dev"]
