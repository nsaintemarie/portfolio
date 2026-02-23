import type { Metadata } from "next";
import { Context, Contribution, Results, Projects } from "@/components/sections/projects/";
import { projectsContents } from "@/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = projectsContents[slug];

  if (!data) return {};

  const { title, description, image, keywords } = data.metadata;

  return {
    title: `${slug.toUpperCase()} — Noémie Sainte-Marie`,
    description: description,
    keywords,
    alternates: { canonical: `https://noemiesaintemarie.com/projects/${slug}` },
    openGraph: {
      title,
      description: description,
      url: `https://noemiesaintemarie.com/projects/${slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = projectsContents[slug];

  return (
    <>
      <Context data={data.context} />
      <Contribution data={data.contribution} />
      <Results data={data.results} />
      <Projects current={slug} />
    </>
  )
}
