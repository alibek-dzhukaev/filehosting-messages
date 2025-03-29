# ===============================================
# Base Stage: Common setup for all stages
# ===============================================
FROM node:20-alpine AS base

# Install pnpm globally as root
USER root
RUN npm install -g pnpm

# Create a non-root user and group if they don't already exist
RUN addgroup -S appgroup || true && \
    adduser -S appuser -G appgroup || true

# Set the working directory and fix ownership
WORKDIR /app
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# ===============================================
# Stage 1: Build the application
# ===============================================
FROM base AS builder

# Copy dependency files first to leverage Docker layer caching
COPY --chown=appuser:appgroup package.json pnpm-lock.yaml* ./

# Install dependencies (including dev dependencies)
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY --chown=appuser:appgroup . .

# Build the application (Vite will output to /dist)
RUN pnpm run build

# ===============================================
# Stage 2: Development stage
# ===============================================
FROM base AS development

# Copy dependency files
COPY --chown=appuser:appgroup package.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies)
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY --chown=appuser:appgroup . .

# Expose the application port (Vite default is 5173)
EXPOSE 5173

# Set environment variables for development
ENV NODE_ENV=development
ENV PORT=3001
ENV HOST=0.0.0.0

# Start the application in development mode
CMD ["pnpm", "run", "dev"]