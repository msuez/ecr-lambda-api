FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR /var/task

COPY ./node_modules /var/task/node_modules

COPY ./dist /var/task/

CMD ["app.handler"]
