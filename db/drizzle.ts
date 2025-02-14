import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { config } from "dotenv";

import * as schema from "./schema";
config({ path: ".env" });

const turso = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
});

export const db = drizzle(turso, { schema });
