FROM public.ecr.aws/lambda/nodejs:20

COPY ./dist ${LAMBDA_TASK_ROOT}
COPY ./node_modules ${LAMBDA_TASK_ROOT}/node_modules

CMD ["dist/app.handler"]
