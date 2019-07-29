###############################################
# Used to build the application
###############################################

FROM node:lts-alpine AS builder
# Create app directory
WORKDIR /usr/src/app
# Copy application source
COPY . /usr/src/app
# Install all dependencies
RUN yarn install
# Build the application
RUN yarn build:prod

###############################################
# The actual image which serve the files
###############################################

FROM nginx
# Copy dist generated from the previous container
COPY --from=builder /usr/src/app/dist/joscelynjean-website /usr/share/nginx/html
# Copy nginx configuration
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
