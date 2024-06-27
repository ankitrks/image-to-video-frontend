# Use official Node.js image from Docker Hub
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
