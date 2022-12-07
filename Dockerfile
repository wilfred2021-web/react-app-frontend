FROM node
WORKDIR /app
ADD . /app
RUN npm install --package-lock-only
EXPOSE 8081
CMD npm start
