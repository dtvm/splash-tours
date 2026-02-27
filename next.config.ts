import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "splashtoursroatan.com",
          },
        ],
        destination: "https://www.splashtoursroatan.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
