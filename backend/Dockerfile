FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency manifests first
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy backend source
COPY . .

# Expose app port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
