# Usar la imagen base de AWS Lambda con Node.js 20
FROM public.ecr.aws/lambda/nodejs:20 as builder

# Establecer el directorio de trabajo
WORKDIR /usr/app

# Copiar los archivos de configuración (package.json y package-lock.json)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Ejecutar el build
RUN npm run build

# Usar la imagen base de AWS Lambda con Node.js 20
FROM public.ecr.aws/lambda/nodejs:20

# Establecer el directorio de trabajo para Lambda
WORKDIR ${LAMBDA_TASK_ROOT}

# Copiar los archivos de configuración de dependencias
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --omit=dev

# Copiar los archivos de dist generados
COPY --from=builder /usr/app/dist/ ./

# Copiar la carpeta public para archivos estáticos
COPY --from=builder /usr/app/public/ ./public/

# Especificar el handler para AWS Lambda
CMD ["app.handler"]
