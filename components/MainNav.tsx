"use client";

import { routes } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Category, RoutesType } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();
  const navRoutes: RoutesType[] = routes(data, pathname, params.Id);

  return (
    <nav className="hidden lg:flex gap-8 items-center">
      {navRoutes.map((route) => (
        <div key={route.href} className="bg-transparent w-max">
          <Link
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors",
              route.active && "text-neutral"
            )}
          >
            {route.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default MainNav;
