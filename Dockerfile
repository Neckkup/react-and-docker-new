# Use official Node.js image from Docker Hub
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY . /app

# Install the dependencies using npm ci for faster and more consistent installs
RUN npm ci

RUN npm run build

EXPOSE 3000
# Run the application
CMD ["npx", "serve", "-s", "dist"]