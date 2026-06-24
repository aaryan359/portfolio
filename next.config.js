const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const repoName = "portfolio";

module.exports = {
  // Required for GitHub Pages
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Optimize package imports to drastically reduce memory usage and speed up dev compiling
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react', 'three', '@react-three/drei'],
  },

  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // GitHub Pages cannot run Next.js Image Optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },

  webpack: (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'SomePluginName'
    );
    return config;
  },
};
