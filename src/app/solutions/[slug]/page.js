import { solutionsData } from "@/data/siteData";
import { notFound } from "next/navigation";
import SolutionsClient from "@/components/SolutionsClient";

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) return {};
  return {
    title: `${data.title} - Solutions | Privia Solutions`,
    description: data.description,
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const data = solutionsData[slug];

  if (!data) {
    notFound();
  }

  return <SolutionsClient slug={slug} data={data} />;
}

