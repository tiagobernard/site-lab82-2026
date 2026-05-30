import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  serverExternalPackages: ["nodemailer"],
  images: {
    unoptimized: true,
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
