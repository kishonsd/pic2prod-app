FROM node:15.13
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080 8081