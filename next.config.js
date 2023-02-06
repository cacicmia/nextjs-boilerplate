/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.build.json',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
