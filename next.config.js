/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url: 'http://localhost:3000',
    mongodburl: 'mongodb+srv://security:abretesesamo@matrix.aaphs.mongodb.net/mooncake?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
