# ecr-lambda-api

## Run build

To build the project, run the following command

```bash
  npm run build
```

## Run locally with docker

#### Build container
```bash
docker build -f Dockerfile.dev -t lambda-api-dev .
```
#### Run container
```bash
docker run -p 3000:3000 -v $(pwd):/usr/app lambda-api-dev
```

## Run Tests (>80)

To run tests, run the following command

```bash
  npm run test
```
or
```bash
  npm run test:watch
```

## Tech Stack
- TypeScript
- Node.js
- Express
- Serverless
- AWS Lambda
- Swagger
- Supertest
- Jest

## Author
### Matias Suez
- Github: [@msuez](https://github.com/msuez)
- LinkedIn: [@matisuez](https://www.linkedin.com/in/matisuez/)
