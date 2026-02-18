import { Context, Contribution, Results, Projects } from "@/components/sections/projects/";
import { projectsContents } from "@/data";

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
