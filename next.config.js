const nextConfig = {
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
    //minimumCacheTTL: 60,
  },
  //reactStrictMode: true,
}
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const toggleMaintenance = false

module.exports = withPlugins(
  [optimizedImages, { handleImages: ["svg"] }],
  nextConfig
)
