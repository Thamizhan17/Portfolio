import { Hono } from "hono";

export interface Env {}

const app = new Hono<{ Bindings: Env }>();

export default app;
