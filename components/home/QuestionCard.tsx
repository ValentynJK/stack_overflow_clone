import Link from "next/link";
import RenderTag from "../shared/RenderTag";
import Image from "next/image";

const tags = [
  { _id: 1, name: "JavaScript" },
  { _id: 2, name: "NextJS" },
  { _id: 3, name: "Python" },
];

interface QuestionTotalType {
  imageName: string;
  totalName: string;
  totalCount: number;
}

const QuestionTotal = ({
  imageName,
  totalName,
  totalCount,
}: QuestionTotalType) => {
  return (
    <div className="small-regular flex gap-1">
      <Image
        src={`assets/icons/${imageName}.svg`}
        width={20}
        height={20}
        alt={imageName}
      />
      <p>
        {totalCount} <span className="capitalize">{totalName}</span>
      </p>
    </div>
  );
};

const QuestionCard = () => {
  return (
    <div className="background-light900_dark200 flex flex-col items-start gap-5 rounded-lg px-12 py-9">
      <Link href="/" className="flex cursor-pointer flex-col items-center">
        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
          The Lightning Component c:LWC_PizzaTracker generated invalid output
          for field status. Error How to solve this
        </h3>
      </Link>
      <div className="flex gap-3">
        {tags.map(({ _id, name }) => (
          <RenderTag key={_id} _id={_id} name={name} showCount={false} />
        ))}
      </div>
      <div className="mt-3 flex w-full justify-between">
        <div>
          <p className="body-medium text-dark400_light700 flex items-center gap-1">
            Valentyn | JS Mastery
            <span className="small-regular line-clamp-1 max-sm:hidden">
              • asked 59 days ago
            </span>
          </p>
        </div>
        <div className="body-medium text-dark400_light700 flex items-center justify-center gap-3">
          <QuestionTotal imageName="like" totalName="votes" totalCount={13} />
          <QuestionTotal
            imageName="message"
            totalName="answers"
            totalCount={6}
          />
          <QuestionTotal imageName="eye" totalName="views" totalCount={524} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
