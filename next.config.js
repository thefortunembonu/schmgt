/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["127.0.0.1", "localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**localhost**",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};
