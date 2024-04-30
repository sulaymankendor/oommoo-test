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
};
module.exports = {
  images: {
    domains: ["images.pexels.com", "miro.medium.com", "www.cnet.com"],
  },
};

export default nextConfig;
