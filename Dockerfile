# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S brewops -u 1001

# Copy only prod dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=brewops:nodejs . .

# Remove dev files
RUN rm -rf test/ *.md Dockerfile .git* && \
    chmod -R 755 /app

# Switch to non-root user
USER brewops

# Expose port from env variables
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8000/', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start server
CMD ["npm", "start"]
