/* @type {import('next').NextConfig} 
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['your-image-hosting.com'], // Add your image domain if needed
    },
  }
  
  module.exports = nextConfig;
  */
  /** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      allowedDevOrigins: ['http://localhost:3000', 'http://192.168.68.101:3000']
    }
  };
  
  module.exports = nextConfig;