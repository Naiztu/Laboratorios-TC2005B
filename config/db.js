import { createPool } from "mysql2/promise";

const pool = createPool({
  connectionLimit: process.env.MYSQL_ADDON_LIMIT,
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  port: process.env.MYSQL_ADDON_PORT,
  database: process.env.MYSQL_ADDON_DB,
  waitForConnections: true,
  queueLimit: 0,
});

export { pool };
