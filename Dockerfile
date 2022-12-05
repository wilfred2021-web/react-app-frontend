FROM node
WORKDIR /app
ADD . /app
RUN npm install --package-lock-only
EXPOSE 3000
CMD npm start
