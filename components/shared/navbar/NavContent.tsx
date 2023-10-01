"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className='text-dark400_light900 flex h-full flex-1 flex-col gap-6 px-6 py-16'>
      {sidebarLinks.map((item, index) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <div key={item.route}>
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
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default NavContent;
