import { cn } from "@/utils/cn";
import { FollowerPointerCard } from "./FollowingPointer";

export default function ButtonFade({
  text,
  img,
  buttonStyle,
  imgStyle,
  pointerTitle,
  onClick,
}: {
  text?: string;
  img?: string;
  buttonStyle?: string;
  imgStyle?: string;
  pointerTitle?: string;
  onClick?: () => void;
}) {
  return (
    <>
      {pointerTitle && pointerTitle.trim() !== "" ? (
        <FollowerPointerCard
          title={
            <TitleComponent
              title={pointerTitle}
            />
          }
        >
          <button
            className={cn("flex items-center shadow-[inset_0_0_0_2px_#616467] text-black px-6 text-sm rounded-full bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 relative h-12 cursor-none", buttonStyle)}
            onClick={onClick}
          >
            {img === "All" ? (
              img
            ) : (
              <img className={cn("w-9 h-9", imgStyle)} src={img} alt={img} />
            )}
          </button>
        </FollowerPointerCard>
      ) : (
        <button
          className={cn("flex items-center shadow-[inset_0_0_0_2px_#616467] text-black px-6 text-sm rounded-full bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 relative h-12", buttonStyle)}
          onClick={onClick}
        >
          {img ? (
            <img className={cn("w-14 h-14", imgStyle)} src={img} alt={img} />
          ) : ''}
          {text || ('')}
        </button>
      )}
    </>
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
