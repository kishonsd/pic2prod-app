FROM node:lts
WORKDIR /app
COPY package.json package.json
COPY . .
ENV NODE_ENV production
RUN npm install
COPY . .
EXPOSE 8080
RUN npm install -g nodemon
CMD [ "nodemon", "index.js" ]