import { Context } from "@/components/sections/projects/";
import { projectsContents } from "@/data/projects/contents";

export default async function ProjectPage({ params }: { params: { slug : string } }) {
  const { slug } = (await params)
     const data = projectsContents[slug];
     
  return (
    <>
      <Context data={data.context} />
    </>
  );
}
