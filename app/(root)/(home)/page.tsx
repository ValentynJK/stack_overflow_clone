import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "How to Use TypeScript with React?",
    tags: [
      { _id: "1", name: "typescript" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "user1",
      name: "Alice Johnson",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 1500000,
    views: 12432421,
    answers: [
      {
        answerId: 1,
        answerText: "You can use TypeScript with React by...",
        author: {
          _id: "user3",
          name: "Bob Smith",
          picture: "/assets/icons/avatar.svg",
        },
      },
      {
        answerId: 2,
        answerText: "Here's a simple example of using TypeScript...",
        author: {
          _id: "user4",
          name: "Eve Wilson",
          picture: "/assets/icons/avatar.svg",
        },
      },
    ],
    createdAt: new Date("2023-05-15T09:30:00.000Z"),
  },
  {
    _id: 2,
    title: "React Router Not Navigating Properly",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "react-router" },
    ],
    author: {
      _id: "user2",
      name: "Charlie Brown",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 20,
    views: 180,
    answers: [],
    createdAt: new Date("2023-05-16T14:45:00.000Z"),
  },
];

// The questions array now contains two objects with the specified structure.

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
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            buttonLink="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </section>
    </>
  );
}
