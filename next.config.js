/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        // Add any Turbopack-specific configurations if needed
      }
    },
    // Add allowed dev origins to resolve the cross-origin warning
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.68.101:3000']
  };
  
  module.exports = nextConfig;