FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/
RUN npm install && npm run install:all

COPY . .
RUN npm run build

ENV PORT=5000
EXPOSE 5000
CMD ["npm", "start"]
