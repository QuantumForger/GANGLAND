const nextConfig = {
  reactStrictMode: true, // Enables strict mode to catch errors in React
  swcMinify: true, // Uses SWC compiler for faster builds and smaller bundles
  experimental: {
    appDir: true, // Enables the App directory in Next.js 13+
    optimizeCss: true, // Reduces CSS size by purging unused styles
    scrollRestoration: true, // Improves user experience by remembering scroll positions
  },
  images: {
    domains: ['your-image-domain.com', 'another-domain.com'], // Add trusted image domains
    deviceSizes: [640, 768, 1024, 1280, 1536], // Tailored breakpoints for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Specific sizes for image optimization
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Matches all paths
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // Prevents clickjacking
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // Mitigates MIME-type attacks
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.quantumaiforge.com;",
          },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // Better referrer handling
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }, // Enforces HTTPS
        ],
      },
    ];
  },
  poweredByHeader: false, // Hides X-Powered-By header for security
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Optimize server builds
      config.externals.push('react', 'react-dom');
    }
    return config;
  },
};

module.exports = nextConfig;

