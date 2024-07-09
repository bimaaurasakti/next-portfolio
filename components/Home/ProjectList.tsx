"use client";
import ButtonFilterProject from "./ProjectList/ButtonFilterProject";
import { techs } from "@/data"
import { useState } from "react";
import CardProjectList from "./ProjectList/CardProjectList";

export default function ProjectList() {
  const [filter, setFilter] = useState('*');

  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
    console.log(newFilter)
  };

  return (
    <section id='projects' className="container max-w-7xl mx-auto pt-2 pb-10 relative">
      <ButtonFilterProject onFilterChange={handleFilterChange} list={techs} />
      <CardProjectList filter={filter} />
    </section>
  )
}
