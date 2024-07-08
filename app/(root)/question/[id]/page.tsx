import { getQuestionById } from "@/lib/actions/question.action";
import Link from "next/link";
import Image from "next/image";
import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import { formatLargeNumber, getTimestamp } from "@/lib/utils";
import RenderTag from "@/components/shared/RenderTag";

const Question = async ({ params }: { params: { id: string } }) => {
  const { question } = await getQuestionById({ questionId: params.id });
  const {
    title,
    content,
    tags,
    views,
    // upvoted,
    // downvoted,
    author,
    answers,
    createdAt,
  } = question;
  return (
    <>
      <div className="flex-start flex w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            className="flex items-center justify-start gap-1"
            href={`/profile/${author.clerkId}`}
          >
            <Image
              src={author.picture}
              width={32}
              height={32}
              alt="author picture"
              className="rounded-full"
            ></Image>
            <p className="paragraph-semibold text-dark300_light700">
              {author.name}
            </p>
          </Link>
          <div className="flex justify-end">Voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {title}
        </h2>
      </div>
      <div className="my-5 flex w-full flex-wrap justify-start gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="Asked"
          value={`Asked ${getTimestamp(createdAt)}`}
          title=""
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Answers"
          value={formatLargeNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="Views"
          value={formatLargeNumber(views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={content} />

      <div>
        {tags.map((tag: any) => (
          <RenderTag
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
