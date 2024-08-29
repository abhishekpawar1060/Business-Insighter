# Step to run the Project
>Step 1 :
```
cd Business-Insighter
```
>Step 2 : 
```
npm init -y
npm i
npm add hono
npm add @hono/zod-validator
npm add zod
npm add @hono/clerk-auth
npm add @clerk/backend
```
>Step 3 : Add the .env.local file in the src folder
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="clerk_publishing_key"
CLERK_PUBLISHABLE_KEY="clerk_publishing_key"
CLERK_SECRET_KEY="cleark_secret_key"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=url_of_database
NEXT_PUBLIC_APP_URL=http://localhost:3000

```
> Get this secret key from Clerak official webisite
> Step 4: Run the Project
```
npm run dev
```


# Setup for the the project
1. For Creating Project
```
npx create-next-app@latest businessinsighter
```

2. Run the shadcn-ui init commnad to setup your project
```
npx shadcn-ui@latest init
```
The shadcn-ui is used the take build in component from the shadcn-ui commands

3. To Run Project 
```
npm run dev
```

4. If You want the component the command is 
```
npx shadcn-ui@latest add button
```
this command add the button component.

# Setup for Hono.js for the API route
> Install below commands : 
```
npm add hono
npm add @hono/zod-validator
npm add zod
npm add @hono/clerk-auth
npm add @clerk/backend

```

# Desing the Header Componet with Dynamic Way



# DataBase Connetion of Postgress
>Step 1: Login the Neon Server and Create the project and get the 'Connection String and Add into .env.local file
```
DATABASE_URL=connetion_string
```

>Step 2: For accessing the data from server we need to install same command.
```
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit@0.20.17
npm i drizzle-orm@0.30.10
```

>Step 3: Add the package that are required for the magration of data to database server
```
npm i dotenv -D
npm i tsx
npm i pg -D
```

>Step 4: It Generate the database by using command
```
npm run db:generate
```

>Step 5: It Migrate data by using command
```
npm run db:migrate
```

#Design GET API for accounts database
>Step 1: Setup the route.ts and accounts.ts file and design api for get method

>Step 2: Install some packages that handle routes the data
 TanStack Query provides a high advantage in the data fetching and caching approach of web applications with automatic caching, refetching and retrying. Fetch API provides code reduction and performance increase when compared to methods such as Axios or
 ```
npm i @tanstack/react-query
 ````
 > For that make file in ./provider/query-provider.tsx add the advances server rendring code from doc