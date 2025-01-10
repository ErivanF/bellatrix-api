import { mongoMigrateCli } from "mongo-migrate-ts";
import "dotenv/config";
mongoMigrateCli({
  uri: process.env.MONGODB_URL,
  migrationsDir: "src/migrations",
  migrationsCollection: "migrations_collection",
});
