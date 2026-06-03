export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/signup"],
    },
    sitemap: "https://aetherissystems.com/sitemap.xml",
  };
}
