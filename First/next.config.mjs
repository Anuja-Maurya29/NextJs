/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

    images: {
    localPatterns: [
      {
        pathname: '/**', // Matches all local image paths
        // Omitting 'search' property allows ALL query strings
      },
    ],
  },

};

export default nextConfig;
