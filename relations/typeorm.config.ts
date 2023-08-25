import { DataSource } from 'typeorm';
import * as path from 'path';
import { config } from 'dotenv';
config();

export default new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, './**/**.entity.ts')],
  migrations: ['./migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
