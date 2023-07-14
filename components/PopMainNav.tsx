"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: any;
}

const PopMainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();
  const navRoutes = routes(data, pathname, params.Id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Popover>
      <PopoverTrigger className="lg:hidden block">
        <HamburgerMenuIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="flex flex-col items-start gap-1">
          {navRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium w-full py-3 hover:bg-gray-200 dark:hover:bg-gray-700 px-2 transition",
                route.active && "text-neutral bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopMainNav;
