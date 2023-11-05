import Link from "next/link";
import { Badge } from "../ui/badge";

interface RenderTagProps {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount: boolean;
}

const RenderTag = ({
  _id,
  name,
  totalQuestions,
  showCount,
}: RenderTagProps) => {
  return (
    <Link
      key={_id}
      href={`/tags/${_id}`}
      className="flex items-center justify-between gap-3"
    >
      <Badge
        variant="outline"
        className="background-light800_dark300 text-light400_light500 subtle-medium rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase"
      >
        {name}
      </Badge>
      {showCount && (
        <span className="small-medium text-dark500_light700">
          {totalQuestions}
        </span>
      )}
    </Link>
  );
};

export default RenderTag;
