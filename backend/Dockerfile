FROM node:18

COPY package*.json .

RUN npm i

COPY . .

ENV PORT=8080

CMD ["npm", "start"]

EXPOSE 8080



