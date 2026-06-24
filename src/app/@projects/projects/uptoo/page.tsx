import type { Metadata } from "next";
import { Context, Results } from "@/components/sections/projects/";
import { Migrations, AIApproach, Team } from "./components";
import { UptooContent as data } from "@/data";

export async function generateMetadata(): Promise<Metadata> {

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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage() {

  return (
    <>
      <Context data={data.context} />
      <Migrations data={data.migrations} />
      <AIApproach data={data.ai} />
      <Team data={data.team} />
      <Results data={data.results} />
    </>
  )
}
