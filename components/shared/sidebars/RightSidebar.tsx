import Image from "next/image";
import Link from "next/link";
import RenderTag from "../RenderTag";

const tags = [
  { _id: 1, name: "JavaScript", totalQuestions: 5 },
  { _id: 2, name: "NextJS", totalQuestions: 11 },
  { _id: 3, name: "Python", totalQuestions: 10 },
  { _id: 4, name: "C++", totalQuestions: 7 },
  { _id: 5, name: "React", totalQuestions: 6 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-fit flex-col justify-between gap-8 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden max-sm:hidden lg:w-[350px]">
      <div className="text-dark400_light900">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="flex flex-1 flex-col gap-8 py-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Link
              href="/"
              className="flex cursor-pointer items-center justify-between gap-7"
              key={index}
            >
              <p className="body-medium text-dark500_light700">
                What is an example of 3 numbers that do not make up a vector?
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron right"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-dark200_light900">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="flex flex-1 flex-col gap-8 py-8">
          {tags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
