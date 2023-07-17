## What's that

It's a test task I did in spring '22, refurbished a bit to exclude the company branding. It represents a template of a dedicated marketing campaign page. In a real world scenario it would use some kind of a gimmicky process to create some shareable result for a visitor, and also collect the email.

Sharing status and email collection actually happen asynchronously even before the submit button is clicked.

I was free to choose any SPA stack I want and I decided to try Next.js and Prisma ORM for the first time. It's a cool thing Vercel provides Postgres service so the whole deployment process was a breeze.

I also used redux, though it's not necessary in the project this small, I felt it was important to display that I can.

# Getting Started

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
