"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalSearchTypes {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchTypes) => {
  return (
    <div className="relative w-full">
      <div
        className={`${otherClasses} background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-5 rounded-xl px-4 ${
          iconPosition === "right" && "flex-row-reverse"
        }`}
      >
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search icon"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default LocalSearch;
