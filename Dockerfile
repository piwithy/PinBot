FROM node:latest

# Create the directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy & install node packages
COPY package.json /usr/src/bot
RUN npm install

# Copy Bot
COPY . /usr/src/bot

# Starting BOT
CMD ["node", "index.js"]
