# FROM smebberson/alpine-nginx-nodejs:latest
FROM nginx:latest
FROM node:latest

FROM certbot:latest
# Copy all the files in the repository into a directory from which NGINX will serve it.
# RUN mkdir /var/www
RUN mkdir /var/www/brain-rain-react
WORKDIR /var/www/brain-rain-react

COPY . .
RUN ls /etc/nginx/ -la
RUN ls ./util/

# RUN service nginx stop
RUN mkdir /etc/nginx/sites-available
RUN touch /etc/nginx/sites-available/default
RUN cat ./util/nginx-config-sites-available-included.txt > /etc/nginx/nginx.conf
RUN cat ./util/nginx-config.txt > /etc/nginx/sites-available/default
# RUN service nginx restart
# RUN /var/www/brain-rain-react/util/nginx-config.sh
EXPOSE 80
EXPOSE 403
CMD npm install; npm run build; service nginx start

# # Multi-stage
# # 1) Node image for building frontend assets
# # 2) nginx stage to serve frontend assets

# # Name the node stage "builder"
# FROM node:10 AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# COPY . .
# # install node modules and build assets
# RUN yarn install && yarn build

# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]