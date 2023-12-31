import UserCard from "@/components/cards/UserCard";
import { getAllUsers } from "@/lib/actions/user.action";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import { Metadata } from "next";
import NoResult from "@/components/shared/NoResult";

export const metadata: Metadata = {
  title: "Community | Dev Overflow",
};

const Community = async () => {
  const { users } = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

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
          users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <NoResult
            title="No users so far"
            description="It looks like there is no users yet"
            buttonLink="/sign-in"
            linkTitle="Join to be first"
          />
        )}
      </section>
    </>
  );
};

export default Community;

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
