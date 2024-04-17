/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async redirects() {
  //     return [
  //       {
  //         source: "/:any*",
  //         destination: "/api/auth/signin/google",
  //         permanent: false,
  //       },
  //     ];
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
