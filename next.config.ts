import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

// next.config.js
module.exports = {
  
  reactStrictMode: true,
  images: {
    domains: ['byandlarge.studio'], // optional
  },
    target: 'serverless'
};


export default nextConfig;
