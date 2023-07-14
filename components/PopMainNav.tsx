"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps {
  data: any;
}

const PopMainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();
  const navRoutes = routes(data, pathname, params.Id);

  return (
    <Popover>
      <PopoverTrigger className="lg:hidden block">
        <HamburgerMenuIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="flex flex-col items-start gap-4">
          {navRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium w-full hover:border-slate-900 pb-1 border-b-2 border-transparent transition",
                route.active && "text-neutral"
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
