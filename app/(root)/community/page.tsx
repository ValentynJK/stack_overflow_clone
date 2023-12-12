import UserCard from "@/components/cards/UserCard";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";

const Community = async () => {
  const { users } = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <Link
        className="flex items-center justify-end max-sm:w-full"
        href="/ask-question"
      ></Link>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          placeholder="Select a Filter"
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="max-md:flex"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {users.length > 0 ? (
          users.map(async (user) => {
            // TODO: refactor and move into utils.js
            // const getMostFrequentTags = (user: any) => {
            //   const tags = user.questions.flatMap(
            //     (question: any) => question.tags
            //   );

            //   const uniqueNames = tags.reduce((acc: any, item: any) => {
            //     if (!acc[item.name]) {
            //       acc[item.name] = {
            //         name: item.name,
            //         qty: 1,
            //         _id: JSON.stringify(item._id),
            //       };
            //     } else {
            //       acc[item.name].qty++;
            //     }
            //     return acc;
            //   }, {});

            //   const counts = Object.values(uniqueNames);

            //   const sortedTagsArray = counts.sort(
            //     (a: any, b: any) => b.qty - a.qty
            //   );
            //   return sortedTagsArray.slice(0, 3);
            // };

            return <UserCard key={user._id} user={user} />;
          })
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-xl text-center">
            <p>No users yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Join to be the firs
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Community;
