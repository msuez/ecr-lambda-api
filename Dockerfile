FROM public.ecr.aws/lambda/nodejs:20

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY ./dist ${LAMBDA_TASK_ROOT}

RUN cp -R node_modules ${LAMBDA_TASK_ROOT}/node_modules

CMD ["dist/app.handler"]
