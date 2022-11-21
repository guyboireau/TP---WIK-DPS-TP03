FROM node:lts as builder
# Create app directory
WORKDIR /build
# Install app dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm i
COPY . .
RUN npx tsc 


FROM node:lts
WORKDIR /build
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/build/index.js .
# création de l'utilisateur
RUN useradd -r util
USER util
CMD node index.js 

