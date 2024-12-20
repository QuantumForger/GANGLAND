/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed invalid or unnecessary experimental options
};

module.exports = nextConfig;

// Notes:
// - `appDir` has been removed because it caused compatibility issues.
// - Restart your server after changes with `npm run dev`. Ensure Next.js features are functioning correctly.
