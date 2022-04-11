## Getting Started

# Install
we stick with yarn
```bash
yarn install
```

# Prisma ORM
copy .env-example into .env to set up database connection like this
`postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`

```bash
npx prisma migrate dev
```

# Run the development server:

```bash
yarn dev
```

Open [http://localhost:7807](http://localhost:7807) with your browser to see the result.
