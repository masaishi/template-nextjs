# Stage 1: Install dependencies and build the project
FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

# Install dependencies without requiring a lockfile
RUN corepack enable && pnpm install --no-frozen-lockfile

# Copy the entire project
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Production runtime
FROM node:20-alpine
WORKDIR /app

# Re-enable corepack to provide access to pnpm
RUN corepack enable

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the production port
EXPOSE 3000

# Run the application in production mode
CMD ["pnpm", "start"]