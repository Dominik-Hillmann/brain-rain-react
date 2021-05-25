FROM smebberson/alpine-nginx-nodejs

# Copy all the files in the repository into a directory from which NGINX will serve it.
RUN mkdir /var/www
COPY . /var/www/brain-rain-react

CMD ["bash", "/var/www/brain-rain-react/util/nginx-config.sh"]