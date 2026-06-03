import { blogData } from "@/data/siteData";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = blogData[slug];
  if (!data) return {};
  return {
    title: `${data.title} - Blog | Privia Solutions`,
    description: data.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const data = blogData[slug];

  if (!data) {
    notFound();
  }

  return <BlogPostClient post={data} slug={slug} allBlogs={blogData} />;
}
