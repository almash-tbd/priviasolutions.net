import { caseStudiesData } from "@/data/siteData";
import { notFound } from "next/navigation";
import CaseStudyClient from "@/components/CaseStudyClient";

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = caseStudiesData[slug];
  if (!data) return {};
  return {
    title: `${data.title} - Case Study | Privia Solutions`,
    description: data.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyClient data={data} slug={slug} />;
}
