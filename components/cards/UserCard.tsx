import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import RenderTag from "../shared/RenderTag";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <div className="background-light900_dark200 shadow-light100_darknone flex w-full flex-col items-center justify-center gap-3 rounded-2xl  text-center max-xs:min-w-full xs:w-[260px]">
      <Link
        href={`/profile/${user.clerkId}`}
        className="mt-8 flex w-full flex-col items-center px-6"
      >
        <Image
          src={user.picture}
          alt="user profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />

        <h3 className="h3-bold text-dark200_light900 mt-4 line-clamp-1">
          {user.name}
        </h3>
        <p className="body-regular text-dark500_light500 mt-2">
          @{user.username}
        </p>
      </Link>

      <div className="my-4 mb-8">
        {interactedTags.length > 0 ? (
          <div className="flex items-center gap-1">
            {interactedTags.map((tag) => (
              <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
            ))}
          </div>
        ) : (
          <Badge>No tags yet</Badge>
        )}
      </div>
    </div>
  );
};

export default UserCard;
