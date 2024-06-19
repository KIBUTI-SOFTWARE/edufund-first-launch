# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

# Set environment variables
ENV NODE_ENV=development

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and npm-shrinkwrap.json if they exist
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install all dependencies (including devDependencies)
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Change ownership of the application files
RUN chown -R node /usr/src/app

# Switch to the node user
USER node

# Start the application
CMD ["npm", "run", "dev"]
