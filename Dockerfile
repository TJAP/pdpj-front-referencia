 FROM node:12.18-alpine as node-builder

 USER root

 WORKDIR /app/

 COPY . /app

 RUN npm install

 RUN npm run build:dist

 # NGINX

 FROM nginx:1.18-alpine as webserver

 COPY --from=node-builder /app/www /usr/share/nginx/html

 COPY nginx/default.conf /etc/nginx/conf.d/default.conf

 EXPOSE 80

 CMD ["nginx", "-g", "daemon off;"]
