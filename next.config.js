const nextConfig = {
  reactStrictMode: true,
}

const withOptimizedImages = require("next-optimized-images")
const toggleMaintenance = false

module.exports = {
  async redirects() {
    return [
      toggleMaintenance
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : {
            source: "/maintenance.html",
            destination: "/",
            permanent: false,
          },
    ]
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}`],
    // minimumCacheTTL: 60,
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  withOptimizedImages: withOptimizedImages({
    handleImages: ["svg"],
  }),
}
