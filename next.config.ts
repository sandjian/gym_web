
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "randomuser.me",
        },
        {
          protocol: "https",
          hostname: "i.scdn.co",
        },
        {
          protocol: "https",
          hostname: "tailwindui.com",
        },
        {
          protocol: "https",
          hostname: "assets.aceternity.com"
        },
        
      ],
    },
};

export default nextConfig;