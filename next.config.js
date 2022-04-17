/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASS: process.env.PASS,
    SALT: process.env.SALT,
    MYSQL_ADDON_LIMIT: process.env.MYSQL_ADDON_LIMIT,
    MYSQL_ADDON_HOST: process.env.MYSQL_ADDON_HOST,
    MYSQL_ADDON_USER: process.env.MYSQL_ADDON_USER,
    MYSQL_ADDON_PASSWORD: process.env.MYSQL_ADDON_PASSWORD,
    MYSQL_ADDON_PORT: process.env.MYSQL_ADDON_PORT,
    MYSQL_ADDON_DB: process.env.MYSQL_ADDON_DB,
    MYSQL_ADDON_LIMIT: process.env.MYSQL_ADDON_LIMIT,
  },
};

module.exports = nextConfig;
