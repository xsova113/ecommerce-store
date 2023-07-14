"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const FIlter = ({ valueKey, name, data }: FilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <Separator className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                "p-2 dark:bg-slate-900 bg-white border text-slate-900 dark:text-white hover:bg-slate-100 hover:text-black dark:hover:bg-slate-600",
                selectedValue === filter.id &&
                  "bg-black text-white dark:bg-white dark:text-black hover:bg-slate-600 hover:text-white"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FIlter;
