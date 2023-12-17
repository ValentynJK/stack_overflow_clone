"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterOptions {
  name: string;
  value: string;
}

interface FiltersTypes {
  filters: FilterOptions[];
  placeholder: string;
  otherClasses: string;
  containerClasses: string;
}

const Filters = ({
  filters,
  placeholder,
  otherClasses,
  containerClasses,
}: FiltersTypes) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent className="text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300">
          <SelectGroup>
            {filters.map(({ value, name }) => (
              <SelectItem
                className="cursor-pointer px-1  focus:bg-light-800 dark:focus:bg-dark-400"
                key={value}
                value={value}
              >
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
