import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://cancerdb_owner:69uAlyoOKcvB@ep-dawn-water-a86t6089.eastus2.azure.neon.tech/cancerdb?sslmode=require"
);
export const db = drizzle(sql, { schema });
