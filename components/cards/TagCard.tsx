import Link from "next/link";

interface Props {
  tag: {
    _id: string;
    name: string;
    questions: string[];
    followers: string[];
  };
}

const TagCard = ({ tag }: Props) => {
  const { name, _id, questions } = tag;
  return (
    <Link href={`/tags/${_id}`} className="shadow-light100_darknone">
      <article className="background-light900_dark200 shadow-light100_darknone flex w-full flex-col items-start justify-center gap-3 rounded-2xl px-8 py-10 max-xs:min-w-full xs:w-[260px]">
        <div className="subtle-medium background-light800_dark400 line-clamp-1 rounded-sm border-none px-5 py-1.5">
          <p className="paragraph-semibold text-dark300_light900 ">{name}</p>
        </div>
        <p className="text-dark400_light700 text-xs">
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS
        </p>
        <div className="flex items-center justify-start gap-2">
          <p className="text-dark400_light500 body-regular">
            <span className="primary-text-gradient body-semibold">{`${questions.length}+ `}</span>
            Questions
          </p>
        </div>
      </article>
    </Link>
  );
};

export default TagCard;
