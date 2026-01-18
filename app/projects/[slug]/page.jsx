import { notFound } from "next/navigation";
import { projects } from "@/utils/data/projects-data";
import ProjectDetailClient from "../project-detail-client";


/* REQUIRED for output: export */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
