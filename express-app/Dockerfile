FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000

# build a react app with env
ARG REACT_APP_BACKEND_API="/api"
ENV REACT_APP_BACKEND_API=${REACT_APP_BACKEND_API}
# RUN yarn build
# ENV APP_SECRET="mysecret"

# CMD echo ${MY_APP_SECRET}

CMD yarn start