/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensures consistent URLs for static export
};

export default nextConfig;
