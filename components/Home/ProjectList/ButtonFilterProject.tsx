import { useState } from "react";
import { FollowerPointerCard } from "../../ui/FollowingPointer";
import { cn } from "@/utils/cn";
import ButtonFade from "@/components/ui/ButtonFade";
import { useAppDispatch } from "@/lib/hooks";
import { filterByTechnology } from "@/lib/features/portfolioSlice";

export default function ButtonFilterProject({
  list,
  onFilterChange,
}: {
  list: Array<any>;
  onFilterChange: (newFilter: any) => void;
}) {  
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();

  const handleClick = (index: number, tech: string) => {
    setActive(index)
    dispatch(filterByTechnology(tech))
    onFilterChange(tech);
  };

  return (
    <div className="flex flex-wrap items-center relative">
      <FollowerPointerCard
        title={
          <TitleComponent
            title='All'
          />
        }
      >
        <button
          className={cn("flex items-center shadow-[inset_0_0_0_2px_#616467] text-black px-4 text-sm rounded-full bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 relative h-12 cursor-none", (active === 0 ? "bg-blue-500/40 text-white" : ""))}
          onClick={() => handleClick(0, "*")}
        >
          All
        </button>
      </FollowerPointerCard>
      
      {list.map((tech, index) => {
        const isActive = index + 1 === active;
        let buttonStyle = `ms-3 ${isActive ? "bg-blue-500/40 text-white" : ""}`;

        return (
          <ButtonFade 
            key={index + 1}
            img={tech.img} 
            pointerTitle={tech.name}
            buttonStyle={buttonStyle}
            imgStyle={tech.imgStyle}
            onClick={() => handleClick(index + 1, tech.name)}
          />
        );
      })}
    </div>
  );
}

const TitleComponent = ({
  title,
}: {
  title?: string;
}) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);