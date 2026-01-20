# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY app/package*.json ./
RUN npm install --production

# Copy app code
COPY app/ .

# Expose port from env variable
ENV PORT=3000
EXPOSE $PORT

# Start the application
CMD ["node", "index.js"]

