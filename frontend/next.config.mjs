/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // এটি যোগ করা হয়েছে
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // আপনার আগের হোস্টনেম
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;