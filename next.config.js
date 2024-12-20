/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable App Router (requires Next.js 13+)
  },
};

module.exports = nextConfig;

// Notes:
// - Ensure your Next.js version is 13 or above to use `appDir`.
// - If your version is below 13, remove the `experimental` block or upgrade Next.js.
// - Restart your server after changes with `npm run dev`.

