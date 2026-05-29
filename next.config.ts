import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tiagobernardes.com.br",
        pathname: "/imagens/**",
      },
    ],
  },
};

export default nextConfig;
