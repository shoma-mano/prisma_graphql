## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Setup

DB
```shell
docker compose up 
npx prisma migrate reset 
cat ./sql/backup.sql | docker exec -i mysql_host mysql -u root --password=root test_database  
```


create sql by dump
```shell
docker exec mysql_host /usr/bin/mysqldump -u root --password=root test_database > ./sql/backup.sql
```

# graphQL PlayGround
http://localhost:3000/playground



# this repository refers https://github.com/notiz-dev/nestjs-prisma-starter