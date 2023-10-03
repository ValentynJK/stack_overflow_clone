import Link from "next/link";
import { Badge } from "../ui/badge";

interface RenderTagProps {
  _id: number;
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
      className='flex items-center justify-between gap-3'
    >
      <Badge
        variant='outline'
        className='background-light800_dark300 text-light400_light500 subtle-medium rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase'
      >
        {name}
      </Badge>
      {showCount && (
        <span className='small-medium text-dark500_light700'>
          {totalQuestions}
        </span>
      )}
    </Link>
  );
};

export default RenderTag;

// className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
