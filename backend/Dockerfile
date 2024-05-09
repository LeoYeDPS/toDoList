# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend codebase into the image
COPY . .

# Build the app using TypeScript Compiler
RUN npm run build

# Expose port 5000 for your Express app
EXPOSE 3001 

# Run the compiled server
CMD ["npm", "run", "serve"]
