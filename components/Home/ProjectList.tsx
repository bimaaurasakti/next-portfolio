"use client";
import ButtonFilterProject from "./ProjectList/ButtonFilterProject";
import { projectTechs } from "@/data"
import CardProjectList from "./ProjectList/CardProjectList";

export default function ProjectList() {
  return (
    <section id='projects' className="container max-w-7xl mx-auto py-2">
      <ButtonFilterProject list={projectTechs} />
      <CardProjectList />
    </section>
  )
}
