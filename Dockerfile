FROM node:18-this-is-a-fake-tag

# Create working directory
WORKDIR /app

# Copy app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port from env variable
EXPOSE 8000

# Start server
CMD ["npm", "start"]
