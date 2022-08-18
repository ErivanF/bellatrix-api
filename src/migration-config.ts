import { mongoMigrateCli } from 'mongo-migrate-ts';
import 'dotenv/config'
mongoMigrateCli({
  uri: process.env.MONGODB_URL||'mongodb://localhost:27017',
  database: process.env.MONGODB_DATABASE,
  migrationsDir: 'src/migrations',
  migrationsCollection: 'migrations_collection',
});