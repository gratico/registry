FROM mhart/alpine-node:15

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD ["yarn", "run", "start"]

WORKDIR /src
COPY ./node_modules ./node_modules
COPY ./src ./src 
COPY ./public ./public 
COPY package.json Makefile tsconfig.json ./

RUN apk add make bash

RUN rm -rf VERSION && \
  date +%s > VERSION && \
  echo `cat VERSION`

