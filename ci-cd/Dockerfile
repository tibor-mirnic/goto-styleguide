FROM nginx:alpine

## Override the default config
COPY ./ci-cd/nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

## Copy the build
COPY /storybook-static /usr/share/nginx/html