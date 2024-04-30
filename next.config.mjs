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
    domains: ["https://s3-alpha-sig.figma.com"],
  },
};

export default nextConfig;
