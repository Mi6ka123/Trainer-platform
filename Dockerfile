FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build Next.js
RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "start"]
