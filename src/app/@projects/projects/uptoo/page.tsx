import type { Metadata } from "next";
import { Context, Contribution, Results, Projects } from "@/components/sections/projects/";
import { projectsContents } from "@/data";

export async function generateMetadata(): Promise<Metadata> {
  const data = projectsContents.uptoo;

  if (!data) return {};

  const { title, description, image, keywords } = data.metadata;

  return {
    title: `${title} — Noémie Sainte-Marie`,
    description: description,
    keywords,
    alternates: { canonical: "https://noemiesaintemarie.com/projects/uptoo" },
    openGraph: {
      title,
      description: description,
      url: "https://noemiesaintemarie.com/projects/uptoo",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function ProjectPage() {
  const data = projectsContents.uptoo;

  return (
    <>
      <Context data={data.context} />
      {data.contributions.map((contribution, index) => (
        <Contribution data={contribution} index={index}/>
      ))}
      <Results data={data.results} />
    </>
  )
}
