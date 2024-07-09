"use client"
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { cn } from "@/utils/cn";
import Image from 'next/image';
import Isotope from "isotope-layout";

export default function CardProjectList({
  filter,
}: {
  filter: string
}) {
  const store = useAppStore()
  const projectPortfolio = useAppSelector(state => state.portfolio.list);
  const [filterKey, setFilterKey] = useState(filter);
  const isotope = React.useRef<Isotope | null>();

  useEffect(() => {
    (async () => {
      // Dynamically load Isotope
      const Isotope = (await import('isotope-layout')).default;

      isotope.current = new Isotope(".project-container", {
        itemSelector: ".project-item",
        layoutMode: "fitRows"
      });
    })();

    // cleanup
    return () => isotope.current?.destroy();
  }, [])

  // handling filter key change
  useEffect(() => {
    if (filter == "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filter}` });
    setFilterKey(filter)
  }, [filter]);

  return (
    <div className='project-container mt-6'>
      {projectPortfolio.map((project, index) => (
        <div key={index} className={cn('project-item w-1/3 px-3 mb-6', project.technology)}>
          <div key={index} className={cn('flex flex-col px-4 pt-4 pb-5 bg-[#18181b] rounded-xl', project.technology)}>
            <div className='relative h-[273px]'>
              <Image priority fill sizes="auto" src={project.thumbnail} alt={project.thumbnail} className='rounded-lg object-contain' />
            </div>
            <div className='flex items-center mt-3 relative'>
              <div className='relative h-10 w-10'>
                <Image fill sizes="auto" src={project.logo} alt={project.logo} className='w-12 h-12 rounded-full object-contain' />
              </div>
              <div className='ms-2'>
                <h2 className='font-bold'>{project.title}</h2>
                <p className='text-sm font-thin'>{project.subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
