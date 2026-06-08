export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/signup"],
    },
    sitemap: "https://priviasolutions.com/sitemap.xml",
  };
}
