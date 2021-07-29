FROM node:14

WORKDIR /dockerchallenge

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]