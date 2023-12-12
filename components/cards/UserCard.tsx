import Link from "next/link";
import Image from "next/image";
import RenderTag from "../shared/RenderTag";
import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import { Badge } from "../ui/badge";

interface UserCardParams {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: UserCardParams) => {
  const { _id, clerkId, picture, name, username } = user;
  const interactedTags = await getTopInteractedTags({ userId: _id });
  return (
    <Link
      href={`/profile/${clerkId}`}
      className=" shadow-light100_darknone h-[280px] w-full cursor-pointer rounded-[10px] max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border text-dark200_light900 flex w-full flex-col items-center justify-center gap-5 rounded-2xl border p-8 ">
        <Image
          src={picture}
          width={100}
          height={100}
          alt="user profile picture"
          className="rounded-full"
        />
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">{name}</h3>
          <p className="body-regular text-dark500_light500 mt-2">@{username}</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {interactedTags.length > 0 ? (
              <div className="flex items-center gap-2">
                {interactedTags.map((tag) => (
                  <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
                ))}
              </div>
            ) : (
              <Badge>No tags yet</Badge>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
