FROM node:lts-alpine as build-dist
WORKDIR app
COPY package.json /app
RUN npm install -g yarn
RUN yarn add -g http-server
RUN yarn
COPY . /app
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
WORKDIR website
COPY --from=build-dist ./app/dist /website
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
<<<<<<< HEAD
CMD ["http-server", "dist", "nginx", "-g", "daemon off;"]
=======
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> hot-fixed
