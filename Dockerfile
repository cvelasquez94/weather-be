FROM node:alpine

COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 5000

CMD ["npx","nodemon", "index.js"]
