// eslint-disable-next-line jsdoc/check-tag-names
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '2digits.stream.prepr.io',
      },
    ],
  },
  reactStrictMode: true,
  logging: {
    fetches: { fullUrl: true },
  },
};

export default nextConfig;
