FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run the build script to create the 'dist' directory
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
