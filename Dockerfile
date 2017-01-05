FROM httpd:2.4
MAINTAINER joscelyn.jean@gmail.com
COPY ./dist /usr/local/apache2/htdocs/
