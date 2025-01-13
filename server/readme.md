# Init Project

## Prisma setup

- npm init -y
- npm i -D ts-node typescript @types/node = for typescript
- npx tsc --init = to initialize our tsconfig.json
- npm i prisma @prisma/client
- npx prisma init
- npx prisma generate
- npx prisma migrate dev --name init
- npx prisma studio

## Backend setup

- npm i express body-parser cors dotenv helmet morgan
- npm i -D rimraf concurrently nodemon
