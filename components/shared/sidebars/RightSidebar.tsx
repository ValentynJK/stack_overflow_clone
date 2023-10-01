import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  return (
    <section className='custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-fit flex-col justify-between gap-8 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden max-sm:hidden lg:w-[330px]'>
      <div className='text-dark400_light900'>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='flex flex-1 flex-col gap-8 py-8'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className='flex items-center justify-between gap-3'
              key={index}
            >
              <p className='body-medium text-dark500_light700'>
                What is an example of 3 numbers that do not make up a vector?
              </p>
              <Image
                src='/assets/icons/chevron-right.svg'
                width={20}
                height={20}
                alt='chevron right'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='text-dark200_light900'>
        <h3 className='h3-bold'>Popular Tags</h3>
        <div className='flex flex-1 flex-col gap-8 py-8'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className='flex items-center justify-between gap-3'
              key={index}
            >
              <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                JavaScript
              </div>
              <span className='text-sm'>5</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
