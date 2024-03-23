

## Todo App made by Next JS
This app is a fullstack app which is made through native next js library and prisma ORM.
## Deployment

To deploy this project run

#### 1. Clone the repo
```bash
git clone https://github.com/async-avi/todoAppNextJS
```
#### 2. Install prisma and init 
```bash
npm i prisma 
```

```bash
npx prisma init
```

#### 3. Add your prisma config (default is mongodb)
```bash
datasource db {
  provider = "<mongodb/postgres/mysql"
  url      = env("DATABASE_URL")
}
```

#### 4.Add your db url in .env
```bash
DATABASE_URL="<your url>"
```

#### 5. Generate prisma client
Generate prisma client according to your DB provider.

#### 6. Run the application
```bash
npm run dev
```
