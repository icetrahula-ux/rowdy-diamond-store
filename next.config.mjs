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
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "rowdydiamond.store", "admin.rowdydiamond.store", "seller.rowdydiamond.store", "*.vercel.app"],
    },
  },
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        has: [{ type: 'host', value: 'rowdydiamond.store' }],
        destination: 'https://admin.rowdydiamond.store/:path*',
        permanent: true,
      },
      {
        source: '/seller/:path*',
        has: [{ type: 'host', value: 'rowdydiamond.store' }],
        destination: 'https://seller.rowdydiamond.store/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // --- Admin Subdomain Proxy ---
        {
          source: '/login',
          has: [{ type: 'host', value: 'admin.rowdydiamond.store' }],
          destination: '/admin/login',
        },
        {
          source: '/',
          has: [{ type: 'host', value: 'admin.rowdydiamond.store' }],
          destination: '/admin',
        },
        {
          source: '/:path((?!api|_next|admin).*)',
          has: [{ type: 'host', value: 'admin.rowdydiamond.store' }],
          destination: '/admin/:path',
        },
        
        // --- Seller Subdomain Proxy ---
        {
          source: '/login',
          has: [{ type: 'host', value: 'seller.rowdydiamond.store' }],
          destination: '/seller-login',
        },
        {
          source: '/',
          has: [{ type: 'host', value: 'seller.rowdydiamond.store' }],
          destination: '/seller/dashboard',
        },
        {
          source: '/:path((?!api|_next|seller).*)',
          has: [{ type: 'host', value: 'seller.rowdydiamond.store' }],
          destination: '/seller/:path',
        },
      ],
    };
  },
};

export default nextConfig;
