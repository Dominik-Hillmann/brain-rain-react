# Step 1: Build the project
FROM node:10-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Integrate the built project with the NGINX webserver
FROM nginx:1.17.1-alpine

# Copy the built website over
COPY --from=build-step /app/build /usr/share/nginx/html
# Put configuration files in the correct places
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
EXPOSE 433