/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: '/',
          destination: '/browse', // Replace with the actual path of your default page
        },
      ];
    },
  async redirects() {
      return [
        {
          source: '/tr',
          destination: '/',
          permanent: true, // True for permanent redirect (308), false for temporary (307)
        },
      ];
    },
  images:{
      unoptimized:true,
      domains:['myunilab.net']
  }
}

module.exports = nextConfig;

