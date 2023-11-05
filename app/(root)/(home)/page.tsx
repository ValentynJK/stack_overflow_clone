import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import QuestionCard from "@/components/home/QuestionCard";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          className="flex items-center justify-end max-sm:w-full"
          href="/ask-question"
        >
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for options..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          placeholder="Select a Filter"
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <section className="mt-10 flex flex-col gap-6 dark:text-light-900">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <QuestionCard />
          </div>
        ))}
      </section>
    </>
  );
}
