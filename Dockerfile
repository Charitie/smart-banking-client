From node:alpine

WORKDIR /client

COPY package.json .

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

COPY . . 

RUN npm run build

CMD ["node", "server.js"]


