/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export for GitHub Pages
    images: {
      unoptimized: true, // Prevents image optimization (GitHub Pages does not support Next.js image optimization)
    },
    basePath: "/splendidpahadi.github.io", // Required for GitHub Pages
    assetPrefix: "/splendidpahadi.github.io/", // Fixes broken asset paths
  };
  
  export default nextConfig;
  