/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  basePath: process.env.PAGES_BASE_PATH
};

export default nextConfig;
