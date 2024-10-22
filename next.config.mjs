/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sabbath-school.adventech.io",
        port: "",
        pathname: "/assets/logo.png",
      },
      {
        protocol: "https",
        hostname: "sabbath-school.adventech.io",
        port: "",
        pathname: "/api/v2/en/quarterlies/2024-04-cq/cover.png",
      },
    ],
  },
};

export default nextConfig;
