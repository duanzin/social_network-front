/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:slug([A-Za-z0-9]+)*",
        destination: "http://localhost:5000/:slug([A-Za-z0-9]+)*",
      },
    ];
  },
};

module.exports = nextConfig;
