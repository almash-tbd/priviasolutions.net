import { blogData, caseStudiesData, productsData, solutionsData } from "@/data/siteData";

export default async function sitemap() {
  const baseUrl = "https://priviasolutions.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/partners",
    "/contact",
    "/careers",
    "/faq",
    "/security",
    "/privacy",
    "/terms",
    "/cookies",
    "/dpa",
    "/changelog",
    "/status",
    "/webinars",
    "/blog",
    "/case-studies",
    "/products",
    "/services",
    "/services/custom-development",
    "/services/mobile-apps",
    "/services/cloud-sre",
    "/services/api-integrations",
    "/services/qa-performance",
    "/services/managed-support",
    "/services/cybersecurity",
    "/services/data-ai",
    "/services/ux-ui",
  ];

  const staticMaps = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes - Blog
  const blogMaps = Object.keys(blogData).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Dynamic routes - Case Studies
  const caseStudiesMaps = Object.keys(caseStudiesData).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic routes - Products
  const productsMaps = Object.keys(productsData).map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic routes - Solutions
  const solutionsMaps = Object.keys(solutionsData).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticMaps,
    ...blogMaps,
    ...caseStudiesMaps,
    ...productsMaps,
    ...solutionsMaps,
  ];
}
