/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //     },
  //   ],
  // },
  images: {
    domains: ["*"],
  },
};

export default nextConfig;
