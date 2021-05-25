service nginx stop

cd /var/www/brain-rain-react
cat ./util/nginx-config.txt > /etc/nginx/sites-available/default

npm install
npm run build

service nginx start