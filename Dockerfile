FROM node:20-alpine
WORKDIR /login-form
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3000