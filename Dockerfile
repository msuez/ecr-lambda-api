FROM public.ecr.aws/lambda/nodejs:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR /var/task

# Copiar directamente los archivos desde dist/ a /var/task, sin incluir la carpeta dist
COPY ./dist/* /var/task/

# Copiar las dependencias a la ubicación correcta
COPY ./node_modules /var/task/node_modules

CMD ["app.handler"]
