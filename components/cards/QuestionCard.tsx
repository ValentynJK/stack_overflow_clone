import Link from "next/link";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatLargeNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  question: {
    _id: number;
    title: string;
    tags: { _id: string; name: string }[];
    author: {
      _id: string;
      name: string;
      picture: string;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
  };
}

const QuestionCard = ({ question }: QuestionProps) => {
  const { _id, title, tags, author, upvotes, views, answers, createdAt } =
    question;

  const formattedUpvotes = formatLargeNumber(upvotes);
  const formattedViews = formatLargeNumber(views);
  const formattedAnswers = formatLargeNumber(answers.length);

  const timeStamp = getTimestamp(createdAt);
  return (
    <div className="card-wrapper flex flex-col items-start gap-5 rounded-lg p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {timeStamp}
          </span>
          <Link
            href={`/question/${_id}`}
            className="flex cursor-pointer flex-col items-center"
          >
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* TODO: if signed in add edit or delete */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map(({ _id, name }) => (
          <RenderTag key={_id} _id={_id} name={name} showCount={false} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="body-medium text-dark400_light700 flex w-full flex-wrap items-center justify-between gap-3 max-sm:flex-wrap max-sm:justify-start">
          <div>
            <Metric
              imgUrl="/assets/icons/avatar.svg"
              alt="User image"
              value={author.name}
              title={` asked ${timeStamp}`}
              href={`/profile/${author._id}`}
              isAuthor
              textStyles="body-medium text-dark400_light700"
            />
          </div>
          <div className="flex flex-row flex-wrap items-start gap-3">
            <Metric
              imgUrl="/assets/icons/like.svg"
              alt="Upvotes"
              value={formattedUpvotes}
              title=" Votes"
              textStyles="small-medium text-dark400_light800"
            />
            <Metric
              imgUrl="/assets/icons/message.svg"
              alt="Answers"
              value={formattedAnswers}
              title=" Answers"
              textStyles="small-medium text-dark400_light800"
            />
            <Metric
              imgUrl="/assets/icons/eye.svg"
              alt="Views"
              value={formattedViews}
              title=" Views"
              textStyles="small-medium text-dark400_light800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
