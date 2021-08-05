FROM node:14

WORKDIR /dockerchallenge

COPY . .

EXPOSE 5000

RUN npm install

ENTRYPOINT ["npm", "start"]