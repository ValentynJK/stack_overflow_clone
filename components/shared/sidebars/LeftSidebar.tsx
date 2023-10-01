"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LoginSignup from "../navbar/LoginSignup";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-1 flex-col gap-6'>
      {sidebarLinks.map((item, index) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Link
            className={`${
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
            key={index}
            href={item.route}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${
                isActive ? "base-bold" : "base-medium"
              } max-lg:hidden`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <section className='custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <NavContent />
      <LoginSignup />
    </section>
  );
};

export default LeftSidebar;
