# Deployment on Ubuntu
Sources:
- https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7
- https://coderrocketfuel.com/article/fix-404-error-when-using-react-rouder-dom-and-nginx

First, run updates:
```sh
sudo apt-get update
```

Install Node version 14.x:
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
node --version
```
Which should return v14.x
Usually, websites are put into the `/var/www` directory, where `var` is dedicated to variable files. 
It is also where the LAMP stack puts its websites.
Create a directory:
```sh
sudo mkdir /var/www
cd /var/www/
```
Clone your repository URL into it:
```sh
git clone [Your repository URL]
cd [Your Repository Name]
sudo npm install
sudo npm run build
```
Now, install Nginx which is a popular webserver:
```sh
sudo apt-get install nginx
```
Now, you need to configure Nginx, go into its settings directory and copy the default configuration into another file so you can edit the `default`:
```sh
cd /etc/nginx/sites-available/
cp default copy
nano default
```
And edit the `default` file the following way:
```
server {
   listen 80 default_server;
   root /var/www/[Your repo name]/build;
   server_name [your.domain.com] [your other domain if you want to];
   index index.html index.htm;
   location / {
   }
}

location /files/ { 
   autoindex on;
   root /var/www/[your repo name]/files;
}
```
Use the `location /files/ { ... }` part if you also want to serve static files
form there.
There is one last problem. If you use the React router, Nginx will not serve
any route outside the root `/`. 
But you also want to serve an imprint, for example.
You can do this by editing `default` the following way:
```
server {
   listen 80 default_server;
   root /var/www/[Your repo name]/build;
   server_name [your.domain.com] [your other domain if you want to];
   index index.html index.htm;
   location / {
      try_files $uri /index.html;
   }
}

location /files/ { 
   autoindex on;
   root /var/www/[your repo name]/files;
}
```
See `location / { ... }`. This way, all other routes get forwarded to your `index.html` in your `build` directory.

### The `www` Subdomain
In order to relocate everything from `www.brain-rain.com` to `brain-rain.com`, add the following
to your `default` file.
```
server {
   listen 80;
   server_name www.brain-rain.com;
   return 301 $scheme://brain-rain.com$request_uri;
}
```
`$scheme` contains the protocol and `$request_uri` all additional parameters.


### Start, Stop, Restart
Done! Now, test whether the configuration syntax for Nginx is correct.
```sh
sudo nginx -t
```
Now, you can start/stop/restart the same way as any other service: `sudo service nginx start` and `sudo service nginx stop` and `sudo service nginx restart`.

### What the config file should look like
Withou comments, the config file should look like this by now.
Some additions were made by certbot.
```
server {
        root /var/www/brain-rain-react/build;
        server_name brain-rain.com;
        index index.html index.htm;
        location / {
                try_files $uri /index.html;
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
        }

         listen 443 ssl; # managed by Certbot
         ssl_certificate /etc/letsencrypt/live/brain-rain.com/fullchain.pem; # managed by Certbot
         ssl_certificate_key /etc/letsencrypt/live/brain-rain.com/privkey.pem; # managed by Certbot
         include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
         ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
        listen 80;
        server_name www.brain-rain.com;
        return 301 $scheme://brain-rain.com$request_uri;
}

server {
    if ($host = brain-rain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80 default_server;
        server_name brain-rain.com;
        return 404; # managed by Certbot
}
```