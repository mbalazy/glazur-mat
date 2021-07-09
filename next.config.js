const withImages = require('next-images')
module.exports = withImages({
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    SANITY_ID: process.env.SANITY_ID,
  },
})
