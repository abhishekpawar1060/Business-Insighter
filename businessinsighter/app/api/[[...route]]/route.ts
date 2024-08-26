import { z } from 'zod';
import { Hono, HonoRequest } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { error } from 'console';


export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get("/hello", (c) => {
    return c.json({ helo: "World"});
});

    

export const GET = handle(app);
export const POST = handle(app);